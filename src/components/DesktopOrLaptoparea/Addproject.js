import React,{useState,useContext} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import person from '../../assets/images/person.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Upload from '../../assets/Css/StyleDesktopOrLaptop/Upload.css'
import { FaUserCog,FaAngleLeft } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { MdPageview } from "react-icons/md";
import Navbar from '../DesktopOrLaptoparea/Navbar';
import Homeinput from '../DesktopOrLaptoparea/Homeinput';
import Homeequipment from '../DesktopOrLaptoparea/Homeequipment';
import Homefacilies from '../DesktopOrLaptoparea/Homefacilies';
import Homeinformation from '../DesktopOrLaptoparea/Homeinformation';
import Homeupload from '../DesktopOrLaptoparea/Homeupload'
import Contextuser from '../../Context/Contextuser'

import axios from 'axios';
import qs from 'qs';
import Multistep  from 'react-multistep'
function Addproject() {
  
  const steps = [
    {name: 'اطلاعات شخصی', component: <Homeinput/>},
    {name: 'تجهیزات خانه', component: <Homeequipment/>},
    {name: 'امکانات خانه', component: <Homefacilies/>},
    {name: 'اطلاعات ملک', component: <Homeinformation/>},
    {name: 'آپلود فایل ها', component: <Homeupload/>}
    
  ];


  return (
    
      
       
          <Container fluid>
             
          <Row>
          <Col lg={2}>
         
          <Navbar/>
          </Col>
          <Col lg={10}>
          <Multistep showNavigation={true} steps={steps}/>
          </Col>
          </Row>
       </Container>
      
     
    
    
  
  )
}

export default Addproject




