import React,{useState} from 'react'
import { Container } from 'react-bootstrap';
import { Row,Col } from 'react-bootstrap';
import Buttonhome from './Buttonhome';
import Logo from '../../assets/images/Logo.png'
import Loginarea from './Loginarea';
import Styleindex from '../../assets/Css/StyleDesktopOrLaptop/Styleindex.css'

const Header = () => {
  const[show,setShow]=useState(false);
    function onclick(){
        setShow(true);
       
    }
  

  return (
    <div>
<div className="mainheader-d" >

<Container>
  <Row>
    <Col>
    <div className="iconarea-d">
    
    <button type="button"  onClick={onclick}>
    <Buttonhome/>
    </button>
   
        </div>
      
    
    </Col>
    
    <Col>
    
    <div className="logoarea-d">
    <img src={Logo}/>
    
    </div>
    
    </Col>
   
  </Row>
 
  </Container>

  
    </div>
      {
        show?<div className="loginarea1">
         <Loginarea/>
            </div>:null
    }
    </div>
    
  )
}

export default Header
