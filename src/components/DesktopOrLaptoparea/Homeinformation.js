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

function Homeinformation() {
    const [price, setprice] = useState("");
    const [numberfloor, setnumberfloor] = useState("");
    const [oldbulding, setoldbulding] = useState("");
    const [areahome, setareahome] = useState("");
    const [floorbulding, setfloorbulding] = useState("");
    const [view, setview] = useState("");
    const [numberroom, setnumberroom] = useState("");
    const [numberunite, setnumberunite] = useState("");
    const [address, setaddress] = useState("");
    const [description, setdescription] = useState("");

// ============== error state

const [priceE, setpriceE] = useState(true);
const [numberfloorE, setnumberfloorE] = useState(true);
const [oldbuldingE, setoldbuldingE] = useState(true);
const [areahomeE, setareahomeE] = useState(true);
const [floorbuldingE, setfloorbuldingE] = useState(true);
const [viewE, setviewE] = useState(true);
const [numberroomE, setnumberroomE] = useState(true);
const [numberuniteE, setnumberuniteE] = useState(true);
const [addressE, setaddressE] = useState(true);
const [descriptionE, setdescriptionE] = useState(true);

// ================ function
function submitprice(event){
    event.preventDefault();
    if(price.length==0){
        setpriceE(false)
    }
    if(numberfloor.length==0){
        setnumberfloorE(false)
    }
    if(oldbulding.length==0){
        setoldbuldingE(false)
    }
    if(areahome.length==0){
        setareahomeE(false)
    }
    if(floorbulding.length==0){
        setfloorbuldingE(false)
    }
    if(view.length==0){
        setviewE(false)
    }
    if(numberroom.length==0){
        setnumberroomE(false)
    }
    if(numberunite.length==0){
        setnumberuniteE(false)
    }
    if(address.length==0){
        setaddressE(false)
    }
    if(description.length==0){
        setdescriptionE(false)
    }

    axios
        .post(
         'http://localhost/testjoin/Upload.php',
         qs.stringify({
          
        })
        
        )
       
       
      .then((response) => {
        console.log(response);
        // console.log(response.data);
       
      })
  
}

    return (
        
           <form onSubmit={submitprice}>
               <div className="contentarea">
               <div className="buldinginformation">

                <label for="Mablagh"> مبلغ کل
                <br/>
                <input id="Mablagh" type="text" name="Mablagh" value={price} onChange={(event)=>setprice(event.target.value)}/></label><br/>
                <br/><br/><br/>
                   {!priceE?<div className="Error"><p>وارد کردن قیمت الزامی می باشد</p></div>:null}

                <label for="Numberfloor">تعداد کل طبقات
                <br/>
                <input id="Numberfloor" type="text" name="Numberfloor" value={numberfloor} onChange={(event)=>setnumberfloor(event.target.value)}/> </label> 
                <br/>
                <br/><br/><br/>
                   {!numberfloorE?<div className="Error"><p>وارد کردن تعداد طبقات الزامی می باشد</p></div>:null}
                <label for="oldbulding">عمر ساختمان
                <br/>
                <input id="oldbulding" type="text" name="oldbulding" value={oldbulding} onChange={(event)=>setoldbulding(event.target.value)}/> </label> 
                <br/>
                <br/><br/><br/>
                   {!oldbuldingE?<div className="Error"><p>وارد کردن عمر ساختمان الزامی می باشد</p></div>:null}
                <label for="Metrazh">متراژ
                <br/>
                <input id="Metrazh" type="text" name="Metrazh" value={areahome} onChange={(event)=>setareahome(event.target.value)}/></label>
                 <br/>
               <br/><br/><br/>
                {!areahomeE?<div className="Error"><p>وارد کردن متراژ ساختمان الزامی می باشد</p></div>:null}
                </div>
                

                <div className="buldinginformation1">
                <label for="Floorbulding">طبقه ملک مذکور
                <br/>
                <input id="Floorbulding" type="text" name="Floorbulding" value={floorbulding} onChange={(event)=>setfloorbulding(event.target.value)}/></label>
                <br/>
                <br/><br/><br/>
                   {!floorbuldingE?<div className="Error"><p>وارد کردن طبقه ساختمان الزامی می باشد</p></div>:null}
                <label for="Nama">نما
                <br/>
                <input id="Nama" type="text" name="Nama" value={view} onChange={(event)=>setview(event.target.value)}/></label>
                <br/>
                <br/><br/><br/>
                   {!viewE?<div className="Error"><p>وارد کردن نما ساختمان الزامی می باشد</p></div>:null}
                <label for="Numberroom">تعداد خواب
                <br/>
                <input id="Numberroom" type="text" name="Numberroom" value={numberroom} onChange={(event)=>setnumberroom(event.target.value)}/> </label> 
                <br/>
                <br/><br/><br/>
                   {!numberroomE?<div className="Error"><p>وارد کردن تعداد اتاق ها الزامی می باشد</p></div>:null}
                <label for="Numberunite">تعداد واحد در طبقه مذکور
                <br/>
                <input id="Numberunite" type="text" name="Numberunite" value={numberunite} onChange={(event)=>setnumberunite(event.target.value)}/> </label> 
                <br/>
                <br/><br/><br/>
                   {!numberuniteE?<div className="Error"><p>وارد کردن تعداد واحد در هر طبقه الزامی می باشد</p></div>:null}
                </div>

                <div className="Locationareahome">

                 <label for="Address"> آدرس<br/>
                 <input id="Address" type="text" name="Address" value={address} onChange={(event)=>setaddress(event.target.value)}/></label><br/>
                 <br/><br/><br/>
                   {!addressE?<div className="Error"><p>وارد کردن طبقه ساختمان الزامی می باشد</p></div>:null}
                 <label for="Description">توضیحات
                 <textarea  id="Description"  name="Description" value={description} onChange={(event)=>setdescription(event.target.value)}></textarea>
                 </label>
                 <br/><br/><br/>
                   {!descriptionE?<div className="Error"><p>وارد کردن توضیحات مربوط به هر ساختمان الزامی می باشد</p></div>:null}
                   <br/>
                   <input value="ثبت اطلاعات" type="submit"/>
                 </div>
                 </div>

              
           </form>
        
    )
}

export default Homeinformation
