'use client'
import getgeoloacationForCityName, {getWeatherInfo} from './service.js';
import { useState} from 'react'; 
import Search from './Search.js';
import WeatherDetails from './weatherdetails.js';
import "./globals.css";

function App() {
  const [cityName, setCityName] = useState();
const [weatherdetails, setWeatherDetails] = useState();
  async function getGeoCord() {
    if (cityName) {
      const response = await getgeoloacationForCityName(cityName);
      if (response.status == 200) {
        setWeatherDetails(response);
     
      }
    }
    
  }
  return(
    <>
    <Search
      cityName = {cityName}
      setCityName = {setCityName}
      getGeoCord= {getGeoCord}
    ></Search>
    <fiveDayForcast></fiveDayForcast>
    {weatherdetails && (<WeatherDetails
weatherdetails = {weatherdetails}
/>)}


    </>
    
  );
};
export default App;