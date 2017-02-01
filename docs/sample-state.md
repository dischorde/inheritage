```js
// Sample State Shape
{
  profile: {
    profileId: 1,
    name: "Lauren Madigan",
  ethnicities: {
    1: {
      name: "Italian",
      percent: "50%",
      snps: [
        {
          id: 1,
          name: "rs1234",
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
