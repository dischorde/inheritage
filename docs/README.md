# Inheritage

## Background
The 1000 Genome Project ran over a span of 7 years and resulted in the creation of the largest public database of human genetic information. Our project makes this information accessible to everyone in a fun and easy to understand way by displaying genetic statistics based on their heritage on an interactive map. Inheritage will exclusively contain information on Single Nucleotide Polymorphisms (SNP).

This project will incorporate a Python backend with Django framework and a React.js frontend.

## Group Members
- [Chloe Chou](https://github.com/chloejchou)
- [Katarina Rossi](https://github.com/dischorde)
- [Lauren Madigan](https://github.com/lmadigan)
- [Bronwyn Dunn](https://github.com/bronwyndunn)


## Functionality and MVPs:
- [ ] Hosting on Heroku
- [ ] Allows user to input ethnicities
- [ ] Displays these ethnic locations on an interactive map
- [ ] Gives detailed information on each SNP
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: /wireframes
[components]: /component-hierarchy.md
[sample-state]: /sample-state.md
[api-endpoints]: /api-endpoints.md
[schema]: /schema.md

## Implementation Timeline

### Day 1

- Find some SNPs (all)
- Create models & project (Kat & Bronwyn)
- Create Header (Chloe)
- Research Google Maps & a graph API (Lauren)

### Day 2

- Link React to Django (Kat & Bronwyn)
- Create Django routes & views (Kat & Bronwyn)
- Create Home Page & Auth Form (Chloe)
- Create Map (Lauren)

### Day 3
- Implement Tastypie (Kat)
- Create Django routes & views (Bronwyn)
- Create Ethnicity Form (Chloe)
- Create Map (Lauren)

### Day 4
- Research Redis (Kat)
- Seed Database (all)
- Connect backend and frontend (Bronwyn)

### Day 5
- Implement Redis (Kat & Bronwyn)
- Create SNP Detail Page (Chloe)
- Create SNP Graph (Lauren)

### Day 6
- Help with frontend (Kat & Bronwyn)
- Create SNP Detail Page (Chloe)
- Create SNP Graph (Lauren)

### Day 7
- Polish frontend (all)

### Bonus Features (TBD)

- Profile
- SNP Index
