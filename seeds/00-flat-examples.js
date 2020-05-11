exports.seed = function (knex) {
  return knex('flats').insert ([
    {
      title: "Alpha",
      price: 213213,
      floorArea: 55,
      country: "France",
      zip: 6738,
      city: "Paris",
      street: "French street"
    },
    {
      title: "Bravo",
      price: 445223,
      floorArea: 60,
      country: "Ireland",
      zip: 4421,
      city: "Dublin",
      street: "Irish street"
    },
    {
      title: "Charlie",
      price: 33221,
      floorArea: 120,
      country: "Spain",
      zip: 9911,
      city: "Madrid",
      street: "Spanish street"
    }
  ])
}