import React from 'react'
import { SignatureDish,SignatureDishOf,Title,DishName,Dish,Name,BUTTON,Information,Recipe,Icon,Price} from './styles'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {MdOutlineDoubleArrow} from "react-icons/md"

const SignatureDishSlider = () => {
  const navigate = useNavigate();
  const restaurants = useSelector((state:any) => state.restaurants.value);
    const onButtonClicked = () =>{
      navigate('/AllRestaurants');
    };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1.5
  };
  return (
   <SignatureDish>
      <SignatureDishOf>
        <Title>SIGNATURE DISH OF:</Title>
      </SignatureDishOf>


            <Slider {...settings}>
              {restaurants.map((restaurant:any) => (
                <DishName>
                  <Dish>
                        <img className='img' src={restaurant.img} alt=""></img>
                  </Dish>
                  <Information>
                    
                    <Name>
                          {restaurant.name}
                    </Name>
                    <Recipe>
                      {restaurant.recipe}
                    </Recipe>
                    <Icon>
                      <img src={restaurant.icon}/>
                    </Icon>
                    <Price>
                      {restaurant.price}
                    </Price>
                   
                    
                    


                  </Information>
                  
                </DishName>
              ))}
            </Slider>
            <BUTTON>
               <Button variant=""  onClick={onButtonClicked}> All restaurants <MdOutlineDoubleArrow/></Button>
            </BUTTON>

   </SignatureDish>
   
  )
}

export default SignatureDishSlider