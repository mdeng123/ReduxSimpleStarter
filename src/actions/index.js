import axios from 'axios';

const API_KEY = '0cd28ff445b7c9f60c7527818163d647';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export const DELETE_WEATHER = 'DELETE_WEATHER';

export function deleteWeather(city) {
  return {
    type: DELETE_WEATHER,
    city: city
  }
}

export const SEND_ALERT = 'SEND_ALERT';

export function sendAlert(msg) {
  return {
    type: SEND_ALERT,
    msg: msg
  }
}