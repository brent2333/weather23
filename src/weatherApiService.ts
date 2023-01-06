import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import params from '../params';
import { CurrentWeatherResponse } from './APIResponseTypes';
const key = params.key;
const aqi = params.aqi;
export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.weatherapi.com/v1"}),
    endpoints: (builder) => ({
        getCurrentWeather: builder.query({
            query: (q) => ({ url: "current.json", params: {key,q,aqi}}),
            transformResponse: (response: CurrentWeatherResponse) => response.current
        })
    })
})

export const { useGetCurrentWeatherQuery } = weatherApi;