import axios from "axios";

const API_KEY = "7257c0ef6e1cf3d7b539d9d24ef1b052";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = "FETCH_WEATHER";
export const REMOVE_WEATHER = "REMOVE_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function removeWeather(city) {
  return {
    type: REMOVE_WEATHER,
    city
  };
}
