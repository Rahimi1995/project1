import React,{useState} from 'react'
import { Container } from 'react-bootstrap';
import { Row,Col } from 'react-bootstrap';
import LoginareaBig from '../BigScreenarea/LoginareaBig';
import Logo from '../../assets/images/Logo.png'
import ButtonhomeBig from '../BigScreenarea/ButtonhomeBig';
import indexbig from '../../assets/Css/StyleBigScreen/indexbig.css'

const Header = () => {
  const[show,setShow]=useState(false);
    function onclick(){
        setShow(true);
       
    }
  

  return (
    <div>
<div className="mainheader-b" >

<Container>
  <Row>
    <Col>
    <div className="iconarea-b">
    
    <button onClick={onclick}>
    <ButtonhomeBig/>
    </button>
   
        </div>
      
    
    </Col>
    
    <Col>
    
    <div className="logoarea-b">
    <img src={Logo}/>
    
    </div>
    
    </Col>
   
  </Row>
 
  </Container>

  
    </div>
      {
        show?<div className="loginarea1">
         <LoginareaBig/>
            </div>:null
    }
    </div>
    
  )
}

export default Header
