import APIKey from './APIKey.js'


const weatherUndergroundApi = ({latitude, longitude}) => {
  fetch(`http://api.wunderground.com/api/3fb334615e7217ba/geolookup/q/${latitude},${longitude}.json`)
    .then(response => response.json())
    .then(response => console.log(response.location.city))
    .catch(error => console.error(error))
} 

const getPosition = () => {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log('api',weatherUndergroundApi(position.coords))
});
}

export default getPosition;