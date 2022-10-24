import React,{useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Home3 from '../../assets/images/Home3.jpg'
import {  FaMapMarkerAlt } from 'react-icons/fa';
import { IoBedOutline , IoHomeOutline } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiShare } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { FaWhatsapp,FaInstagram,FaTelegramPlane ,FaInternetExplorer,FaPhone } from "react-icons/fa";






function Cardpart() {
    const[show,setShow]=useState(false);
    function onclick(){
        setShow(true);  
        if(show==true){
            setShow(false)
        } 
    }

    return (
        
            <Container>
                <Row>
            <div className="cardpardone-d">
                    <h1>نمایش املاک</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                </div>
                </Row>
                
                    <Row>
                    <div className="cardpart-d">
                <Col sm>
                <Card style={{border:'none' ,borderRadius:'0',width:'25vw'}}>
                
                <div className="headercardarea">
                <Card.Header style={{zIndex:-100,background:100,height:50}}>
                <Row>
                        <Col>
                        <div className="pricecard">
                        <p>$500000</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="iconcardarea-d">
                            {/* <div className="Hearthcard" onMouseOver={onclick}>
                            <FiHeart/>
                            </div>
                             */}
                           <button type="button" className="Hearthcard"><FiHeart/></button>
                            <button type="button" onMouseOut={onclick} className="sharecard" onMouseOut><HiShare/></button>
                            {
                            show?<div className="sharecardarea-d">
                            <div className="Shateitemhover">
                            <a ><FaWhatsapp/></a>
                            </div>
                            <div className="Shateitemhover">
                            <a><FaInstagram/></a>
                            </div>
                            <div className="Shateitemhover">
                            <a><FaTelegramPlane/></a>
                            </div>
                        </div>:null

                        }
                         
                        </div>
                        </Col>
                    </Row>

                </Card.Header>
                   
                     
                    </div>
                   
                 <Card.Img  style={{height:'190px',zIndex:'-100,'}}   variant="top" src={Home3} />
                 <Card.Body style={{padding:'8px 8px 0px 8px'}}>
                 <Card.Title>فروش آپارتمان مسکونی</Card.Title>
                 <Card.Text>
                 <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
                 </Card.Text>
                 
                 </Card.Body>
                 <Card.Footer style={{background:'#ffffff'}}>
                    <div>
                     <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
                     <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
                     </div>
                 </Card.Footer>
                 </Card>
                </Col>
                
                <Col sm>
                <Card style={{border:'none' ,borderRadius:'0',width:'25vw'}}>
                
                <div className="headercardarea">
                <Card.Header style={{zIndex:-100,background:100,height:50}}>
                <Row>
                        <Col>
                        <div className="pricecard">
                        <p>$500000</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="iconcardarea">
                            
                           <button type="button" className="Hearthcard"><FiHeart/></button>
                            <button type="button" onClick={onclick} className="sharecard"><HiShare/></button>
                            {
                            show?<div className="sharecardarea">
                            <div className="Shateitemhover">
                            <a ><FaWhatsapp/></a>
                            </div>
                            <div className="Shateitemhover">
                            <a><FaInstagram/></a>
                            </div>
                            <div className="Shateitemhover">
                            <a><FaTelegramPlane/></a>
                            </div>
                        </div>:null

                        }
                         
                        </div>
                        </Col>
                    </Row>

                </Card.Header>
                   
                     
                    </div>
                   
                 <Card.Img  style={{height:'190px',zIndex:'-100,'}}   variant="top" src={Home3} />
                 <Card.Body style={{padding:'8px 8px 0px 8px'}}>
                 <Card.Title>فروش آپارتمان مسکونی</Card.Title>
                 <Card.Text>
                 <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
                 </Card.Text>
                 
                 </Card.Body>
                 <Card.Footer style={{background:'#ffffff'}}>
                    <div>
                     <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
                     <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
                     </div>
                 </Card.Footer>
                 </Card>
                </Col>
                
                <Col sm>
                <Card style={{ border:'none' ,borderRadius:'0',width:'25vw'}}>
                
                <div className="headercardarea">
                <Card.Header style={{zIndex:-100,background:100,height:50}}>
                <Row>
                        <Col>
                        <div className="pricecard">
                        <p>$500000</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="iconcardarea">
                            
                           <button type="button" className="Hearthcard"><FiHeart/></button>
                            <button type="button" onClick={onclick} className="sharecard"><HiShare/></button>
                            {
                            show?<div className="sharecardarea">
                            <div className="Shateitemhover">
                            <a ><FaWhatsapp/></a>
                            </div>
                            <div className="Shateitemhover">
                            <a><FaInstagram/></a>
                            </div>
                            <div className="Shateitemhover">
                            <a><FaTelegramPlane/></a>
                            </div>
                        </div>:null

                        }
                         
                        </div>
                        </Col>
                    </Row>

                </Card.Header>
                   
                     
                    </div>
                   
                 <Card.Img  style={{height:'190px',zIndex:'-100,'}}   variant="top" src={Home3} />
                 <Card.Body style={{padding:'8px 8px 0px 8px'}}>
                 <Card.Title>فروش آپارتمان مسکونی</Card.Title>
                 <Card.Text>
                 <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
                 </Card.Text>
                 
                 </Card.Body>
                 <Card.Footer style={{background:'#ffffff'}}>
                    <div>
                     <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
                     <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
                     </div>
                 </Card.Footer>
                 </Card>
                </Col>
                
               </div>
                </Row>


                <Row>
                <div className="cardpart">
                <Col sm>
                <Card style={{ border:'none' ,borderRadius:'0',width:'25vw'}}>
                
                <div className="headercardarea">
                <Card.Header style={{zIndex:-100,background:100,height:50}}>
                <Row>
                        <Col>
                        <div className="pricecard">
                        <p>$500000</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="iconcardarea">
                            
                           <button type="button" className="Hearthcard"><FiHeart/></button>
                            <button type="button" onClick={onclick} className="sharecard"><HiShare/></button>
                            {
                            show?<div className="sharecardarea">
                            <div className="Shateitemhover">
                            <a ><FaWhatsapp/></a>
                            </div>
                            <div className="Shateitemhover">
                            <a><FaInstagram/></a>
                            </div>
                            <div className="Shateitemhover">
                            <a><FaTelegramPlane/></a>
                            </div>
                        </div>:null

                        }
                         
                        </div>
                        </Col>
                    </Row>

                </Card.Header>
                   
                     
                    </div>
                   
                 <Card.Img  style={{height:'190px',zIndex:'-100,'}}   variant="top" src={Home3} />
                 <Card.Body style={{padding:'8px 8px 0px 8px'}}>
                 <Card.Title>فروش آپارتمان مسکونی</Card.Title>
                 <Card.Text>
                 <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
                 </Card.Text>
                 
                 </Card.Body>
                 <Card.Footer style={{background:'#ffffff'}}>
                    <div>
                     <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
                     <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
                     </div>
                 </Card.Footer>
                 </Card>
                </Col>
                
                <Col sm>
                <Card style={{border:'none' ,borderRadius:'0',width:'25vw'}}>
                
                <div className="headercardarea">
                <Card.Header style={{zIndex:-100,background:100,height:50}}>
                <Row>
                        <Col>
                        <div className="pricecard">
                        <p>$500000</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="iconcardarea">
                            
                           <button type="button" className="Hearthcard"><FiHeart/></button>
                            <button type="button" onClick={onclick} className="sharecard"><HiShare/></button>
                            {
                            show?<div className="sharecardarea">
                            <div className="Shateitemhover">
                            <a ><FaWhatsapp/></a>
                            </div>
                            <div className="Shateitemhover">
                            <a><FaInstagram/></a>
                            </div>
                            <div className="Shateitemhover">
                            <a><FaTelegramPlane/></a>
                            </div>
                        </div>:null

                        }
                         
                        </div>
                        </Col>
                    </Row>

                </Card.Header>
                   
                     
                    </div>
                   
                 <Card.Img  style={{height:'190px',zIndex:'-100,'}}   variant="top" src={Home3} />
                 <Card.Body style={{padding:'8px 8px 0px 8px'}}>
                 <Card.Title>فروش آپارتمان مسکونی</Card.Title>
                 <Card.Text>
                 <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
                 </Card.Text>
                 
                 </Card.Body>
                 <Card.Footer style={{background:'#ffffff'}}>
                    <div>
                     <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
                     <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
                     </div>
                 </Card.Footer>
                 </Card>
                </Col>
                
                <Col sm>
                <Card style={{border:'none' ,borderRadius:'0',width:'25vw'}}>
                
                <div className="headercardarea">
                <Card.Header style={{zIndex:-100,background:100,height:50}}>
                <Row>
                        <Col>
                        <div className="pricecard">
                        <p>$500000</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="iconcardarea">
                            
                           <button type="button" className="Hearthcard"><FiHeart/></button>
                            <button type="button" onClick={onclick} className="sharecard"><HiShare/></button>
                            {
                            show?<div className="sharecardarea">
                            <div className="Shateitemhover">
                            <a ><FaWhatsapp/></a>
                            </div>
                            <div className="Shateitemhover">
                            <a><FaInstagram/></a>
                            </div>
                            <div className="Shateitemhover">
                            <a><FaTelegramPlane/></a>
                            </div>
                        </div>:null

                        }
                         
                        </div>
                        </Col>
                    </Row>

                </Card.Header>
                   
                     
                    </div>
                   
                 <Card.Img  style={{height:'190px',zIndex:'-100,'}}   variant="top" src={Home3} />
                 <Card.Body style={{padding:'8px 8px 0px 8px'}}>
                 <Card.Title>فروش آپارتمان مسکونی</Card.Title>
                 <Card.Text>
                 <p> <FaMapMarkerAlt/>  موقعیت:گلشهر شمالی</p>
                 </Card.Text>
                 
                 </Card.Body>
                 <Card.Footer style={{background:'#ffffff'}}>
                    <div>
                     <small><IoBedOutline/> تعداد اتاق: 2 خواب </small>
                     <small style={{float:'left'}}> <IoHomeOutline/> متراژ:1000 مترمربع</small>
                     </div>
                 </Card.Footer>
                 </Card>
                </Col>
               </div>
                </Row>
               
              
            </Container>
        
    )
}

export default Cardpart
