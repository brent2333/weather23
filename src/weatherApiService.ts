import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import params from '../params';
import { CurrentWeatherResponse, ForecastWeatherReponse } from './APIResponseTypes';
const key = params.key;
const aqi = params.aqi;
const days = params.days;
export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.weatherapi.com/v1"}),
    endpoints: (builder) => ({
        getCurrentWeather: builder.query({
            query: (q) => ({ url: "current.json", params: {key,q,aqi}}),
            transformResponse: (response: CurrentWeatherResponse) => response.current
        }),
        getFutureForecasts: builder.query({
           query: (q) => ({ url: "forecast.json", params: {key,q,days,aqi}}),
           transformResponse: (response: ForecastWeatherReponse) => response.forecast
        })
    }),
    
})

export const { useGetCurrentWeatherQuery, useGetFutureForecastsQuery } = weatherApi;