import Chef from './chefOf/Chef';
import Restaurants from '../Restaurants/popularRestaurants';
import SignatureDishOf from './Signature/SignatureDishOf';
import AboutUs from './aboutUs/AboutUs';
import Header from './heroMOBILE/Header';
import SignatureDishSlider from './signatureDishSlider/signatureDishSlider';







export const HomePage = () => {
  return (
    
    <div> 
      <Header/>  
      <Restaurants/>
      <SignatureDishSlider/>
    
      <SignatureDishOf/>
      <Chef/>
      <AboutUs/>
    </div>
    
    

  )
}
