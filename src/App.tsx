import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import { useDispatch } from 'react-redux';
import { setRestaurants } from './components/Restaurants/restaurantsSlicer';
import { fetchRestaurants } from './fetchRestaurants';




function App() {
  
  const dispatch = useDispatch();
  useEffect(() =>{
    fetch();
  }) ;
  const fetch = async () => {
    const restaurants = await fetchRestaurants() ; 
    dispatch(setRestaurants(restaurants))
  }

  return (
   <Layout/>
  );
}

export default App;
