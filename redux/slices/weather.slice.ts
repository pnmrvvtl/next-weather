// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type RootForecast from '../../types/forecast.type'
import type {ForecastQueryOptions} from '../../types/query-options.type'
// Define a service using a base URL and expected endpoints

const api_key = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.weatherapi.com/v1/' }),
    endpoints: (builder) => ({
        getForecast: builder.query<RootForecast, ForecastQueryOptions>({
            query: (forecastQueryOptions: ForecastQueryOptions) => `forecast.json?key=${api_key}&q=${forecastQueryOptions.location}&aqi=${forecastQueryOptions.aqi}&alerts=${forecastQueryOptions.alerts}`,
        }),
    }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetForecastQuery } = weatherApi