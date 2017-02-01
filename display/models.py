from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


class Snp(models.Model):
    name = models.CharField(max_length=255, null=False)
    summary = models.TextField(null=False)
    description = models.TextField(null=False)
    def __str__(self):
        return self.name

class SubPopulation(models.Model):
    name = models.CharField(max_length=255,null=False)
    code = models.CharField(max_length=5,null=False)
    specific = models.BooleanField(null=False)
    ethnicities = models.ManyToManyField(Ethnicity)
    def __str__(self):
        return self.name

class DataPoint(models.Model):
    snp = models.ForeignKey(Snp, null=False)
    sub_population = models.ForeignKey(SubPopulation, null=False)
    percent = models.IntegerField(null=False)

class Ethnicity(models.Model):
    name = models.CharField(max_length=255, null=False)
    lat = models.DecimalField(max_digits=9, decimal_places=6)
    lon = models.DecimalField(max_digits=9, decimal_places=6)
    def __str__(self):
        return self.name

class Profile(models.Model):
    user = models.ForeignKey(User, null=True, blank=True)
    name = models.CharField(max_length=255, null=False)
    ethnicities = models.ManyToManyField(Ethnicity, through='UserEthnicity')
    def __str__(self):
        return self.name

class UserEthnicity(models.Model):
    profile = models.ForeignKey(Profile, null=False)
    ethnicity = models.ForeignKey(Ethnicity, null=False)
    percent = models.IntegerField()
