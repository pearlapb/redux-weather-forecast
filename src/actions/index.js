import axios from 'axios';

const API_KEY = '632fe9b6a34cecefe9dc3cbe54936774';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH-WEATHER';

//ACTION CREATOR
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    //Redux Promise is used here? When it sees that the payload is a promise, it unwraps it.
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
