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

### Personal Profiles
After the user inputs up to 6 ethnicities, they are brought to a page displaying a map. Each map marker reflects an ethnicity and reveals a list of SNP characteristics specific to that particular ethnicity. Clicking on a SNP will lead to a detailed summary page.

### Ethnicities and Subpopulations
Users are able to select from a list of general ethnicities, which each map to more specific subpopulations. 

### SNPs

## Future Directions
- We plan to allow the user to create an account so that they are able to see their profile the next time they log in.
- We also plan to create a SNP index, so that the user can view all the SNPs on one page.

[docs]: /docs
