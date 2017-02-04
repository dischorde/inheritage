```js
// Sample State Shape
{
  profile: {
    profileId: 1,
    name: "Lauren Madigan"
    ethnicities: [
      {
        name: "Italian",
        lat: "123.456",
        long: "123.456",
        percent: 25,
        data_points: [
          {
            id: 1,
            snp_name: "rs1234",
            pop_name: "Some SubPop"
            percent: "43",
            summary: "can’t taste bitterness",
            specific: "true",  
          },
          ... // more data_points
        ]
      },
      ... // more ethnicities
    ]
  },
  ethnicities: [
    {
      id: 1,
      name: "South East Asian"
    },
    ... // more ethnicities
  ],
  snp: {
    id: 1,
    name: "rs1234",
    description: "This SNP....",
    data_points: { // for non-specific sub populations
      1: {
        id: 1,
        name: "European",
        percent: 5
      }
    }
  }
}
```
