# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('display', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='datapoint',
            name='sub_population',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='display.SubPopulation'),
            preserve_default=False,
        ),
    ]
