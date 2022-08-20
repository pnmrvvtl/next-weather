import axios from "axios";

const API_FORECAST_URL = "https://api.weatherapi.com/v1/forecast.json"
const API_CURRENT_URL = "https://api.weatherapi.com/v1/current.json"
const API_ASTRONOMY_URL = "https://api.weatherapi.com/v1/astronomy.json"

const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const getForecast = async (city) => {
    const response = await axios.get(`${API_FORECAST_URL}?key=${key}&q=${city[0]},${city[1]}&days=5&aqi=no&alerts=no`);
    return response.data;
}
export const getCurrent = async (city) => {
    return await axios.get(`${API_CURRENT_URL}?key=${key}&q=${city}&days=5&aqi=no&alerts=no`);
}
export const getAstronomy = async (city, date) => {
    return await axios.get(`${API_ASTRONOMY_URL}?key=${key}&q=${city}&dt=${date}`);
}