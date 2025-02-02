import axios from "axios";
import { useEffect, useState } from "react";

const WeatherCard = () => {
  const apiKey = "e222443c9a3d86cb3fd34376f315be6b"
  const [city, setCity] = useState("")
  const [data, setData] = useState(null)
  console.log(data)

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      if (response.data) {
        setData(response.data)
      }
    } catch (error) {
      console.log("Error in getting data", error)

    }
  }


  const handleSummit = () => {
    fetchWeather()

  }
  return (
    <div className="flex items-center justify-center flex-col gap-5 min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Weather Search
        </h1>
        <p className="text-sm text-gray-500 text-center mt-2">
          Enter a city name to check the weather.
        </p>
        <div className="mt-6">
          <input

            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Search for a city"
            className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <button
          onClick={handleSummit}
          className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Search
        </button>
      </div>
      {
        data && <div className="w-full text-black text-center max-w-md p-6 bg-white rounded-2xl shadow-lg">
          {
            <>

              <h2>{data.main.temp}</h2>
              <h2>{data.weather[0].main}</h2>
              <h4>{data.name}</h4>
              <h1>{data.sys.country}</h1>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt="Weather Icon"
                className="w-32 mx-auto h-32"
              />
            </>
          }
        </div>
      }
    </div>
  );
};

export default WeatherCard;
