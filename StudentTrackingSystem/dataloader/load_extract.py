from django.db import IntegrityError
import datetime
import copy
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist

import django
django.setup()

from datamodel.models import Student,Course,Enrolment,UploadSet

import pandas as pd
from pandas.io import sql


from concurrent.futures import ProcessPoolExecutor
from concurrent.futures import ThreadPoolExecutor
from concurrent.futures import as_completed



class DataFileExtractor:
    _upload_set: UploadSet = None

    def __init__(self, upload_set: UploadSet = None):
        if upload_set == None:
            upload_set = UploadSet(upload_datetime=timezone.now())
            upload_set.save()

        self._upload_set = upload_set

    def get_upload_set(self):
            return self._upload_set

    def uploadAllFiles(self,personfile,coursefile,transferfile):
        with ThreadPoolExecutor(max_workers=53) as e:
            e.submit(self.uploadPersonDataFile,personfile)
            e.submit(self.uploadCourseDataFile,coursefile)
            e.submit(self.uploadTransferDataFile,transferfile)

    #**Upload PersonData File : creates Student Models**
    def uploadPersonDataFile(self,personfile):
        dfp = pd.read_table(personfile,header=0,squeeze=True) #Read PersonData.txt into DataFrame
        dfp = dfp.loc[:, ~dfp.columns.str.contains('^Unnamed')]
        studentList = self.IterStudents(dfp)
        Student.objects.bulk_create(studentList)

    def IterStudents(self,dfp):
        dfp.drop_duplicates(subset=['Student_ID'],keep='last',inplace=True)
        dfp = dfp.values.tolist()
        studentList = []
        with ProcessPoolExecutor(max_workers=2) as exe:
            studentList = exe.map(self.makeStudent,dfp)
        try:
            studentList = list(filter(None,studentList))
        except ObjectDoesNotExist:
            pass # There are no None types
        return studentList

    def makeStudent(self,dfp):
        if Student.objects.filter(
            student_number=dfp[0]
        ).exists():
            return None
        else:
            student = Student(
                student_number=dfp[0],
                name=dfp[1],
                gender=dfp[2],
                address=dfp[3],
                email=dfp[6],
                program=dfp[7],
                campus=dfp[8],
                start_date=dfp[9],
                upload_set=self.get_upload_set()
            )
        return student

    #**Upload CourseData File, creates Course and Enrolment Models
    def uploadCourseDataFile(self,coursefile):
        dfc = pd.read_table(coursefile,header=0,squeeze=True) #Read Course Data
        dfe = copy.deepcopy(dfc)
        courseList = self.IterCourses(dfc)
        Course.objects.bulk_create(courseList)
        enrolmentList = self.IterEnrolments(dfe)
        Enrolment.objects.bulk_create(enrolmentList)

    def IterCourses(self,dfc):
        dfc.drop_duplicates(subset=['Course','Section'],keep='last',inplace=True)
        dfc = dfc.values.tolist()
        courseList =[]
        with ProcessPoolExecutor(max_workers=3) as exe:
            courseList = exe.map(self.makeCourse,dfc)
        try:
            courseList = list(filter(None,courseList)) ##This filters out the None types in the list
        except ObjectDoesNotExist:
            pass ## Error is thrown if there are No "None types"
        return courseList

    def makeCourse(self,dfc):
        if Course.objects.filter(
            course_code=dfc[3],section=dfc[8]
        ).exists():
            return None
        else:
            course = Course(
                course_code=dfc[3],
                credit_hours=dfc[6],
                name=dfc[4],
                section=dfc[8],
                upload_set=self.get_upload_set()
            )
        return course

    def IterEnrolments(self,dfe):
        dfe.drop_duplicates(subset=['Course','Student_ID','Section'],keep='last',inplace=True)
        dfe = dfe.values.tolist()
        enrolmentList=[]
        with ProcessPoolExecutor(max_workers=4) as exe:
            enrolmentList = exe.map(self.makeEnrolments,dfe)
        try:
            enrolmentList = list(filter(None,enrolmentList)) ##This filters out the None types in the list
        except ObjectDoesNotExist:
            pass ## Error is thrown if there are No "None types"
        return enrolmentList

    def makeEnrolments(self,dfe):
        if Enrolment.objects.filter(
            course=Course.objects.filter(
                course_code=dfe[3],section=dfe[8]
            )[0],
            student=Student.objects.filter(
                student_number=dfe[0]
            )[0]
        ).exists():
            return None
        else:
            enrolment=Enrolment(
                student=Student.objects.filter(
                    student_number=dfe[0]
                )[0],
                term=dfe[2],
                grade=dfe[5],
                course=Course.objects.filter(
                    course_code=dfe[3],
                    section=dfe[8]
                )[0],
                upload_set=self.get_upload_set()
            )
        return enrolment

    #**Upload TransferDataFile,creates Enrolment Models and some etxra Courses
    def uploadTransferDataFile(self,transferfile):
        dft = pd.read_table(transferfile,header=0,squeeze=True)
        courseList = self.IterTransferCourse(dft)
        Course.objects.bulk_create(courseList)
        enrolmentList = self.IterTransferEnrolments(dft)
        Enrolment.objects.bulk_create(enrolmentList)

    def IterTransferCourse(self,dft):
        dft['Course'].fillna(dft['Title']+"**",inplace = True)
        dft.drop_duplicates(subset=['Course'],keep='last',inplace=True)
        dft.dropna(axis=0,how='all',inplace=True)
        dft = dft.values.tolist()
        courseList=[]
        with ProcessPoolExecutor(max_workers=1) as exe:
            courseList = exe.map(self.makeTransferCourse,dft)
        try:
            courseList = list(filter(None,courseList))
        except (ObjectDoesNotExist):
            pass ## There are no None types
        return courseList

    def makeTransferCourse(self,dft):
        if Course.objects.filter(
            course_code=dft[1],
            credit_hours=dft[3],
            upload_set=self.get_upload_set()
        ).exists():
            return None
        else:
            course=Course(
                course_code=dft[1],
                credit_hours=dft[3],
                upload_set=self.get_upload_set(),
                section="**"
            )
        return course

    def IterTransferEnrolments(self,dft):
        dft['Course'].fillna(dft['Title']+"**",inplace = True)
        dft.drop_duplicates(subset=['Student_ID','Course'],keep='last',inplace=True)
        dft.dropna(axis=0,how='all',inplace=True)
        dft = dft.values.tolist()
        enrolmentList = []
        with ProcessPoolExecutor(max_workers=2) as exe:
            enrolmentList = exe.map(self.makeTransferEnrolments,dft)
        try:
            enrolmentList = list(filter(None,enrolmentList))
        except (ObjectDoesNotExist):
            pass ## There are no None types
        return enrolmentList

    def makeTransferEnrolments(self,dft):
        if Enrolment.objects.filter(
            course=Course.objects.get(
                course_code=dft[1],section='**'
            ),
            student=Student.objects.get(student_number=dft[0]),
            upload_set=self.get_upload_set(),
            term='Transfer',grade="**"
        ).exists():
            return None
        else:
            enrolment=Enrolment(
                student=Student.objects.filter(student_number=dft[0])[0],
                course=Course.objects.filter(
                    course_code=dft[1],
                    credit_hours=dft[3]
                )[0],
                upload_set=self.get_upload_set(),term="Transfer",grade="**"
            )

        return enrolment
