# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2017-01-10 15:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fitheart', '0004_auto_20170110_2144'),
    ]

    operations = [
        migrations.AddField(
            model_name='articles',
            name='img',
            field=models.ImageField(default=2, upload_to=b''),
            preserve_default=False,
        ),
    ]
