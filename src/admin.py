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
admin.site.register(SubPopulation)
admin.site.register(Snp)
admin.site.register(DataPoint)
