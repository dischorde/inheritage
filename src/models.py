from __future__ import unicode_literals

from django.db import models

class DataPoints(models.Model):
    

class Snp(model.Model):
    name = models.CharField()
    summary = models.textField()
    description = models.textField()
