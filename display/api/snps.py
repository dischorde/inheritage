from restless.dj import DjangoResource

from display.models import Snp

class SnpResource(DjangoResource):
    def detail(self, pk):
        snp = Snp.objects.get(id=pk)

        dp_set = snp.datapoint_set.filter(specific=False)
        data_points = {}
        for dp in dp_set:
            data_points[dp.id] = {
                'id': dp.id,
                'percent': dp.percent,
                'name': dp.sub_population.name
            }

        return {
            'id': snp.id,
            'name': snp.name,
            'description': snp.description,
            'data_points': data_points
        }
