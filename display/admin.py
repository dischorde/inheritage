from django.contrib import admin

from .models import Profile
from .models import Ethnicity
from .models import UserEthnicity
from .models import SubPopulation
from .models import Snp
from .models import DataPoint

admin.site.register(Profile)
admin.site.register(Ethnicity)
admin.site.register(UserEthnicity)

class  SubPopAdmin(admin.ModelAdmin):
    list_display = ['name']

admin.site.register(SubPopulation, SubPopAdmin)

class  SnpAdmin(admin.ModelAdmin):
    list_display = ['name', 'summary']

class  DataPointAdmin(admin.ModelAdmin):
    list_display = ['snp', 'sub_population', 'percent']

admin.site.register(Snp, SnpAdmin)
admin.site.register(DataPoint, DataPointAdmin)
