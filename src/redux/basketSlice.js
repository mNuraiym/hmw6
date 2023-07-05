import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    busket: [],
}

const busketSlice = createSlice({
    name: 'busketSlice',
    initialState: {
        busket: [],
    },
    reducers: {
        setBusket: (state, action) =>
        {
            state.busket.push(action.payload)
        },
        removeFromBasket: (state, action) =>
        {
            state.busket.splice(action.payload, 1);
        },
  
    }
})

export default busketSlice.reducer;
export const { setBusket, removeFromBasket } = busketSlice.actions;

export const busketSelect = state => state.busketSlice;
