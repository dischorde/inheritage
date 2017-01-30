from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.ForeignKey(User, null=True, blank=True)
    name = models.CharField(null=False)

class Ethnicity(models.Model):
    name = models.CharField(null=False)
    lat = models.DecimalField()
    lon = models.DecimalField()

class UserEthnicity(models.Model):
    profile = models.ForeignKey(Profile, null=False)
    ethnicity = models.ForeignKey(Ethnicity, null=False)
    percent = models.IntegerField()

class SubPopulation(models.Model):
    name = models.CharField(null=False)
    specific = models.BooleanField(null=False)

class Snp(models.Model):
    name = models.CharField(null=False)
    summary = models.TextField(null=False)
    description = models.TextField(null=False)

class DataPoint(models.Model):
    snp = models.ForeignKey(Snp, null=False)
    percent = models.IntegerField(null=False)
