```js
// Sample State Shape
{
  profile: {
    profileId: 1,
    name: "Lauren Madigan",
    ethnicities: {
      1: {
        id: 1,
        name: "Italian",
        snps: [
          {
            id: 1,
            name: "rs1234",
            summary: "can’t taste bitterness"
          }
        ]
      }
    }
  },
  forms: {
    signUp: { errors: [] },
    logIn: { errors: [] },
    ethnicity: { errors: [] }
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
