from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from display.models import Snp, SubPopulation, DataPoint, Ethnicity, Profile, UserEthnicity


class Command(BaseCommand):
    def handle(self, *args, **options):
        User.objects.all().delete()
        Snp.objects.all().delete()
        SubPopulation.objects.all().delete()
        DataPoint.objects.all().delete()
        Ethnicity.objects.all().delete()
        Profile.objects.all().delete()
        UserEthnicity.objects.all().delete()
