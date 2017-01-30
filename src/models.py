from __future__ import unicode_literals

from django.db import models

class Profile(models.Model):
    user = models.ForeignKey(User, null=True, blank=True)
    name = models.CharField(null=False)

class UserEthnicities(models.Model):
    profile = models.ForeignKey(Profile, null=False)
    ethnicity = models.ForeignKey(Ethnicity, null=False)
    percent = models.IntegerField()

class Ethnicities(models.Model):
    name = models.charField(null=False)
