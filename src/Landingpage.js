import React from 'react'
import Landingpage from "../assets/images/Landingpage.jpg"
import Landing from "../assets/Css/Landing.css"
import { Container,Row,Col } from 'react-bootstrap';
import {FaAngleDoubleRight} from 'react-icons/fa';
import {FaCircle} from 'react-icons/fa'
import Logo from '../assets/images/Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagehome from '../assets/images/Imagehome.png'

function Landingpage() {
    return (
        <Container fluid>
  <Row>
    <Col><div className="imagelanding">
        <img src={Imagehome}/>
        </div></Col>
    <Col md={12} lg={6}>
      <div className="ali">
            <div className="logolanding">
             <img src={Logo}/>
             </div>
             <div className="landingcontent">
            <h1>
              بهترین پروژه های منازل 360 درجه</h1>
             <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استد</p>
             <div className="clickarea">
             <p><FaAngleDoubleRight/>   برای دیدن پروژه ها همین الان کلیک کنید</p>
             </div>
            
             </div>
             <br/>
             <div className="circle">
             <FaCircle/>  <FaCircle/>  <FaCircle/> <FaCircle/> <FaCircle/> 
              </div>
             </div>
    </Col>
  </Row>
</Container>
    )
}

export default Landingpage
