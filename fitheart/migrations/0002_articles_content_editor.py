# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-01-11 08:01
from __future__ import unicode_literals

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('fitheart', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='articles',
            name='content_editor',
            field=tinymce.models.HTMLField(default=2),
            preserve_default=False,
        ),
    ]
