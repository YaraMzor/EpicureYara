import React, { Fragment } from 'react';
//import Button from 'react-bootstrap/Button';


import {DiApple} from "react-icons/di"
import {FaPlay} from "react-icons/fa"
import BackImg from "./logo.svg";

import {AboutUse1,Div,Paragraph,Paragraph2,Title,Fragment2,Fragment1,EpicoreLogo,Button,} from "./styles";

const AboutUs = () => {
  return (
    <AboutUse1>
        <Div>
              <EpicoreLogo>
                <img src={BackImg}/>
              </EpicoreLogo>
              <Fragment1 >
                <Button> <FaPlay/>  Get it on <br/> Google Play</Button>
              </Fragment1>
              <Fragment2>
                <Button>  <DiApple/> Download on the <br/> App Store</Button>
              </Fragment2>
        </Div>
        <Title>
             ABOUT US:
        </Title>
        <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
              eu ipsum. Cras porta malesuada eros, eget blandit
              turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
              dignissim a vestibulum.
        </Paragraph>
        <Paragraph2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
              eu ipsum. Cras porta malesuada eros.
        </Paragraph2>

  </AboutUse1>
  )
}

export default AboutUs