# Generated by Django 2.1.5 on 2019-06-30 13:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beer_platform', '0002_beercard_imageurl'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=200)),
                ('email', models.CharField(max_length=200)),
                ('password', models.CharField(max_length=200)),
            ],
        ),
    ]
