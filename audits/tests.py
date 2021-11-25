from django.test import TestCase

from audits.audit import audit_student
from datamodel.models import Student
from dataloader.tests import DataLoaderTests


class AuditTests(TestCase):
    def test_audit(self):
        upload_tester = DataLoaderTests()
        upload_tester._sample_upload_set()
        print("finished upload")
        target_student = Student.objects.get(student_number=5283043)
        res, codes = audit_student(target_student.student_number)
        print(res)
