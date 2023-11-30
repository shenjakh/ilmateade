const SearchHandler = async ({ kohanimi, lat, lon, setSelectedLocation }) => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,wind_speed_10m_max&timezone=auto`
    );

    if (!response.ok) {
      console.error('Ei saa vastust API vastust :/');
      return;
    }

    const result = await response.json();

    const newData = {
      name: kohanimi,
      maxTemperature: result.daily.temperature_2m_max,
      minTemperature: result.daily.temperature_2m_min,
      sunrise: result.daily.sunrise,
      sunset: result.daily.sunset,
      precipitation: result.daily.precipitation_sum,
      windSpeed: result.daily.wind_speed_10m_max,
    };

    setSelectedLocation(newData);
  } catch (error) {
    console.error('Andme Viga:', error);
  }
};

export default SearchHandler;