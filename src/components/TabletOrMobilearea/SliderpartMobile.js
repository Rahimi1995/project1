 import React from 'react';
 import { Container,Row } from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Slider from 'react-slick';
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 import Card from 'react-bootstrap/Card'
import Home3 from '../../assets/images/Home3.jpg'
import {  FaMapMarkerAlt } from 'react-icons/fa';
import { IoBedOutline , IoHomeOutline } from "react-icons/io5";


 export default function Sliderpart() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1

  };
  return (
    <Container>
        <div className="cardpardone">
                    <p>املاک ویژه</p>
                </div>
      <Row>
      <div className='sliderarea'>
      <Slider {...settings}>
      <div>
      <Card style={{ width: '20rem',border:'none'  }}>
                 <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
                 <Card.Body style={{padding:'8px 8px 0px 8px'}}>
                 <Card.Title>فروش آپارتمان مسکونی</Card.Title>
                 <Card.Text>
                 <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
                 </Card.Text>
                 </Card.Body>
                 <Card.Footer>
                    <div>
                     <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
                     <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
                     </div>
                 </Card.Footer>
                 </Card>
                  
      </div>
      <div>
      <Card style={{ width: '20rem',border:'none'  }}>
                 <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
                 <Card.Body style={{padding:'8px 8px 0px 8px'}}>
                 <Card.Title>فروش آپارتمان مسکونی</Card.Title>
                 <Card.Text>
                 <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
                 </Card.Text>
                 </Card.Body>
                 <Card.Footer>
                    <div>
                     <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
                     <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
                     </div>
                 </Card.Footer>
                 </Card>
      </div>
      <div>
      <Card style={{ width: '20rem',border:'none'  }}>
                 <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
                 <Card.Body style={{padding:'8px 8px 0px 8px'}}>
                 <Card.Title>فروش آپارتمان مسکونی</Card.Title>
                 <Card.Text>
                 <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
                 </Card.Text>
                 </Card.Body>
                 <Card.Footer>
                    <div>
                     <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
                     <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
                     </div>
                 </Card.Footer>
                 </Card>
      </div>
      <div>
      <Card style={{ width: '20rem',border:'none'  }}>
                 <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
                 <Card.Body style={{padding:'8px 8px 0px 8px'}}>
                 <Card.Title>فروش آپارتمان مسکونی</Card.Title>
                 <Card.Text>
                 <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
                 </Card.Text>
                 </Card.Body>
                 <Card.Footer>
                    <div>
                     <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
                     <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
                     </div>
                 </Card.Footer>
                 </Card>
      </div>
      <div>
      <Card style={{ width: '20rem',border:'none'  }}>
                 <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
                 <Card.Body style={{padding:'8px 8px 0px 8px'}}>
                 <Card.Title>فروش آپارتمان مسکونی</Card.Title>
                 <Card.Text>
                 <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
                 </Card.Text>
                 </Card.Body>
                 <Card.Footer>
                    <div>
                     <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
                     <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
                     </div>
                 </Card.Footer>
                 </Card>
      </div>
      <div>
      <Card style={{ width: '20rem',border:'none'  }}>
                 <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
                 <Card.Body style={{padding:'8px 8px 0px 8px'}}>
                 <Card.Title>فروش آپارتمان مسکونی</Card.Title>
                 <Card.Text>
                 <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
                 </Card.Text>
                 </Card.Body>
                 <Card.Footer>
                    <div>
                     <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
                     <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
                     </div>
                 </Card.Footer>
                 </Card>
      </div>
      <div>
      <Card style={{ width: '20rem',border:'none'  }}>
                 <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
                 <Card.Body style={{padding:'8px 8px 0px 8px'}}>
                 <Card.Title>فروش آپارتمان مسکونی</Card.Title>
                 <Card.Text>
                 <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
                 </Card.Text>
                 </Card.Body>
                 <Card.Footer>
                    <div>
                     <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
                     <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
                     </div>
                 </Card.Footer>
                 </Card>
      </div>
      
    </Slider>
    </div>
    </Row>
    </Container>
  );
}




 


