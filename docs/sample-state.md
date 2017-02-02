```js
// Sample State Shape
{
  profile: {
    profileId: 1,
    name: "Lauren Madigan"
  },
  forms: {
    signUp: { errors: [] },
    logIn: { errors: [] },
    ethnicity: { errors: [] }
  },
  ethnicities: {
    1: {
      id: 1,
      name: "Italian",
      snps: [
        {
          id: 1,
          name: "rs1234",
          percent: "43",
          summary: "can’t taste bitterness"
        }
      ]
    }
  },
  snp: {
    id: 1,
    name: "rs1234",
    description: "This SNP....",
    sub_populations: { // for non-specific sub populations
      1: {
        id: 1,
        name: "European",
        percent: 5
      }
    }
  }
}
```
