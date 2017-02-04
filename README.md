# Inheritage

[Inheritage Live][live_link]

[live_link]: http://inheritage.herokuapp.com/

<p align="center">
  <img src="media/home-page.png" alt="home-page">
</p>

## Background
The 1000 Genome Project ran over a span of 7 years and resulted in the creation of the largest public database of human genetic information. Our project makes this information accessible to everyone in a fun and easy to understand way by displaying genetic statistics based on their heritage on an interactive map. Inheritage will exclusively contain information on Single Nucleotide Polymorphisms (SNP), a common variance between different ethnicities.

This project incorporates a Python backend with Django framework and a React.js frontend.

Please see the [docs][docs] folder for more information on the development of this project.

## Features and Implementation
After the user inputs up to 6 ethnicities, they are brought to a page displaying a map. Each map marker reflects an ethnicity and reveals a list of SNP characteristics specific to that particular ethnicity. Clicking on a SNP will lead to a detailed summary page.

### Personal Profiles
A profile is created when users submit a list of general `ethnicities`. This creates a `profile`, which includes all the information for specific `subpopulations` that fall underneath the umbrella of the submitted ethnicities.

```python
# in models.py
class UserEthnicity(models.Model):
  def ethnicity_ids(self):
    return self.ethnicity.populations.all().values('id')

# in profiles.py
profile = Profile.objects.get(id=pk)
    ethnicity_set = profile.userethnicity_set.all()
    ethnicities = []

    for user_ethnicity in ethnicity_set:
        data_points = []
        eth_ids = user_ethnicity.ethnicity_ids()
        all_dps = DataPoint.objects.filter(sub_population_id__in=eth_ids)
```

### SNPs
We seeded the database with the help of [SNPedia][SNPedia] and [1000 Genomes][1000Genomes]

## Future Directions
- We plan to allow the user to create an account so that they are able to see their profile the next time they log in.
- We also plan to create a SNP index, so that the user can view all the SNPs on one page.

[docs]: /docs
[SNPedia]: http://snpedia.com/
[1000Genomes]: http://www.internationalgenome.org/
