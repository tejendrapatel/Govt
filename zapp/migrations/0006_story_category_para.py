# Generated by Django 4.0.2 on 2022-07-04 02:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zapp', '0005_story_category_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='story_category',
            name='para',
            field=models.TextField(null=True),
        ),
    ]
