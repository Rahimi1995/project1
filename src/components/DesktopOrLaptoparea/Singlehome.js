import React , {useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Carousel } from 'react-carousel-minimal';
import Home3 from '../assets/images/Home3.jpg'
import Carouselsinglepage from './Carouselsinglepage'
import { FiShare2 } from "react-icons/fi";
import { FaWhatsapp,FaInstagram,FaTelegramPlane ,FaInternetExplorer,FaPhone } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import person from "../assets/images/person.jpg"
import { SiGmail } from "react-icons/si";
import Carouselsimilerhome from '../components/Carousel/Carouselsimilerhome'
import Searcharea from './Searcharea';
import Pricebar from './Pricebar'
import { FaPlus,FaWindowMinimize } from "react-icons/fa";
import Footer from './Footer'


function Singlehome() {

    const[show,setShow]=useState(false);
    function onclick(){
        setShow(true);  
        if(show==true){
            setShow(false)
        } 
    }
    const [View, setView] = useState(false);
    function onview(){
        setView(true);
        if(View==true){
            setView(false)
        }
    }

    const stylep={
        fontSize:"1.3rem" ,
        fontWeight:"bold",
        marginRight:"-1vw", 
        marginTop:"2.5vh"
    };
    const styleicon={
        color:"#fd5908"
    };

    const facilitiesicon={
       
    };
   
    return (
        <div>
        <Container>
            <Row>
            <div className="carouselhome">
            <Carouselsinglepage/>
            </div>
            </Row>
            <Row>
               
            <div className="pricehomepage" >
                <div className="homename" >
                <div className="homenamearea">
                    <p>آپارتمان شماره 2</p>
                    </div>
                    <p style={{fontSize:"1.3rem"}}>گلشهرشمالی</p>
                </div>
                <div className="pricehome">
                    <p>$500000</p>
                    <div className="sharearea">
                        
                        <button  onClick={onclick} type="button" className="shareitex"><HiShare/>share</button>
                        {
                            show?<div className="shareitem">
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
                </div>
              </div>
               

            </Row>
            <Row>
                <Col lg={8}>
                <div className="detailarea">
                    <h3>توضیحات</h3>
                    <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                   
                  
                </div>
                <div className="detailarea">
                <h3>جزئیات</h3>
                   
                    <ul>
                        <li>
                            <span>Name:</span>
                            پروژه 105
                        </li>
                        <li>
                            <span>Name:</span>
                           پروژه 102
                        </li>
                    </ul>
                  
                </div>
                <div className="detailarea">
                <h3>امکانات</h3>
                    
                    <ul>
                        <li>
                            <span><AiOutlineCloseCircle/>آسانسور</span>
                           
                        </li>
                        <li>
                            <span><IoCheckmarkCircleOutline/>پارکینگ</span>
                            
                        </li>
                    </ul>
                  
                </div>
                <div className="planhomearea">
                    <h3>Floor plan</h3><br/><br/>
                    <img src={Home3}/>
                </div>

                <div className="contactarea">
                <h3>اطلاعات تماس</h3>
                    <div className="textcontactarea">
                         <div className="imagecontactarea">
                         <img src={person} />
                         </div>
                         <div className="namecontentarea">
                          <p style={stylep}>Arch sdfsdf</p>
                         </div>
                          <div className="phonecontentarea">
                           <p><FaPhone style={styleicon}/> 076333333</p>
                           </div>
                           <div className="gmailcontentarea">
                           <p><SiGmail style={styleicon} /> www.aaaaa@gmail.com</p>
                           </div>
                           <div className="websitecontentarea">
                           <p><FaInternetExplorer style={styleicon}/> www.aaaaaa.com</p>
                           </div>
                          
                         
                         
                    </div>
                </div>
                
                <div className="commentarea">
                    <h3>کامنت ها</h3>
                    
                    <div className="imagecommentarea">
                    <img src={person} />
                    </div>
                    <div className="commenttitle">
                     <p>sdfsdfsdfsd - 21Jun2021</p>
                     <div className="replyarea">
                     <a href="">reply</a>
                     </div>
                     
                    </div>
                    <div className="commenttext">
                     <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    </div>

                </div>
                </Col>

                <Col lg={4}>
                <div className="sliderarea" >
                   <form>
                       <div className="formareasinglehome">
                       <input type="text" id="keyword" name="" placeholder='کلمه کلیدی خود را وارد کنید'/>
                       <br/>
               
               <select name="home" id="home">
                <option value="Maskooni">مسکونی</option>
                <option value="Edari">اداری</option>
                <option value="Tegari">تجاری</option>
                <option value="Amoozeshi">آموزشی</option>
                <option value="Darmani">درمانی</option>
               </select><br/>

               <select id="typehome">
                <option value="aparteman">آپارتمان</option>
                <option value="vilaei">ویلایی</option>
                <option value="zamin">زمین</option>
                <option value="kolangi">کلنگی</option>
                <option value="garden">باغ و باغچه</option>
                <option value="store">انبار و سوله</option>
               </select>

               <br/><select id="typehome">
                 <option value="aparteman">آپارتمان</option>
                 <option value="vilaei">ویلایی</option>
                 <option value="zamin">زمین</option>
                 <option value="kolangi">کلنگی</option>
                 <option value="garden">باغ و باغچه</option>
                 <option value="store">انبار و سوله</option>
                </select><br/>

                <select id="typead">
                 <option value="froosh">فروشی</option>
                 <option value="ejare">اجاره</option>
                 <option value="rahn">رهن</option>
                 <option value="sarghofli">سرقفلی</option>
                 <option value="peshfroosh">پیش فروش</option>
                </select><br/>

                 <select id="typead">
                 <option value="Maskooni">مسکونی</option>
                 <option value="Edari">اداری</option>
                 <option value="Tegari">تجاری</option>
                 <option value="Amoozeshi">آموزشی</option>
                 <option value="Darmani">درمانی</option>
                </select><br/>
               
                 <select id="locationhome">
                 <option value="North">شمالی</option>
                 <option value="Sorth">جنوبی</option>
                </select><br/>

                 <select id="Cupboards">
                 <option value="Ganvanize">گالوانیزه</option>
                 <option value="EdDiF">ام دی اف</option>
                 <option value="Allwood">تمام چوب</option>
                </select><br/>
                
                 <select id="floorcoverting">
                 <option value="Mozaik">موزائیک</option>
                 <option value="Moket">موکت</option>
                 <option value="Seramik">سرامیک</option>
                 <option value="Parket">پارکت</option>
                 <option value="Stone">سنگ</option>
                 <option value="Wood">چوب</option>
                </select><br/>
             
                 <select id="HCsystem">
                 <option value="Espilet">کولر اسپلت</option>
                 <option value="Systemchot">سیستم گرمایشی مرکزی</option>
                 <option value="SystemCool">سیستم سرمایشی مرکزی</option>
                 <option value="water heater">آب گرم کن</option>
                </select><br/>

                <select id="statusHome">
                 <option value="Empty">تخلیه</option>
                 <option value="Tenant">مستاجر</option>
                </select><br/>

                 <select id="typedocument">
                 <option value="Takbark">تک برگ</option>
                 <option value="Mangooledar">منگوله دار</option>
                 <option value="Withoutdoc">فاقد سند</option>
                </select><br/>
                
                 <select id="statusdocument">
                 <option value="Freedoc">آزاد</option>
                 <option value="Rahnbank"> رهن بانک</option>
                 <option value="RahnMaraje"> رهن ساید مراجع</option>
                </select><br/>
             
                 <select id="SkeletonHome">
                 <option value="MasBanaei">مصالح بنای</option>
                 <option value="Metalskeleton"> فلزی </option>
                 <option value="Betonskeleton">بتنی</option>
                 <option value="Sazeskeleton">سازه سبک</option>
                </select><br/>

                <div className="pricebararea">
                <Pricebar style={{with:"18vw"}}/>
                </div>

                <div className="Facilitiesbutton">
                    <button type="button" onClick={onview}>Facilities Home {
                            View?<FaPlus fontSize="1rem"  />:<FaWindowMinimize fontSize="0.80rem" style={facilitiesicon}/>
                           }</button>
                </div>

                <div className="searchsinglehome">
                <button type="button">Search</button>
                </div>
                {/* {
                            show?<div className="shareitem">
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

                        } */}
                        
                        {
                           View?
                           
                           <div className="checkboxhome">
                               
                <input id="lobby" type="checkbox" name="name"/>
                 <label for="lobby">لابی</label><br/>
                 
                 <input id="Iphone" type="checkbox" name="name"/>
                 <label for="Iphone">آیفون تصویری</label><br/>
                
                <input id="Guard" type="checkbox" name="name"/>
                 <label for="Guard">سرایدار/نگهبان</label><br/>

                <input id="Pool" type="checkbox" name="name"/>
                 <label for="Pool">استخر</label><br/>

                 <input id="Parking" type="checkbox" name="name"/>
                 <label for="Parking">پارکینگ</label><br/>

                 <input id="Waste" type="checkbox" name="name"/>
                 <label for="Waste">شوتینگ زباله</label><br/>
                 
                 <input id="Camerasystem" type="checkbox" name="name"/>
                 <label for="Camerasystem">دوربین مداربسته</label><br/>
                 
                 <input id="spaceplay" type="checkbox" name="name"/>
                 <label for="spaceplay">فضای بازی بچه ها</label><br/>
                   
                   <input id="Terrace" type="checkbox" name="name"/>
                 <label for="Terrace">تراس/بالکن</label><br/>
                 
                 <input id="Clothwall" type="checkbox" name="name"/>
                 <label for="Clothwall">کمددیواری</label><br/>
              
                 <input id="Clothwall" type="checkbox" name="name"/>
                 <label for="Clothwall">سونا/جکوزی</label><br/>

                 <input id="Enterdoor" type="checkbox" name="name"/>
                 <label for="Enterdoor">درب پارکینگ دار/ریموت دار</label><br/>

                 <input id="Enternet" type="checkbox" name="name"/>
                 <label for="Enternet">اینترنت مرکزی</label><br/>

                 <input id="Firesystem" type="checkbox" name="name"/>
                 <label for="Firesystem">سیستم اعلام حریق</label><br/>

                 <input id="Finalword" type="checkbox" name="name"/>
                 <label for="Finalword">تایید پایان کار</label><br/>

                 <input id="Toilet" type="checkbox" name="name"/>
                 <label for="Toilet">سرویس فرنگی</label><br/>
                  
                   <input id="Curtain" type="checkbox" name="name"/>
                 <label for="Curtain">پرده</label><br/>

                 <input id="Elevator" type="checkbox" name="name"/>
                 <label for="Elevator"> آسانسور</label><br/>

                 <input id="Gym" type="checkbox" name="name"/>
                 <label for="Gym"> سالن ورزشی</label><br/>

                 <input id="Finalword" type="checkbox" name="name"/>
                 <label for="Finalword">بالابر خودرو</label><br/>

                 <input id="Balaberkhodro" type="checkbox" name="name"/>
                 <label for="Balaberkhodro"> آنتن مرکزی</label><br/>

                 <input id="Independentpower" type="checkbox" name="name"/>
                 <label for="Independentpower">برق مستقل</label><br/>

                 <input id="Independenwater" type="checkbox" name="name"/>
                 <label for="Independenwater"> آب مستقل</label><br/>

                 <input id="Khabmostamar" type="checkbox" name="name"/>
                 <label for="Khabmostamar"> خواب مستمر </label><br/>
                
                <input id="Securitydoor" type="checkbox" name="name"/>
                 <label for="Securitydoor">درب ضد سرقت</label><br/>

                 <input id="Storehome" type="checkbox" name="name"/>
                 <label for="Storehome"> انباری</label><br/>

                 <input id="conferencehall" type="checkbox" name="name"/>
                 <label for="conferencehall">  سالن اجتماعات/جلسات</label><br/>

                 <input id="Roofgarden" type="checkbox" name="name"/>
                 <label for="Roofgarden"> روف گاردن</label><br/>

                 <input id="Tamizhome" type="checkbox" name="name"/>
                 <label for="Tamizhome"> تامیز و بازسازی شده </label><br/>

                 <input id="Telephone" type="checkbox" name="name"/>
                 <label for="Telephone">تلفن</label><br/>

                 <input id="Yard" type="checkbox" name="name"/>
                 <label for="Yard"> حیاط</label><br/>
                 </div>
                           :null
                           
                          
                        }
                       
                       </div>
                   </form>
                   
                </div>
                
                </Col>
                <div className="writecomment">
                <p>کامنت ها</p>
                <form>
                    <Row>
                        
                        <Col>
                        
                        <input  id="" name="" type="text" placeholder="نام"/>
                        </Col>
                        <Col>
                        
                        <input  id="" name="" type="text" placeholder=" ایمیل"/>
                        </Col>
                        <input  id="descriptionarea" name="" type="text" placeholder="توضیحات"/>
                        <input  id="submitcomment" name="" type="submit" value="ارسال پیام" />

                    </Row>
                    </form>
                    
                </div>
            </Row><br/>
            {/* <Carouselsimilerhome/> */}
        </Container>
        <Footer/>
        </div>
    )
}

export default Singlehome
