from restless.dj import DjangoResource

from display.models import *
from django.contrib.auth.models import User
import pdb

class ProfileResource(DjangoResource):
    def is_authenticated(self):
        # TODO: Figure out how to authenticate
        # Open everything wide!
        # DANGEROUS, DO NOT DO IN PRODUCTION.
        return True

    def detail(self, pk):
        profile = Profile.objects.get(id=pk)
        ethnicity_set = profile.userethnicity_set.all()
        ethnicities = []

        for user_ethnicity in ethnicity_set:
            data_points = []
            eth_ids = user_ethnicity.ethnicity_ids()
            all_dps = DataPoint.objects.filter(sub_population_id__in=eth_ids).select_related('snp')
            for dp in all_dps:
                dp_detail = {
                    'id': dp.id,
                    'percent': dp.percent,
                    'specific': dp.sub_population.specific,
                    'pop_name': dp.sub_population.name,
                    'snp_name': dp.snp.name,
                    'summary': dp.snp.summary,
                    'snp_id': dp.snp.id
                }
                data_points.append(dp_detail)

            detail = {
                'name': user_ethnicity.ethnicity.name,
                'lat': user_ethnicity.ethnicity.lat,
                'long': user_ethnicity.ethnicity.lon,
                'percent': user_ethnicity.percent,
                'data_points': data_points
            }
            ethnicities.append(detail)

        return {
            'profileId': profile.id,
            'name': profile.name,
            'ethnicities': ethnicities
        }

    def create(self):
        current_user = None
        try:
            id = self.data['user_id']
            current_user = User.objects.get(id=id)
        except (KeyError, User.DoesNotExist):
            pass

        new_profile = Profile.objects.create(
            user=current_user,
            name=self.data['name']
        )

        for eth in self.data['ethnicities']:
            ethnicity = Ethnicity.objects.get(id=eth['id'])
            UserEthnicity.objects.create(
                profile=new_profile,
                ethnicity=ethnicity,
                percent=eth['percent']
            )

        return new_profile.id
