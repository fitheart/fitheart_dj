# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-01-10 07:08
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('fitheart', '0020_auto_20170110_1405'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articles',
            name='date_created',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now),
        ),
    ]
