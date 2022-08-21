import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    value: [] as any
  },
  reducers: {
    setRestaurants: (state, action) => {
      return{
        ...state,
        value:action.payload
      };
    },
    addRestaurant: (state,action) => {
      state.value.push(action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurants } = restaurantsSlice.actions;
export const { addRestaurant }= restaurantsSlice.actions;

export default restaurantsSlice.reducer