from __future__ import unicode_literals

from django.db import models

class SubPopulations(models.Model):
    name = models.CharField(null=false)
    specific = models.BooleanField(null=false)

class DataPoints(models.Model):
    snp = models.CharField()
    percent = models.IntegerField(null=false)

class Snp(model.Model):
    name = models.CharField(null=false)
    summary = models.TextField(null=false)
    description = models.TextField(null=false)

class Profile(models.Model):
    user = models.ForeignKey(User, null=True, blank=True)
    name = models.CharField(null=False)

class UserEthnicities(models.Model):
    profile = models.ForeignKey(Profile, null=False)
    ethnicity = models.ForeignKey(Ethnicity, null=False)
    percent = models.IntegerField()

class Ethnicities(models.Model):
    name = models.CharField(null=False)
    lat = models.DecimalField()
    lon = models.DecimalField()
