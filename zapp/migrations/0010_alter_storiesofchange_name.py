# Generated by Django 4.0.6 on 2022-07-30 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zapp', '0009_storiesofchange'),
    ]

    operations = [
        migrations.AlterField(
            model_name='storiesofchange',
            name='name',
            field=models.CharField(max_length=300),
        ),
    ]
