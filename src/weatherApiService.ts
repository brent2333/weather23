import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import params from '../params';
import { CurrentWeatherResponse } from './APIResponseTypes';
const apiKey = params.apiKey;
const aqi = params.aqi;
export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://weatherapi-com.p.rapidapi.com"}),
    endpoints: (builder) => ({
        getCurrentWeather: builder.query({
            query: (q) => ({ url: "current.json", params: {apiKey,q,aqi}}),
            transformResponse: (response: CurrentWeatherResponse) => response.current
        })
    })
})

export const { useGetCurrentWeatherQuery } = weatherApi;