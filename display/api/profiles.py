from restless.dj import DjangoResource

from display.models import Profile
from display.models import DataPoint

class ProfileResource(DjangoResource):
    def detail(self, pk):
        profile = Profile.objects.get(id=pk)
        ethnicity_set = profile.ethnicities.all()
        ethnicities = []

        for ethnicity in ethnicity_set:
            snps = []
            eth_ids = ethnicity.populations.all().values('id')
            data_points = DataPoint.objects.filter(sub_population_id__in=eth_ids)
            for dp in data_points:
                dp_detail = {
                    id: dp.id,
                    percent: dp.percent
                    name: dp.snp.name,
                    summary: dp.snp.summary
                }
                snps.append(dp_detail)

            detail = {
                name: "Italian",
                percent: "50%",
                snps: snps
            }
            ethnicities.append(detail)

        return {
            'profileId': profile.id,
            'name': profile.name,
            'ethnicities': ethnicities
        }
