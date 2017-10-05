const router = require("express").Router();
const Hotel = require("../models").Hotel;
const Restaurant = require("../models").Restaurant;
const Activity = require("../models").Activity;
const Itinerary = require("../models").Itinerary;

router.get("/", (req, res, next) => {
  Promise.all([
    Hotel.findAll({ include: [{ all: true }] }),
    Restaurant.findAll({ include: [{ all: true }] }),
    Activity.findAll({ include: [{ all: true }] })
  ])
    .then(([hotels, restaurants, activities]) => {
      res.json({
        hotels,
        restaurants,
        activities
      });
    })
    .catch(next);
});

router.get('/itineraries/:itinerary_id', (req, res, next) => {
  var id = parseInt(req.params.itinerary_id)
  Itinerary.findById(id, {
    include: [{ all: true, nested: true }]
  })
  .then((data)=>{
    res.send(data)
  })
  .catch(next)
});

router.post('/itineraries', (req,res,next) => {
  Itinerary.create()
  .then( itinerary => {
    itinerary.addHotels(req.body.hotels)
    itinerary.addRestaurants(req.body.restaurants)
    itinerary.addActivities(req.body.activities)
  })
  .catch(next);
})

module.exports = router;
