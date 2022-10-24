import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Home1 from '../../assets/images/Home1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaAngleDoubleDown} from 'react-icons/fa'
function carousel() {
    return (
        <div className="carousel-b">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Home1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>خانه رویایی خود را با ما پیدا کنید</h3>
      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
        <br/>
      <FaAngleDoubleDown/>
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Home1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>خانه رویایی خود را با ما پیدا کنید</h3>
      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
        <br/>
        <FaAngleDoubleDown/>
      </p>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Home1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>خانه رویایی خود را با ما پیدا کنید</h3>
      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
        <br/>
        <FaAngleDoubleDown/>
      </p>
     
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
        </div>
    )
}

export default carousel

