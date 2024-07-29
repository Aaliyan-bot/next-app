'use client';
import axios, {isCancel, AxiosError} from 'axios';
async function getgeoloacationForCityName(cityName) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=211158a74590af681a5f6a978c12427e`);
    return response

    } catch (error) {
      console.error(error);
    }
  }
 export async function getWeatherInfo(lat, lon) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=part&appid=211158a74590af681a5f6a978c12427e`);
      return response
    } catch (error) {
      console.error(error);
    }
  }
  export default getgeoloacationForCityName;