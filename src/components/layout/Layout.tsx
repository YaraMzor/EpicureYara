import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllRestaurants from '../Restaurants/AllRestaurants';
import Header from '../HomePage/heroMOBILE/Header';
import { HomePage } from '../HomePage/HomePage';
import Navs from '../header/Navs';
import Restaurants from '../Restaurants/popularRestaurants';
import ContactUs from '../contactUs/ContactUs';
import TermofUse from '../termofUse/TermofUse';
import PrivacyPolicy from '../privacyPolicy/PrivacyPolicy';
import Footer from '../footer/Footer';


export default function Layout(){
    return(
        <BrowserRouter>
        <Navs/>
        
         <Routes>
            <Route path='' element={<HomePage/>}/> <Route/>
            <Route path='/AllRestaurants' element={<AllRestaurants/>} /> <Route/>
            <Route path='/ContactUs' element={<ContactUs/>} /> <Route/>
            <Route path='/TermofUse' element={<TermofUse/>} /> <Route/>
            <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} /> <Route/>
            <Route path='/HomePage' element={<HomePage/>} /> <Route/>
            <Route path='/bag' element={<HomePage/>} /> <Route/>
            <Route path='/User' element={<HomePage/>} /> <Route/>
            <Route path='/Search' element={<HomePage/>} /> <Route/>
            <Route path='/Restaurants' element={<AllRestaurants/>} /> <Route/>
            <Route path='/Chefs' element={<AllRestaurants/>} /> <Route/>
            <Route path='/ContactUs' element={<ContactUs/>} /> <Route/>
            <Route path='/TermofUse' element={<TermofUse/>} /> <Route/>
            <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} /> <Route/>
        </Routes>

        <Footer/>
        </BrowserRouter>
    );
}