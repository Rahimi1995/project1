import React from 'react'
import { Container,Row,Col, Form } from 'react-bootstrap'
import {FaPhone} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaAngleLeft} from 'react-icons/fa'
import Home5 from '../../assets/images/Home5.jpg'




function Footer() {
    const footerstyle={

        background:"#fd5908",
        padding:"2px",
        color:"#ffffff",
        borderRadius:"3px"
       
    };
    return (
        <div className='Footerpart'>
            <Container>
                <Row>
               
                    <Col sm>
                    <div className="about">
                        
                            <h3>درباره ما</h3>
                            <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                            </div>
                        
                    </Col >
                    <Col sm>
                    <div className="contactus">
                    <h3>ارتباط با ما</h3>
                    <p className="logocontent"><FaPhone style={footerstyle} /> تلفن : 0909009000 </p>
                    <p><FaInstagram style={footerstyle}/> اینستاگرام : bnd.online.realestate</p>
                    </div>
                    </Col>
                    <Col sm>
                    <div className="newsarea">
                    <Form>
                    
                        <h3>خبرنامه</h3>
                        <div className="formnews">
                        <label>برای اطلاع از پروژه های جدید ایمیل خود را وارد کنید </label>
                        <input type="text" id="" name="" />
                        <button type="submit" className="btnformnew"><FaAngleLeft /></button>
                        
                        </div>
                    
                    </Form>
                    <img src={Home5} style={{width: '100px', height:'100px',display:'flex'}}/>
                    </div>
                    </Col>
                    
                </Row>
            </Container>
            
        </div>
    )
}

export default Footer
