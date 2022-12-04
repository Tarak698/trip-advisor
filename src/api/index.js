import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '4e2b547b59msh4ae4b6230695a39p1f1e9djsn72be443686b0',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          },
        });

        return data;
    } catch (error) {
        console.log(error)
    }
};

export const getWeatherData = async (lat, lng) => {
  try{
    const{ data } = await axios.get('https://community-weather-map.p.rapidapi.com/find', {
      params: {lon: lng, lat: lat,},
      headers: {
        'x-rapidapi-key' : 'fe4feefa8543e06d4f3c66d92c61b69c',
        'x-rapidapi-host' : 'community-open-weather-map.p.rapidapi.com'
      }    
    });

    return data;
  } catch (error) {
    console.log(error)
  }
}
