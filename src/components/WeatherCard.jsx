import axios from "axios";
import { useEffect, useState } from "react";

const WeatherCard = () => {
  const apiKey = "e222443c9a3d86cb3fd34376f315be6b";
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (response.data) {
        setData(response.data);
      }
    } catch (error) {
      console.log("Error in getting data", error);
    }
  };

  const handleSubmit = () => {
    if (city.trim()) fetchWeather();
  };

  return (
    <div className="flex items-center justify-center flex-col gap-8 min-h-screen bg-gradient-to-r from-cyan-500 to-purple-500 p-4">
      <div className="w-full max-w-lg p-6 bg-white rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Weather Finder</h1>
        <p className="text-sm text-gray-500 text-center mt-2">
          Enter a city name to get the current weather conditions.
        </p>
        <div className="mt-6">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Search for a city..."
            className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-400 focus:outline-none"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full mt-4 px-4 py-3 bg-cyan-600 text-white rounded-lg shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          Search
        </button>
      </div>

      {data && (
        <div className="w-full max-w-lg p-6 bg-white rounded-2xl shadow-xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            {data.main.temp}°C
          </h2>
          <h3 className="text-xl text-gray-600 capitalize">
            {data.weather[0].description}
          </h3>
          <h4 className="text-lg text-gray-700 mt-2">{data.name}, {data.sys.country}</h4>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt="Weather Icon"
            className="w-32 mx-auto mt-4"
          />
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
