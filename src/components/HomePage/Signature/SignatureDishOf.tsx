import React from 'react'
import {Background,Img,Ttext2,Div,Title,Image,Text,SignatureDish,} from './styles'
import Spicy from "./Spicy.svg";
import Vegitarian from "./Vegitarian.svg";
import Vegan from "./Vegan2.svg";
const SignatureDishOf = () => {
  return (
    <SignatureDish>
        <Background>
            <Img>
            <Ttext2>
                <Title> SIGNATURE DISH OF:</Title>
            </Ttext2>
            <Div>
               <Image className='imgg' src={Spicy}/>
               <br/>
                  <Text> Spicy</Text>
            </Div>
            <Div>
               <Image className='imgg' src={Vegitarian}/>
               <br/>
               <Text> Vegitarian</Text>
            </Div>
            <Div>
               <Image className='imgg' src={Vegan}/>
               <br/>
               <Text> Vegan</Text>
            </Div>
           </Img>


            

        </Background>
    </SignatureDish>
  )
}

export default SignatureDishOf