# Generated by Django 4.0 on 2021-12-13 18:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_comment'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='comments_count',
        ),
        migrations.RemoveField(
            model_name='post',
            name='likes_count',
        ),
    ]