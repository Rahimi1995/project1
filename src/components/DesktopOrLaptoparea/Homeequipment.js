import React,{useState} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import person from '../../assets/images/person.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Upload from '../../assets/Css/StyleDesktopOrLaptop/Upload.css'
import { FaUserCog,FaAngleLeft } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { MdPageview } from "react-icons/md";
import Navbar from '../DesktopOrLaptoparea/Navbar'
import { func } from 'prop-types';
import axios from 'axios';
import qs from 'qs';

function Homeequipment() {

    const [typehome, settypehome] = useState('آپارتمان');
    const [typeAD, settypeAD] = useState('فروشی');
    const [typeuser, settypeuser] = useState('مسکونی');
    const [locationhome, setlocationhome] = useState('شمالی');
    const [cupboards, setcupboards] = useState('گالوانیزه');
    const [floorcoverting, setfloorcoverting] = useState('موزائیک');
    const [HCsystem, setHCsystem] = useState('کولراسپیلت');
    const [statusHome, setstatusHome] = useState('تخلیه');
    const [typedocument, settypedocument] = useState('تک برگ');
    const [statusdocument, setstatusdocument] = useState('آزاد');
    const [SkeletonHome, setSkeletonHome] = useState('مصالح بنایی');

    // const [typehomeE, settypehomeE] = useState(true);
    // const [typeADerror, settypeADerror] = useState(true);
    // const [typeuserE, settypeuserE] = useState(true);
    // const [locationhomeE, setlocationhomeE] = useState(true);
    // const [cupboardsE, setcupboardsE] = useState(true);
    // const [floorcovertingE, setfloorcovertingE] = useState(true);
    // const [HCsystemE, setHCsystemE] = useState(true);
    // const [statusHomeE, setstatusHomeE] = useState(true);
    // const [typedocumentE, settypedocumentE] = useState(true);
    // const [statusdocumentE, setstatusdocumentE] = useState(true);
    // const [SkeletonHomeE, setSkeletonHomeE] = useState(true);

    function submitequipment(event){
        event.preventDefault();
      
        // if (typehome.length==0){
        //   settypehomeE(false)
        // }
        // if (typeAD.length==0){
        //   settypeADerror(false)
        // }
        // if(typeuser.length==0){
        //   settypeuserE(false)
        // }
        // if (locationhome.length==0){
        //   setlocationhomeE(false)
        // }
        // if (cupboards.length==0){
        //   setcupboardsE(false)
        // }
        // if (floorcoverting.length==0){
        //   setfloorcovertingE(false)
        // }
        // if(HCsystem.length==0){
        //   setHCsystemE(false);
        // }
        // if(statusHome.length==0){
        //   setstatusHomeE(false)
        // }
        // if(typedocument.length==0){
        //   settypedocumentE(false)
        // }
        // if(statusdocument.length==0){
        //   setstatusdocumentE(false)
        // }
        // if(SkeletonHome.length==0){
        //   setSkeletonHomeE(false)
        // }
        axios
        .post(
         'http://localhost/testjoin/Upload.php',
         ({
          Typehome:typehome,TypeAd:typeAD,Typeuse:typeuser,Location:locationhome,Cupboards:cupboards,Floorcoverting:floorcoverting ,Systemcold:HCsystem,
          Housing:statusHome,Typedocument:typedocument,statusdocument:statusdocument ,Framehome:SkeletonHome
        })
        //
        )
       
       
      .then((response) => {
        console.log(response);
        console.log(response.data);
       
      })
    }
 
    function changetypehome(event){
        settypehome(event.target.value)
      }
      
      function changetypead(event){
        settypeAD(event.target.value)
      }
      
      function changetypeuser(event){
        settypeuser(event.target.value)
      }
      
      function changelocation(event){
        setlocationhome(event.target.value)
      }
      
      function changecupboards(event){
        setcupboards(event.target.value)
      }
      
      function changesetfloor(event){
        setfloorcoverting(event.target.value)
      }
      
      function changeHCsystem(event){
        setHCsystem(event.target.value)
      }
      function changestatusHome(event){
        setstatusHome(event.target.value)
      }
      function changetypedocument(event){
        settypedocument(event.target.value)
      }
      function changestatusdc(event){
        setstatusdocument(event.target.value)
      }
      function changeSkeletonHome(event){
        setSkeletonHome(event.target.value)}
    

    return (
     
                 <form onSubmit={submitequipment}>
                 <div className="contenthome">
                 <div className="locarea">
                   
                 <label for="typehome">نوع ملک
                 <br/>
                 <select id="typehome" value={typehome} onChange={changetypehome}>
                 <option value='آپارتمان'>آپارتمان</option>
                 <option value='ویلایی'>ویلایی</option>
                 <option value='زمین'>زمین</option>
                 <option value='کلنگی'>کلنگی</option>
                 <option value='باغچه'>باغ و باغچه</option>
                 <option value='انبار و سوله'>انبار و سوله</option>
                </select></label><br/>

                <label for="typead">نوع آگهی<br/>
                 <select id="typead" value={typeAD} onChange={changetypead}>
                 <option value='فروشی'>فروشی</option>
                 <option value='اجاره'>اجاره</option>
                 <option value='رهن'>رهن</option>
                 <option value='سرقفلی'>سرقفلی</option>
                 <option value='پیش فروش'>پیش فروش</option>
                </select></label><br/>

                <label for="typeuser">نوع کاربری<br/>
                 <select id="typead" value={typeuser} onChange={changetypeuser}>
                 <option value='مسکونی'>مسکونی</option>
                 <option value='اداری'>اداری</option>
                 <option value='تجاری'>تجاری</option>
                 <option value='آموزشی'>آموزشی</option>
                 <option value='درمانی'>درمانی</option>
                </select></label><br/>

                <label for="locationhome">موقعیت<br/>
                 <select id="locationhome" value={locationhome} onChange={changelocation}>
                 <option value='شمالی'>شمالی</option>
                 <option value='جنوبی'>جنوبی</option>
                </select></label><br/>

                <label for="Cupboards">کابینت<br/>
                 <select id="Cupboards" value={cupboards} onChange={changecupboards}>
                 <option value='گالوانیزه'>گالوانیزه</option>
                 <option value='ام دی اف'>ام دی اف</option>
                 <option value='تمام چوب'>تمام چوب</option>
                </select></label><br/>
                
               
               
                <label for="floorcoverting">کفپوش<br/>
                 <select id="floorcoverting" value={floorcoverting} onChange={changesetfloor}>
                 <option value='موزائیک'>موزائیک</option>
                 <option value='موکت'>موکت</option>
                 <option value='سرامیک'>سرامیک</option>
                 <option value='پارکت'>پارکت</option>
                 <option value='سنگ'>سنگ</option>
                 <option value='چوب'>چوب</option>
                </select></label><br/>
                </div>

                <div className="localarea1">
                <label for="HCsystem">سیستم گرمایشی و سرمایشی<br/>
                 <select id="HCsystem" value={HCsystem} onChange={changeHCsystem}>
                 <option value='کولر اسپیلت'>کولر اسپلت</option>
                 <option value='سیستم گرمایشی مرکزی'>سیستم گرمایشی مرکزی</option>
                 <option value='سیستم سرمایشی مرکزی'>سیستم سرمایشی مرکزی</option>
                 <option value='آب گرم کن'>آب گرم کن</option>
                </select></label><br/>

                <label for="statusHome">وضعیت سکونت<br/>
                 <select id="statusHome" value={statusHome} onChange={changestatusHome}>
                 <option value='تخلیه'>تخلیه</option>
                 <option value='مستاجر'>مستاجر</option>
                </select></label><br/>

                <label for="typedocument">نوع سند<br/>
                 <select id="typedocument" value={typedocument} onChange={changetypedocument}>
                 <option value='تک برگ'>تک برگ</option>
                 <option value='منگوله دار'>منگوله دار</option>
                 <option value='فاقد سند'>فاقد سند</option>
                </select></label><br/>

                <label for="statusdocument">وضعیت سند<br/>
                 <select id="statusdocument" value={statusdocument} onChange={changestatusdc}>
                 <option value='آزاد'>آزاد</option>
                 <option value='رهن بانک'> رهن بانک</option>
                 <option value='رهن سایر مراجع'> رهن ساید مراجع</option>
                </select></label><br/>
             
            
                <label for="SkeletonHome">اسکلت ساختمان<br/>
                 <select id="SkeletonHome" value={SkeletonHome} onChange={changeSkeletonHome}>
                 <option value='مصالح بنایی'>مصالح بنای</option>
                 <option value='فلزی'> فلزی </option>
                 <option value='بتنی'>بتنی</option>
                 <option value='سازه سبک'>سازه سبک</option>
                </select></label><br/>
                </div>
                </div>
                <input type="submit" value="ثبت اطلاعات"/>
                 </form>
           
    )
}

export default Homeequipment
