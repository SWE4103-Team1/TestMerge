# Generated by Django 3.2.7 on 2021-11-28 23:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('course_code', models.CharField(max_length=75)),
                ('section', models.CharField(max_length=10)),
                ('credit_hours', models.IntegerField()),
                ('name', models.CharField(max_length=75)),
                ('course_type', models.CharField(blank=True, max_length=50, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='PreReq',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('course_code', models.CharField(max_length=10)),
                ('rank', models.CharField(max_length=3)),
            ],
        ),
        migrations.CreateModel(
            name='UploadSet',
            fields=[
                ('upload_datetime', models.DateTimeField(primary_key=True, serialize=False)),
                ('person_data_file', models.FileField(blank=True, null=True, upload_to='uploads/')),
                ('course_data_file', models.FileField(blank=True, null=True, upload_to='uploads/')),
                ('transfer_data_file', models.FileField(blank=True, null=True, upload_to='uploads/')),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('student_number', models.IntegerField()),
                ('name', models.TextField(max_length=70, null=True)),
                ('campus', models.CharField(max_length=2, null=True)),
                ('program', models.CharField(max_length=10, null=True)),
                ('start_date', models.DateField(max_length=8, null=True)),
                ('rank', models.CharField(blank=True, max_length=3)),
                ('upload_set', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='datamodel.uploadset')),
            ],
        ),
        migrations.CreateModel(
            name='Enrolment',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('term', models.CharField(max_length=10)),
                ('grade', models.CharField(blank=True, max_length=5, null=True)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='datamodel.course')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='datamodel.student')),
                ('upload_set', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='datamodel.uploadset')),
            ],
        ),
        migrations.AddField(
            model_name='course',
            name='upload_set',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='datamodel.uploadset'),
        ),
        migrations.AddIndex(
            model_name='student',
            index=models.Index(fields=['student_number', 'upload_set'], name='student_index'),
        ),
        migrations.AddConstraint(
            model_name='student',
            constraint=models.UniqueConstraint(fields=('student_number', 'upload_set'), name='unique student index constraint'),
        ),
        migrations.AddIndex(
            model_name='enrolment',
            index=models.Index(fields=['term'], name='enrolment_index'),
        ),
        migrations.AddConstraint(
            model_name='enrolment',
            constraint=models.UniqueConstraint(fields=('student_id', 'course_id', 'term'), name='unique_enrolment_constraint'),
        ),
        migrations.AddIndex(
            model_name='course',
            index=models.Index(fields=['course_code', 'section', 'upload_set', 'name', 'credit_hours'], name='course_index'),
        ),
        migrations.AddConstraint(
            model_name='course',
            constraint=models.UniqueConstraint(fields=('course_code', 'section', 'upload_set', 'name', 'credit_hours'), name='unique_course_index_constraint'),
        ),
    ]
