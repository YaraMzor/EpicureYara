import React from 'react'
import{configureStore} from '@reduxjs/toolkit';
import restaurantsReducer from './components/Restaurants/restaurantsSlicer';

export default configureStore({
    reducer:{
        restaurants: restaurantsReducer,
    },
})


