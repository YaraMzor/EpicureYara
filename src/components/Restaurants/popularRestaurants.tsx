import { POPULARRESTAURANT,POPULARRESTAURANTINPICURE,Title,DishName,Dish,Name,BUTTON,Information,Chef} from './styles'
import {MdOutlineDoubleArrow} from "react-icons/md"
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Restaurants() {
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
    <POPULARRESTAURANT> 
            <POPULARRESTAURANTINPICURE>
               <Title> POPULAR RESTAURANT IN EPICURE:</Title>
            </POPULARRESTAURANTINPICURE>


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
                    <Chef>
                      {restaurant.chef}
                    </Chef>
                  </Information>
                  
                </DishName>
              ))}
            </Slider>
            <BUTTON>
               <Button variant=""  onClick={onButtonClicked}> All restaurants <MdOutlineDoubleArrow/></Button>
            </BUTTON>
    </POPULARRESTAURANT>
  );
}
export default Restaurants




