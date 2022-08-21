import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { fetchRestaurants } from '../../fetchRestaurants'
import { addRestaurant } from './restaurantsSlicer';
import {Button,Information2,ButtonGroup,Text,Picture,RestaurantName,ChefName,Restaurants,AllRestaurant} from './styles'


const AllRestaurants = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const restaurants = useSelector((state:any) => state.restaurants.value);
  const [name, setName] = useState('');
 // const onAddClicked = async() => {
 //   dispatch(addRestaurant({name,chef,img}));
 // }


  return (
    <AllRestaurant className='row'>
      <div>
        <Text>RESTAURANTS</Text> 
      </div>
      <ButtonGroup>
        <Button>All</Button>
        <Button>New</Button>
        <Button>Most Popular</Button>
        <Button>Open Now</Button>
      </ButtonGroup>
      
      {restaurants && restaurants.map((restaurant:any , key:number) => (
       <Restaurants key={key}>
        <Picture> <img  src={restaurant.img}  alt=""/></Picture>
        <Information2>
              <RestaurantName>{restaurant.name} </RestaurantName>
              <ChefName> {restaurant.chef}</ChefName>
        </Information2>
       </Restaurants>   
      ))}
    </AllRestaurant>
  );
}

export default AllRestaurants