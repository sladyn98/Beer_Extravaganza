# Generated by Django 2.1.5 on 2019-06-30 11:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beer_platform', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='beercard',
            name='imageUrl',
            field=models.URLField(null=True),
        ),
    ]
