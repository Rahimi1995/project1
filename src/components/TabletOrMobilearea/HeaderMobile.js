import React,{useState} from 'react'
import { Container } from 'react-bootstrap';
import { Row,Col } from 'react-bootstrap';
import ButtonhomeMobile from '../TabletOrMobilearea/ButtonhomeMobile';
import Logo from '../../assets/images/Logo.png'
import LoginareaMobile from '../TabletOrMobilearea/LoginareaMobile';
import '../../assets/Css/StyleTaletOrMobile/Indexmobile.css';

const Header = () => {
  const[show,setShow]=useState(false);
    function onclick(){
        setShow(true);
    }
  

  return (
 
<div className="mainheader-m" >

{/* <Container fluid>
  <Row>
    <Col> */}
    <div className="iconarea-m">
    
    <button type="button" onClick={onclick}>
    <ButtonhomeMobile/>
    </button>
   
        </div>
{/*     
    </Col>
    
    <Col>  */}
    
    <div className="logoarea-m">
    <img src={Logo}/>
    
    </div>
{/*     
  </Col>
   
  </Row>
 
  </Container>  */}
  {
        show?<div className="loginarea1-m">
         <LoginareaMobile/>
            </div>:null
    }
  
    </div>
 
  )
}

export default Header
