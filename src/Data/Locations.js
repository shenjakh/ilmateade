const Locations = [
  {
    name: 'Tallinn',
    latitude: 59.4370,
    longitude: 24.7536,

  },
  {
    name: 'Kopenhaagen',
    latitude: 55.676098,
    longitude: 12.568337,
  },
  {
    name: 'Berlin',
    latitude: 52.520008,
    longitude: 13.404954,
  },
  {
    name: 'Praha',
    latitude: 50.073658,
    longitude: 14.418540,
  },
  {
    name: 'Viin',
    latitude: 48.210033,
    longitude: 16.363449,
  },
  {
    name: 'Varssavi',
    latitude: 52.237049,
    longitude: 21.017532,
  }
]

export default Locations;

//https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m
//https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,wind_speed_10m_max&timezone=auto