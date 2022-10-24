import React from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home3 from '../../assets/images/Home3.jpg'
import { Container,Row,Col } from 'react-bootstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Categorypart = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    
      };
    return (
       
//              <Container>
//                 <Row>
//                 <div className="cardpardone">
//                     <p>دسته بندی پروژه ها</p>
//                 </div>
//                 </Row>
                
//                 <Row>
//                 <div className="cardpart">
//                 <Col sm>
                
//                 <Card style={{ width: '20rem',border:'none'  }}>
//                  <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
//                  <Card.Body>
//                  <Card.Title>فروش آپارتمان مسکونی</Card.Title>
//                  </Card.Body>
//                  </Card>
                  
//                 </Col>
//                 <Col sm>
//                 <Card style={{ width: '20rem',border:'none'  }}>
//                  <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
//                  <Card.Body>
//                  <Card.Title>فروش آپارتمان مسکونی</Card.Title>
//                  </Card.Body>
//                  </Card>


//                 </Col>
//                 <Col sm>
//                 <Card style={{ width: '20rem',border:'none'  }}>
//                  <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
//                  <Card.Body>
//                  <Card.Title>فروش آپارتمان مسکونی</Card.Title>
//                  </Card.Body>
                 
//                  </Card>
// s

//                 </Col>
//                 </div>
//                 </Row>
//             </Container>


<Row>
<div className='sliderareapart'>
<Container>
<Slider {...settings}>
<div>
<Card style={{ width: '20vw',border:'none'  }}>
         <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
         <Card.Body style={{padding:'8px 8px 0px 8px'}}>
         <Card.Title>فروش آپارتمان مسکونی</Card.Title>
         {/* <Card.Text>
         <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
         </Card.Text> */}
         </Card.Body>
         {/* <Card.Footer>
            <div>
             <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
             <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
             </div>
         </Card.Footer> */}
         </Card>
          
</div>
<div>
<Card style={{ width: '20vw',border:'none'  }}>
         <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
         <Card.Body style={{padding:'8px 8px 0px 8px'}}>
         <Card.Title>فروش آپارتمان مسکونی</Card.Title>
         {/* <Card.Text>
         <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
         </Card.Text> */}
         </Card.Body>
         {/* <Card.Footer>
            <div>
             <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
             <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
             </div>
         </Card.Footer> */}
         </Card>
</div>
<div>
<Card style={{ width: '20vw',border:'none'  }}>
         <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
         <Card.Body style={{padding:'8px 8px 0px 8px'}}>
         <Card.Title>فروش آپارتمان مسکونی</Card.Title>
         {/* <Card.Text>
         <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
         </Card.Text> */}
         </Card.Body>
         {/* <Card.Footer>
            <div>
             <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
             <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
             </div>
         </Card.Footer> */}
         </Card>
</div>
<div>
<Card style={{ width: '20rem',border:'none'  }}>
         <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
         <Card.Body style={{padding:'8px 8px 0px 8px'}}>
         <Card.Title>فروش آپارتمان مسکونی</Card.Title>
         {/* <Card.Text>
         <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
         </Card.Text> */}
         </Card.Body>
         {/* <Card.Footer>
            <div>
             <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
             <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
             </div>
         </Card.Footer> */}
         </Card>
</div>
<div>
<Card style={{ width: '20rem',border:'none'  }}>
         <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
         <Card.Body style={{padding:'8px 8px 0px 8px'}}>
         <Card.Title>فروش آپارتمان مسکونی</Card.Title>
         {/* <Card.Text>
         <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
         </Card.Text> */}
         </Card.Body>
         {/* <Card.Footer>
            <div>
             <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
             <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
             </div>
         </Card.Footer> */}
         </Card>
</div>
<div>
<Card style={{ width: '20vw',border:'none'  }}>
         <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
         <Card.Body style={{padding:'8px 8px 0px 8px'}}>
         <Card.Title>فروش آپارتمان مسکونی</Card.Title>
         {/* <Card.Text>
         <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
         </Card.Text> */}
         </Card.Body>
         {/* <Card.Footer>
            <div>
             <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
             <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
             </div>
         </Card.Footer> */}
         </Card>
</div>
<div>
<Card style={{ width: '20vw',border:'none'  }}>
         <Card.Img  style={{height:'190px'}} variant="top" src={Home3} />
         <Card.Body style={{padding:'8px 8px 0px 8px'}}>
         <Card.Title>فروش آپارتمان مسکونی</Card.Title>
         {/* <Card.Text>
         <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
         </Card.Text> */}
         </Card.Body>
         {/* <Card.Footer>
            <div>
             <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
             <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
             </div>
         </Card.Footer> */}
         </Card>
</div>

</Slider>
</Container>
</div>
</Row>

       
    )
}

export default Categorypart
