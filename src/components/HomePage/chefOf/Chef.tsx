import React from 'react'
import { Title,Image,Chefoftheweek,BUTTON,Dish,Name,Img,Ttext,Chefoftheweek2, TextChefoftheweek,DishName,Paragraph } from './styles'
import Chef2 from "./Frame.png";
import { Popular,CarouselDiv,Allrestaurants } from './styles';
import { Button, Carousel } from 'react-bootstrap';
import {MdOutlineDoubleArrow} from "react-icons/md"
import Slider from "react-slick";

import OnzaImg from "./FirstSlide.png";
import tigerlily from "./tigerlily.png";
import Messa from "./Messa.png";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Chef = () => {
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
    <Chefoftheweek>
      <TextChefoftheweek>
        <Title className='text'>CHEF OF THE WEEK:</Title>
      </TextChefoftheweek>


      <Chefoftheweek2>
      <Img>
         <Image className='imgg' src={Chef2}/>
      </Img>
      </Chefoftheweek2>
        <Ttext>
          <Paragraph>
              Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades,
              including running the kitchen in his first restaurant,
              the fondly-remembered Violet, located in Moshav  Udim. 
              Shitrit's creativity and culinary acumen born of long experience  
              are expressed in the every detail of each and every dish.
          </Paragraph>
        </Ttext>

      
            <Popular>
              <text>CHEF OF THE WEEK:</text>
            </Popular>
            <Slider {...settings}>
              {restaurants.map((restaurant:any) => (
                <DishName>
                  <Dish>
                        <img className='img' src={restaurant.img} alt=""></img>
                  </Dish>
                  <Name>
                        {restaurant.name}
                  </Name>
                </DishName>
              ))}
            </Slider>
            <BUTTON>
               <Button variant=""  onClick={onButtonClicked}> All restaurants <MdOutlineDoubleArrow/></Button>
            </BUTTON>
    </Chefoftheweek>
  )
}

export default Chef