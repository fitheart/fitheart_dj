# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-01-09 06:25
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fitheart', '0005_auto_20170109_1322'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productgroup',
            name='products',
        ),
    ]
