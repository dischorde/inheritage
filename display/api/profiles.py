from restless.dj import DjangoResource

from display.models import Profile

class ProfileResource(DjangoResource):
    def detail(self, pk):
        profile = Profile.objects.get(id=pk)
        ethnicity_set = profile.ethnicities.all()
        ethnicities = []

        # for ethnicity in ethnicity_set:




        return {
            'profileId': profile.id,
            'name': profile.name,
            'ethnicities': ethnicities
        }
