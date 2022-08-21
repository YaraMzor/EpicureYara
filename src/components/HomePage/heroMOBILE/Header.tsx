import React from 'react'
import Hero from "./hero.png";
import HeroMOBILE from "./HeroMOBILE.png";


import { Header1,Div,Search,Input } from './styles';
const Header = () => {
  return (
    <Header1>
       <div>
        <Div>
        <img className='HeroMOBILE' src={HeroMOBILE}/>
        </Div>
           
           <Search>
              <Input  type="text" placeholder=""></Input>
           </Search>
       </div>

       
        
        

    </Header1>

  )
}

export default Header