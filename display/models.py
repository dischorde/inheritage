from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.ForeignKey(User, null=True, blank=True)
    name = models.CharField(max_length=255, null=False)

class Ethnicity(models.Model):
    name = models.CharField(max_length=255, null=False)
    lat = models.DecimalField(max_digits=9, decimal_places=6)
    lon = models.DecimalField(max_digits=9, decimal_places=6)

class UserEthnicity(models.Model):
    profile = models.ForeignKey(Profile, null=False)
    ethnicity = models.ForeignKey(Ethnicity, null=False)
    percent = models.IntegerField()

class SubPopulation(models.Model):
    name = models.CharField(max_length=255,null=False)
    specific = models.BooleanField(null=False)

class Snp(models.Model):
    name = models.CharField(max_length=255, null=False)
    summary = models.TextField(null=False)
    description = models.TextField(null=False)

class DataPoint(models.Model):
    sub_population = models.ForeignKey(SubPopulation)
    snp = models.ForeignKey(Snp, null=False)
    percent = models.IntegerField(null=False)
