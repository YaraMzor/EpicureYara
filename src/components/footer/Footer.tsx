import React from "react";
import {Box, Column,FooterLink,} from './styles';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const navigate = useNavigate();
    const onContactUsClicked = () =>{
      navigate('/ContactUs');
    };
    const onTermofUseClicked = () =>{
      navigate('/TermofUse');
    };
    const onPrivacyPolicyClicked = () =>{
      navigate('/PrivacyPolicy');
    };
  return (
    <Box>
          <Column>
            <FooterLink onClick={onContactUsClicked}>Contact Us</FooterLink>
            <FooterLink onClick={onTermofUseClicked}>Term of Use</FooterLink>
            <FooterLink onClick={onPrivacyPolicyClicked}>Privacy Policy</FooterLink>
          </Column>
    </Box>
  );
};
export default Footer;


