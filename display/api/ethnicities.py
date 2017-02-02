from restless.dj import DjangoResource
from restless.preparers import FieldsPreparer

from display.models import Ethnicity

class EthnicityResource(DjangoResource):
    preparer = FieldsPreparer(fields={
        'id': 'id',
        'name': 'name'
    })

    def list(self):
        return Ethnicity.objects.all()
