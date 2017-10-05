const db = require('./_db');

const Place = require('./place');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');
const Activity = require('./activity');


const Itinerary = db.define('itinerary',{})

Itinerary.belongsToMany(Hotel, {through: "itinerary_hotel"});
Itinerary.belongsToMany(Restaurant, {through: "itinerary_restaurant"});
Itinerary.belongsToMany(Activity, {through: "itinerary_activity"});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  db,
  Place,
  Hotel,
  Restaurant,
  Activity,
  Itinerary
};
