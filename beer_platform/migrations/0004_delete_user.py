# Generated by Django 2.1.5 on 2019-07-01 15:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('beer_platform', '0003_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
    ]
