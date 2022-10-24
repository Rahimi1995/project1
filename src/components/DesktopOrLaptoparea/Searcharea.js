import React,{useState } from 'react'
import { Row,Col,Container} from 'react-bootstrap'
import { AiOutlineSetting } from "react-icons/ai";
import { useSpring, animated } from 'react-spring'
const Searcharea = () => {
  const props = useSpring({ to: { opacity: 1 ,y:18}, config: { duration: 800 }, from: { opacity: 0 ,y:-500 } })
    const[show,setShow]=useState(false);
    function onclick(){
        setShow(true);
        if(show==true){
            setShow(false)
        }
    }
    const [Viewsearch, setViewsearch] = useState(false);
    function onclickbtn(){
      setViewsearch(true);
      if(Viewsearch==true){
        setViewsearch(false)
      }
  }

    return (
        <div className="searcharea-d">
            <Container >
             <Row >
             <Col>
             <form>
                 <div className="formarea-d">
                <input type="text" id="keyword" name="" placeholder='کلمه کلیدی خود را وارد کنید'/>
               
        
                <select name="home" id="home">
                 <option value="Maskooni">مسکونی</option>
                 <option value="Edari">اداری</option>
                 <option value="Tegari">تجاری</option>
                 <option value="Amoozeshi">آموزشی</option>
                 <option value="Darmani">درمانی</option>
                </select>

                <select id="typehome">
                 <option value="aparteman">آپارتمان</option>
                 <option value="vilaei">ویلایی</option>
                 <option value="zamin">زمین</option>
                 <option value="kolangi">کلنگی</option>
                 <option value="garden">باغ و باغچه</option>
                 <option value="store">انبار و سوله</option>
                </select>
               
                
                <input type="submit" value="جستجو"/>
                <button  type="button" onClick={onclick} ><AiOutlineSetting/>پیشرفته</button>
                </div>
                
                {
                 show?
                 
                  
                   <animated.div style={props} className="Advancesearch-d">
                <form>
                  
                <br/><select id="typehome">
                 <option value="aparteman">آپارتمان</option>
                 <option value="vilaei">ویلایی</option>
                 <option value="zamin">زمین</option>
                 <option value="kolangi">کلنگی</option>
                 <option value="garden">باغ و باغچه</option>
                 <option value="store">انبار و سوله</option>
                </select>

               
                 <select id="typead">
                 <option value="froosh">فروشی</option>
                 <option value="ejare">اجاره</option>
                 <option value="rahn">رهن</option>
                 <option value="sarghofli">سرقفلی</option>
                 <option value="peshfroosh">پیش فروش</option>
                </select>

                
                 <select id="typead">
                 <option value="Maskooni">مسکونی</option>
                 <option value="Edari">اداری</option>
                 <option value="Tegari">تجاری</option>
                 <option value="Amoozeshi">آموزشی</option>
                 <option value="Darmani">درمانی</option>
                </select>
               

               
                 <select id="locationhome">
                 <option value="North">شمالی</option>
                 <option value="Sorth">جنوبی</option>
                </select><br/>

              
                 <select id="Cupboards">
                 <option value="Ganvanize">گالوانیزه</option>
                 <option value="EdDiF">ام دی اف</option>
                 <option value="Allwood">تمام چوب</option>
                </select>
                
               
               
              
                 <select id="floorcoverting">
                 <option value="Mozaik">موزائیک</option>
                 <option value="Moket">موکت</option>
                 <option value="Seramik">سرامیک</option>
                 <option value="Parket">پارکت</option>
                 <option value="Stone">سنگ</option>
                 <option value="Wood">چوب</option>
                </select>
             
               

             
               
                 <select id="HCsystem">
                 <option value="Espilet">کولر اسپلت</option>
                 <option value="Systemchot">سیستم گرمایشی مرکزی</option>
                 <option value="SystemCool">سیستم سرمایشی مرکزی</option>
                 <option value="water heater">آب گرم کن</option>
                </select>

               
                 <select id="statusHome">
                 <option value="Empty">تخلیه</option>
                 <option value="Tenant">مستاجر</option>
                </select><br/>

              
                 <select id="typedocument">
                 <option value="Takbark">تک برگ</option>
                 <option value="Mangooledar">منگوله دار</option>
                 <option value="Withoutdoc">فاقد سند</option>
                </select>
                
                
                 <select id="statusdocument">
                 <option value="Freedoc">آزاد</option>
                 <option value="Rahnbank"> رهن بانک</option>
                 <option value="RahnMaraje"> رهن ساید مراجع</option>
                </select>
             
            
               
                 <select id="SkeletonHome">
                 <option value="MasBanaei">مصالح بنای</option>
                 <option value="Metalskeleton"> فلزی </option>
                 <option value="Betonskeleton">بتنی</option>
                 <option value="Sazeskeleton">سازه سبک</option>
                </select> 
                
               
               <button type="button" onClick={onclickbtn} >Home Facilities </button>
               {
                   Viewsearch?<div className="Facilities">
                   <div>
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
                   </div>

                   <div>
                   <input id="Terrace" type="checkbox" name="name"/>
                 <label for="Terrace">تراس/بالکن</label><br/>
                 
                 <input id="Clothwall" type="checkbox" name="name"/>
                 <label for="Clothwall">کمددیواری</label><br/>
              
                 <input id="Clothwall" type="checkbox" name="name"/>
                 <label for="Clothwall">سونا/جکوزی</label><br/>

                 <input id="Enterdoor" type="checkbox" name="name"/>
                 <label for="Enterdoor">درب پارکینگدار/ریموتدار</label><br/>

                 <input id="Enternet" type="checkbox" name="name"/>
                 <label for="Enternet">اینترنت مرکزی</label><br/>

                 <input id="Firesystem" type="checkbox" name="name"/>
                 <label for="Firesystem">سیستم اعلام حریق</label><br/>

                 <input id="Finalword" type="checkbox" name="name"/>
                 <label for="Finalword">تایید پایان کار</label><br/>

                 <input id="Toilet" type="checkbox" name="name"/>
                 <label for="Toilet">سرویس فرنگی</label><br/>
                   </div>

                   <div>
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
                   </div>

                   <div>
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

                </div> :null
               }
                </form> 
                 </animated.div>
                

                 
                 :null

                }


            </form>
             </Col>
             </Row>
             </Container>
        </div>
    )
}
export default Searcharea



