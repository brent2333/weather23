import { createSlice } from "@reduxjs/toolkit";
// import { CurrentType } from './APIResponseTypes';
export const weatherSearchSlice = createSlice({
    name: "weatherSearch",
    initialState: {
        value: {
            currentLocation: {},
        }
    },
    reducers: {
        current: (state, action) => {
            state.value.currentLocation = action.payload
        }
    }
})

export const { current } = weatherSearchSlice.actions;

export default weatherSearchSlice.reducer;