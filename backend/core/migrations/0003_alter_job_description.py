# Generated by Django 5.2.4 on 2025-07-15 03:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_resume_parsed_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='description',
            field=models.CharField(),
        ),
    ]
