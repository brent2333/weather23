import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from './weatherApiService';
import weatherSearch from './weatherSearchSlice';
const store = configureStore({
    reducer: {
        weatherSearch,
        [weatherApi.reducerPath]: weatherApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware)
})

export default store;