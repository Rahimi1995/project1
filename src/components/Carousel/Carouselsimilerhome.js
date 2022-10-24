import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Home3 from '../../assets/images/Home3.jpg'
import { AiOutlineHome } from "react-icons/ai";
import { GiElevator,GiHomeGarage } from "react-icons/gi";
import { BsArrowsFullscreen } from "react-icons/bs";
import {Container,Row,Col} from 'react-bootstrap'
import Stylecarousel from '../../assets/Css/Stylecarousel.css'


function Carouselsimilerhome() {
  const stylecarousel={
   paddingLeft:"0.5vw",
   fontSize:"1.5rem"

  };
    return (
       <Container>
            <div>   
        <OwlCarousel className="owl-theme"  margin={10} >
  
     
  <div class='item'>
    <div className="carouselspace">
    <div className="picturehome">
      <img src={Home3}/>
    </div>
    <div className="carouselcontent">
      <div className="locationarea">
        <div className="pricecarousel">
        <p style={{fontSize:"1.6rem",fontWeight:"bold"}}>$5000000</p>
        </div>
       
        <p style={{fontSize:"0.90rem"}}>آپارتمان شماره 104</p>
        <p style={{fontSize:"0.90rem"}}>گلشهرشمالی</p>
        
        
      </div>
       <div className="facilities">
        
         <p><GiElevator style={stylecarousel}/>آسانسور</p>
         <p><BsArrowsFullscreen style={stylecarousel}/>متراژ </p>
         <p><AiOutlineHome style={stylecarousel}/>پارکینگ</p>
         <p><GiHomeGarage style={stylecarousel}/>تعداد اتاق</p>
         
       </div>
    </div> 
    </div>
  
    </div>
    <div class='item'>
    <div className="carouselspace">
    <div className="picturehome">
      <img src={Home3}/>
    </div>
    <div className="carouselcontent">
      <div className="locationarea">
        <div className="pricecarousel">
        <p style={{fontSize:"1.6rem",fontWeight:"bold"}}>$5000000</p>
        </div>
       
        <p style={{fontSize:"0.90rem"}}>آپارتمان شماره 104</p>
        <p style={{fontSize:"0.90rem"}}>گلشهرشمالی</p>
        
        
      </div>
       <div className="facilities">
        
         <p><GiElevator style={stylecarousel}/>آسانسور</p>
         <p><BsArrowsFullscreen style={stylecarousel}/>متراژ </p>
         <p><AiOutlineHome style={stylecarousel}/>پارکینگ</p>
         <p><GiHomeGarage style={stylecarousel}/>تعداد اتاق</p>
         
       </div>
    </div> 
    </div>
    </div>
    <div class='item'>
    <div className="carouselspace">
    <div className="picturehome">
      <img src={Home3}/>
    </div>
    <div className="carouselcontent">
      <div className="locationarea">
        <div className="pricecarousel">
        <p style={{fontSize:"1.6rem",fontWeight:"bold"}}>$5000000</p>
        </div>
       
        <p style={{fontSize:"0.90rem"}}>آپارتمان شماره 104</p>
        <p style={{fontSize:"0.90rem"}}>گلشهرشمالی</p>
        
        
      </div>
       <div className="facilities">
        
         <p><GiElevator style={stylecarousel}/>آسانسور</p>
         <p><BsArrowsFullscreen style={stylecarousel}/>متراژ </p>
         <p><AiOutlineHome style={stylecarousel}/>پارکینگ</p>
         <p><GiHomeGarage style={stylecarousel}/>تعداد اتاق</p>
         
       </div>
    </div> 
    </div>
    </div>
    <div class='item'>
    <div className="carouselspace">
    <div className="picturehome">
      <img src={Home3}/>
    </div>
    <div className="carouselcontent">
      <div className="locationarea">
        <div className="pricecarousel">
        <p style={{fontSize:"1.6rem",fontWeight:"bold"}}>$5000000</p>
        </div>
       
        <p style={{fontSize:"0.90rem"}}>آپارتمان شماره 104</p>
        <p style={{fontSize:"0.90rem"}}>گلشهرشمالی</p>
        
        
      </div>
       <div className="facilities">
        
         <p><GiElevator style={stylecarousel}/>آسانسور</p>
         <p><BsArrowsFullscreen style={stylecarousel}/>متراژ </p>
         <p><AiOutlineHome style={stylecarousel}/>پارکینگ</p>
         <p><GiHomeGarage style={stylecarousel}/>تعداد اتاق</p>
         
       </div>
    </div> 
    </div>
    </div>
    <div class='item'>
    <div className="carouselspace">
    <div className="picturehome">
      <img src={Home3}/>
    </div>
    <div className="carouselcontent">
      <div className="locationarea">
        <div className="pricecarousel">
        <p style={{fontSize:"1.6rem",fontWeight:"bold"}}>$5000000</p>
        </div>
       
        <p style={{fontSize:"0.90rem"}}>آپارتمان شماره 104</p>
        <p style={{fontSize:"0.90rem"}}>گلشهرشمالی</p>
        
        
      </div>
       <div className="facilities">
        
         <p><GiElevator style={stylecarousel}/>آسانسور</p>
         <p><BsArrowsFullscreen style={stylecarousel}/>متراژ </p>
         <p><AiOutlineHome style={stylecarousel}/>پارکینگ</p>
         <p><GiHomeGarage style={stylecarousel}/>تعداد اتاق</p>
         
       </div>
    </div> 
    </div>
    </div>

 
  
</OwlCarousel>
        </div>
        </Container>
    )
}

export default Carouselsimilerhome;
