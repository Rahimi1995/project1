import React,{useState}from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Upload from '../../assets/Css/StyleDesktopOrLaptop/Upload.css'
import { FaUserCog,FaAngleLeft } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { MdPageview } from "react-icons/md";
import Navbar from '../DesktopOrLaptoparea/Navbar'
import { func } from 'prop-types';
import axios from 'axios';
import qs, { parse } from 'qs';
import Contextuser from '../../Context/Contextuser'

function Homeinput() {
 

  const [idmalek, setidmalek] = useState('');
  const [name, setname] = useState('');
  const [postalcode, setpostalcode] = useState('');
  const [idhome, setidhome] = useState('');
  const [plaqe, setplaqe] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [phonetelegram, setphonetelegram] = useState('');
  // const [idhome, setidhome] = useState('');
//   const [idlandroad, setidlandroad] = useState('');
  const [iderror, setiderror] = useState(true);
  const [nameerror, setnameerror] = useState(true);
  const [postalcodeE, setpostalcodeE] = useState(true);
  
  const [plaqeerror, setplaqeerror] = useState(true);
  const [phonenumberE, setphonenumberE] = useState(true);
  const [idlandroadE, setidlandroadE] = useState(true);
  const [phonetelegramE, setphonetelegramE] = useState(true);
  const [idhomeE, setidhomeE] = useState(true);

  function submithome(event){
    event.preventDefault();
    if (name.length==0){
      setnameerror(false)
    }
    if(idmalek.length==0){
        setidlandroadE(false)
    }
    if(postalcode.length==0){
        setpostalcodeE(false)
    }
    
    if(plaqe.length==0){
    setplaqeerror(false)
    }
    if(phonenumber.length==0){
    setphonenumberE(false)
    }
    if(phonetelegram.length==0){
    setphonetelegramE(false)
    }
    if(idhome.length==0){
      setidhomeE(false)
      }
    axios
        .post(
         'http://localhost/testjoin/Upload.php',
         {Idhome:idhome,Name:name,Postalcode:postalcode,Plaque:plaqe,Phonenumber:phonenumber,Phonetelegram:phonetelegram,
        }
        // ,Idlandlord:idmalek
        // ,statusdocument:statusdocument ,Framehome:SkeletonHome
        )
       
       
      .then((response) => {
        // console.log(response);
        console.log((response.data));
        console.log((response.data.Name));
       
      })
}

function changename(event){
    setname(event.target.value)
   }
   function changepostalcode(event){
    setpostalcode(event.target.value)
   }
   function changeidhome(event){
    setidhome(event.target.value)
   }
   function changeplaqe (event){
    setplaqe(event.target.value)
   }
   function changephone(event){
    setphonenumber(event.target.value)
   }
   function changeidmalek(event){
    setidmalek(event.target.value)
   }
   function changetelegram(event){
   setphonetelegram(event.target.value)
   }
   function changeidhome(event){
    setidhome(event.target.value)
    }
   

    return (
     
                   
                   <form onSubmit={submithome}>
                   <div className="contenthome">
                   <div className="personarea">
                  <div>
                   <label for="name">نام و نام خانوادگی مالک
                   <br/>
                   <input id="name" type="text" name="name" value={name} onChange={changename}/>
                   </label>
                   <br/>
                   </div><br/><br/><br/>
                   <div>
                   {!nameerror?<div className="Error">
                       <p> وارد کردن نام و نام خانوادگی مالک الزامی می باشد</p>
                       </div>:null
                    }
                  </div>
                  
                  
                   {/* <label for="idmalek">کد مالک
                   <br/>
                   <input id="idmalek" type="text" name="idmalek" value={idmalek} onChange={changeidmalek}/> </label> 
                   <br/>
                   <br/><br/><br/>
                   {!idlandroadE?<div className="Error"><p>وارد کردن کد مالک الزامی می باشد</p></div>:null} */}
                   <label for="idhome">کد ملک
                   <br/>
                   <input id="idhome" type="text" name="idhome" value={idhome} onChange={changeidhome}/> </label> 
                   <br/>
                   <br/><br/><br/>
                   {!idhomeE?<div className="Error"><p>وارد کردن کد ملک الزامی می باشد</p></div>:null}
                   <label for="phonenumber">شماره تماس
                   <br/>

                   <input id="phonenumber" type="text" name="phonenumber" value={phonenumber} onChange={changephone}/></label> 
                   <br/>
                    <br/><br/><br/>
                   {!phonenumberE?<div className="Error"><p> وارد کردن شماره تماس الزامی می باشد</p></div>:null
                    }
                   </div>
                  
                  
                   <div className="personareat">
                   <label for="postalcode">کد پستی
                 <br/>
                 <input id="postalcode" type="text" name="postalcode" value={postalcode} onChange={changepostalcode}/></label>
                 <br/>
                 <br/><br/><br/>
                 {!postalcodeE?<div className="Error"><p> وارد کردن کد پستی الزامی می باشد</p></div>:null
                    }
                 <label for="idrecord">پلاک ثبتی اصلی
                 <br/>
                 <input id="idrecord" type="text" name="idrecord"  value={plaqe} onChange={changeplaqe}/></label> 
                 <br/>
                 <br/><br/><br/>
                 {!plaqeerror?<div className="Error"><p> وارد کردن پلاک ثبتی اصلی الزامی می باشد</p></div>:null
                    }
                 <label for="telegramnumber">شماره تلگرام
                 <br/>
                 <input id="telegramnumber" type="text" name="telegramnumber" value={phonetelegram} onChange={changetelegram}/></label> 
                 <br/>
                 <br/><br/><br/>
                 {!phonetelegramE?<div className="Error"><p> وارد کردن شماره تلگرام الزامی می باشد</p></div>:null
                    }
                <input type="submit" value="ثبت اطلاعات" name="submithome"/>
                {/* <button type="button" onClick={submithome} >ثبت اطلاعات</button> */}
                   </div>
                   </div>
                   </form>
               
                
    )
}

export default Homeinput
