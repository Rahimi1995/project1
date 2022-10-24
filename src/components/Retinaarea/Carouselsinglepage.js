import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Buteful from '../assets/images/Buteful.jpg'
import Stylesinglepage from '../assets/Css/Stylesinglepage.css'
import { Container,Row,Col } from 'react-bootstrap';
import { Carousel } from 'react-carousel-minimal';
import { BiStreetView,BiImage } from "react-icons/bi";
import { colors } from 'grommet/themes/base';

function Carouselsinglepage() {
   
    const data = [
        {
            image: require('../assets/images/Home1.jpg').default,
            
          },
          {
            image: require('../assets/images/Home1.jpg').default,
            
          },
          {
            image: require('../assets/images/Home1.jpg').default,
            
          },
       {
          image: require('../assets/images/Home1.jpg').default,
          
        },
        {
          image: require('../assets/images/Home1.jpg').default,
          
        },
        {
          image: require('../assets/images/Home1.jpg').default,
          
        },
        {
          image: require('../assets/images/Home1.jpg').default,
          
        },
        {
          image: require('../assets/images/Home1.jpg').default,
          
        },
        {
          image: require('../assets/images/Home1.jpg').default,
          
        }
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
      const btnstyle={
        fontSize:'2vw',
        
      }

  return (
  
    <Container>
     <div style={{ textAlign: "center" }}>
        <div >
       
          <Carousel
            data={data}
            time={2000}
            width="100vw"
            height="500px"
            captionStyle={captionStyle}
            // slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              width: "85vw",
              maxHeight: "500px",
              margin: "3vh -1.80vw 3vw 0",
              position:"relative",
            }}
          
          />
           <div className="btncarousel">
           
           
            <a href="" className="active"><BiImage style={btnstyle} /></a>
            <a href=""><BiStreetView style={btnstyle}/></a>
          </div>
          
        </div>
      </div>
</Container>
  )
}

export default Carouselsinglepage
