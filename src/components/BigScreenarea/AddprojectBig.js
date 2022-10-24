import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import person from '../../assets/images/person.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Upload from '../../assets/Css/StyleBigScreen/Upload.css'
import { FaUserCog,FaAngleLeft } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { MdPageview } from "react-icons/md";
import NavbarBig from '../../components/BigScreenarea/NavbarBig'

function Addproject() {
 
  return (
    
 
   <Container fluid>
       <Row>
           <Col lg={2}>
           <NavbarBig/>
           </Col >
           
         
           {/* <Col lg={5}>sm=true
           <div className="contentarea">
             <form>
             <div className="personarea">
                 <label for="name">نام و نام خانوادگی مالک</label>
                 <br/>
                 <input id="name" type="text" name="name"/><br/>
                 <label for="idmalek">کد مالک</label>
                 <br/>
                 <input id="idmalek" type="text" name="idmalek"/>  
                 <br/>
                 <label for="phonenumber">شماره تماس</label>
                 <br/>
                 <input id="phonenumber" type="text" name="phonenumber"/>  
                 <br/>
                 </div>
             </form>
           </div>
           </Col>
           <Col lg={5}>sm=true
           <div className="contentarea">
             <form>
             <div className="personareat">
                 <label for="postalcode">کد پستی</label>
                 <br/>
                 <input id="postalcode" type="text" name="postalcode"/>  
                 <br/>
                 <label for="idrecord">پلاک ثبتی اصلی</label>
                 <br/>
                 <input id="idrecord" type="text" name="idrecord"/>  
                 <br/>
                 <label for="telegramnumber">شماره تلگرام</label>
                 <br/>
                 <input id="telegramnumber" type="text" name="telegramnumber"/>  
                 <br/>
                 </div>

             </form>
           </div>
           </Col> */}

          
               <Col lg={10}>
               
               <form>
               <div className="contentarea">
               <div className="fdfdfddddddd" style={{width:"80vw",background:"#edeeee"}}>
                 <p>اطلاعات مالک</p>
                 </div>
              
                 
                 <div className="personarea">
                 <label for="name">نام و نام خانوادگی مالک
                 <br/>
                 <input id="name" type="text" name="name"/>
                 </label><br/>
                 <label for="idmalek">کد مالک
                 <br/>
                 <input id="idmalek" type="text" name="idmalek"/> </label> 
                 <br/>
                 <label for="phonenumber">شماره تماس
                 <br/>
                 <input id="phonenumber" type="text" name="phonenumber"/></label> 
                 <br/>
                 </div>
                 <div className="personareat">
                 <label for="postalcode">کد پستی
                 <br/>
                 <input id="postalcode" type="text" name="postalcode"/></label>
                 <br/>
                 <label for="idrecord">پلاک ثبتی اصلی
                 <br/>
                 <input id="idrecord" type="text" name="idrecord"/></label> 
                 <br/>
                 <label for="telegramnumber">شماره تلگرام
                 <br/>
                 <input id="telegramnumber" type="text" name="telegramnumber"/></label> 
                 <br/>
                 </div>

                 <div className="fdfdfddddddd" style={{width:"80vw",background:"#edeeee"}}>
                 <p>اطلاعات ملک</p>
                 </div>
                 <div className="locarea">
                 <label for="typehome">نوع ملک
                 <br/>
                 <select id="typehome">
                 <option value="aparteman">آپارتمان</option>
                 <option value="vilaei">ویلایی</option>
                 <option value="zamin">زمین</option>
                 <option value="kolangi">کلنگی</option>
                 <option value="garden">باغ و باغچه</option>
                 <option value="store">انبار و سوله</option>
                </select></label><br/>

                <label for="typead">نوع آگهی<br/>
                 <select id="typead">
                 <option value="froosh">فروشی</option>
                 <option value="ejare">اجاره</option>
                 <option value="rahn">رهن</option>
                 <option value="sarghofli">سرقفلی</option>
                 <option value="peshfroosh">پیش فروش</option>
                </select></label><br/>

                <label for="typeuser">نوع کاربری<br/>
                 <select id="typead">
                 <option value="Maskooni">مسکونی</option>
                 <option value="Edari">اداری</option>
                 <option value="Tegari">تجاری</option>
                 <option value="Amoozeshi">آموزشی</option>
                 <option value="Darmani">درمانی</option>
                </select></label><br/>

                <label for="locationhome">موقعیت<br/>
                 <select id="locationhome">
                 <option value="North">شمالی</option>
                 <option value="Sorth">جنوبی</option>
                </select></label><br/>

                <label for="Cupboards">کابینت<br/>
                 <select id="Cupboards">
                 <option value="Ganvanize">گالوانیزه</option>
                 <option value="EdDiF">ام دی اف</option>
                 <option value="Allwood">تمام چوب</option>
                </select></label><br/>
                
               
               
                <label for="floorcoverting">کفپوش<br/>
                 <select id="floorcoverting">
                 <option value="Mozaik">موزائیک</option>
                 <option value="Moket">موکت</option>
                 <option value="Seramik">سرامیک</option>
                 <option value="Parket">پارکت</option>
                 <option value="Stone">سنگ</option>
                 <option value="Wood">چوب</option>
                </select></label><br/>
                </div>

                <div className="localarea1">
                <label for="HCsystem">سیستم گرمایشی و سرمایشی<br/>
                 <select id="HCsystem">
                 <option value="Espilet">کولر اسپلت</option>
                 <option value="Systemchot">سیستم گرمایشی مرکزی</option>
                 <option value="SystemCool">سیستم سرمایشی مرکزی</option>
                 <option value="water heater">آب گرم کن</option>
                </select></label><br/>

                <label for="statusHome">وضعیت سکونت<br/>
                 <select id="statusHome">
                 <option value="Empty">تخلیه</option>
                 <option value="Tenant">مستاجر</option>
                </select></label><br/>

                <label for="typedocument">نوع سند<br/>
                 <select id="typedocument">
                 <option value="Takbark">تک برگ</option>
                 <option value="Mangooledar">منگوله دار</option>
                 <option value="Withoutdoc">فاقد سند</option>
                </select></label><br/>

                <label for="statusdocument">نوع سند<br/>
                 <select id="statusdocument">
                 <option value="Freedoc">آزاد</option>
                 <option value="Rahnbank"> رهن بانک</option>
                 <option value="RahnMaraje"> رهن ساید مراجع</option>
                </select></label><br/>
             
            
                <label for="SkeletonHome">نوع سند<br/>
                 <select id="SkeletonHome">
                 <option value="MasBanaei">مصالح بنای</option>
                 <option value="Metalskeleton"> فلزی </option>
                 <option value="Betonskeleton">بتنی</option>
                 <option value="Sazeskeleton">سازه سبک</option>
                </select></label><br/>
                </div>
            
                <div className="fdfdfddddddd" style={{width:"80vw",background:"#edeeee"}}>
                 <p>امکانات ملک</p>
                 </div>
                 <div className="Buldingarea">

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
                 </div>

                <div className="Buldingarea1">
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

                 <div className="fdfdfddddddd" style={{width:"80vw",background:"#edeeee"}}>
                 <p>اطلاعات قیمت ملک</p>
                 </div>
                 <div className="buldinginformation">

                 <label for="Mablagh"> مبلغ کل
                 <br/>
                 <input id="Mablagh" type="text" name="Mablagh"/></label><br/>

                 <label for="Numberfloor">تعداد کل طبقات
                 <br/>
                 <input id="Numberfloor" type="text" name="Numberfloor"/> </label> 
                 <br/>
                 <label for="oldbulding">عمر ساختمان
                 <br/>
                 <input id="oldbulding" type="text" name="oldbulding"/> </label> 
                 <br/>
                 <label for="Metrazh">متراژ
                 <br/>
                 <input id="Metrazh" type="text" name="Metrazh"/></label>
                 </div>
                 <br/>
                 <div className="buldinginformation1">
                 <label for="Floorbulding">طبقه ملک مذکور
                 <br/>
                 <input id="Floorbulding" type="text" name="Floorbulding"/></label>
                 <br/>
                 <label for="Nama">نما
                 <br/>
                 <input id="Nama" type="text" name="Nama"/></label>
                 <br/>
                 <label for="Numberroom">تعداد خواب
                 <br/>
                 <input id="Numberroom" type="text" name="Numberroom"/> </label> 
                 <br/>
                 <label for="Numberunite">تعداد واحد در طبقه مذکور
                 <br/>
                 <input id="Numberunite" type="text" name="Numberunite"/> </label> 
                 <br/>
                 </div>
                 </div> 
               
                 <div className="fdfdfddddddd" style={{width:"80vw",background:"#edeeee"}}>
                 <p>موقعیت ملک</p>
                 </div>

                 <div className="locationarea">
                 <label for="Address"> آدرس<br/>
                 <input id="Address" type="text" name="Address"/></label><br/>
                 <label for="Description">توضیحات
                 <input id="Description" type="text" name="Description"/></label>  
                 </div>
                 
                 <div className="fdfdfddddddd" >
                 <p>آپلود فایل ملک</p>
                 </div>
                 <div className="uploadarea">
                 <p>sdfsdfsdfsdf</p>
                 </div>
                 <input id="" name="" type="submit"/>

                
           </form>
         
      

          </Col>
       </Row>
      
   </Container>


  )
}

export default Addproject




