const fetchAttractions = () =>
  fetch("/api")
    .then(result => result.json())
    .catch(err => console.error(err));

const fetchItineraries = (id) =>
  fetch('/api/itineraries/' + id)
    .then(result => {
      return result.json()})
    .catch(err => console.error(err))

const fetchPostedItineraries = (hotel, restaurant, activity) =>{
    fetch('/api/itineraries', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        hotels: hotel,
        restaurants: restaurant,
        activities: activity
      }) 
    })
}
module.exports = {
  fetchAttractions,
  fetchItineraries,
  fetchPostedItineraries
};
