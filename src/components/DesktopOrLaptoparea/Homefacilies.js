import React ,{useState} from 'react'
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

function Homefacilies() {
    const [loby, setloby] = useState(0);
    const [Iphone, setIphone] = useState(0);
    const [Guard, setGuard] = useState(0);
    const [Pool, setPool] = useState(0);
    const [Parking, setParking] = useState(0);
    const [waste, setwaste] = useState(0);
    const [camerasystem, setcamerasystem] = useState(0);
    const [spaceplay, setspaceplay] = useState(0);
    const [terrace, setterrace] = useState(0);
    const [clothwall, setclothwall] = useState(0);
    const [sauna, setsauna] = useState(0);
    const [enterdoor, setenterdoor] = useState(0);
    const [internet, setinternet] = useState(0)
    const [firesystem, setfiresystem] = useState(0);
    const [balabar, setbalabar] = useState(0);
    const [toilet, settoilet] = useState(0);
    const [gym, setgym] = useState(0);
    const [finalword, setfinalword] = useState(0);
    const [Antenna, setAntenna] = useState(0);
    const [independentpower, setindependentpower] = useState(0);
    const [independenwater, setindependenwater] = useState(0);
    const [Khabmostamar, setKhabmostamar] = useState(0);
    const [securitydoor, setsecuritydoor] = useState(0);
    const [storehome, setstorehome] = useState(0);
    const [conferencehall, setconferencehall] = useState(0);
    const [roofgarden, setroofgarden] = useState(0);
    const [tamizhome, settamizhome] = useState(0);
    const [telephone, settelephone] = useState(0);
    const [yard, setyard] = useState(0);
    const [curtain, setcurtain] = useState(0);
    const [elevator, setelevator] = useState(0)
    
    function onchangchecbox(event){
        setloby(1);
    }
    function onchangIphone(event){
        setIphone(1);  
    }
    function onchangGuard(event){
        setGuard(1);  
    }
    function onchangpool(event){
        setPool(1);  
    }

    
    function submitcheckbox(event){
        event.preventDefault();
        console.log(loby,Iphone,Guard,Pool,Parking,waste,camerasystem,spaceplay,terrace,clothwall,
            sauna,enterdoor,internet,firesystem,firesystem,balabar,toilet,gym,finalword,Antenna,Antenna
            ,independentpower,independenwater,independenwater,Khabmostamar,Khabmostamar,securitydoor,
            securitydoor,storehome,conferencehall,roofgarden,tamizhome,telephone,yard,curtain,elevator

            
            
            )
        axios
        .post(
         'http://localhost/testjoin/Upload.php',
        //  qs.stringify({
        //   Typehome:typehome,
        // })
       
        )
       
       
      .then((response) => {
        console.log(response);
        // console.log(response.data);
       
      })

    }
    return (
       
            <form onSubmit={submitcheckbox}>
                <div className="contenthome">
            <div className="Buldingarea">

<input id="lobby" type="checkbox" name="name"  onChange={onchangchecbox}/>
<label for="lobby">لابی</label><br/>

<input id="Iphone" type="checkbox" name="name"  onChange={onchangIphone}/>
<label for="Iphone">آیفون تصویری</label><br/>

<input id="Guard" type="checkbox" name="name" onChange={onchangGuard}/>
<label for="Guard">سرایدار/نگهبان</label><br/>

<input id="Pool" type="checkbox" name="name" onChange={onchangpool} />
<label for="Pool">استخر</label><br/>

<input id="Parking" type="checkbox" name="name" onChange={(event)=>setParking(1)}/>
<label for="Parking">پارکینگ</label><br/>

<input id="Waste" type="checkbox" name="name" onChange={(event)=>setwaste(1)}/>
<label for="Waste">شوتینگ زباله</label><br/>

<input id="Camerasystem" type="checkbox" name="name" onChange={(event)=>setcamerasystem(1)}/>
<label for="Camerasystem">دوربین مداربسته</label><br/>

<input id="spaceplay" type="checkbox" name="name" onChange={(event)=>setspaceplay(1)}/>
<label for="spaceplay">فضای بازی بچه ها</label><br/>

<input id="Terrace" type="checkbox" name="name" onChange={(event)=>setterrace(1)}/>
<label for="Terrace">تراس/بالکن</label><br/>

<input id="Clothwall" type="checkbox" name="name" onChange={(event)=>setclothwall(1)}/>
<label for="Clothwall">کمددیواری</label><br/>

<input id="sauna" type="checkbox" name="name" onChange={(event)=>setsauna(1)}/>
<label for="sauna">سونا/جکوزی</label><br/>

<input id="Enterdoor" type="checkbox" name="name" onChange={(event)=>setenterdoor(1)}/>
<label for="Enterdoor">درب پارکینگ دار/ریموت دار</label><br/>

<input id="Enternet" type="checkbox" name="name" onChange={(event)=>setinternet(1)}/>
<label for="Enternet">اینترنت مرکزی</label><br/>

<input id="Firesystem" type="checkbox" name="name" onChange={(event)=>setfiresystem(1)}/>
<label for="Firesystem">سیستم اعلام حریق</label><br/>

<input id="Finalword" type="checkbox" name="name" onChange={(event)=>setfinalword(1)}/>
<label for="Finalword">تایید پایان کار</label><br/>

<input id="Toilet" type="checkbox" name="name" onChange={(event)=>settoilet(1)}/>
<label for="Toilet">سرویس فرنگی</label><br/>
</div>

<div className="Buldingarea1">
<input id="Curtain" type="checkbox" name="name" onChange={(event)=>setcurtain(1)}/>
<label for="Curtain">پرده</label><br/>

<input id="Elevator" type="checkbox" name="name" onChange={(event)=>setelevator(1)}/>
<label for="Elevator"> آسانسور</label><br/>

<input id="Gym" type="checkbox" name="name" onChange={(event)=>setgym(1)}/>
<label for="Gym"> سالن ورزشی</label><br/>

<input id="balabar" type="checkbox" name="name" onChange={(event)=>setbalabar(1)}/>
<label for="balabar">بالابر خودرو</label><br/>

<input id="Antenna" type="checkbox" name="name" onChange={(event)=>setAntenna(1)}/>
<label for="Antenna"> آنتن مرکزی</label><br/>

<input id="Independentpower" type="checkbox" name="name" onChange={(event)=>setindependentpower(1)}/>
<label for="Independentpower">برق مستقل</label><br/>

<input id="Independenwater" type="checkbox" name="name" onChange={(event)=>setindependenwater(1)}/>
<label for="Independenwater"> آب مستقل</label><br/>

<input id="Khabmostamar" type="checkbox" name="name" onChange={(event)=>setKhabmostamar(1)}/>
<label for="Khabmostamar"> خواب مستمر </label><br/>

<input id="Securitydoor" type="checkbox" name="name" onChange={(event)=>setsecuritydoor(1)}/>
<label for="Securitydoor">درب ضد سرقت</label><br/>

<input id="Storehome" type="checkbox" name="name" onChange={(event)=>setstorehome(1)}/>
<label for="Storehome"> انباری</label><br/>

<input id="conferencehall" type="checkbox" name="name" onChange={(event)=>setconferencehall(1)}/>
<label for="conferencehall">  سالن اجتماعات/جلسات</label><br/>

<input id="Roofgarden" type="checkbox" name="name" onChange={(event)=>setroofgarden(1)}/>
<label for="Roofgarden"> روف گاردن</label><br/>

<input id="Tamizhome" type="checkbox" name="name" onChange={(event)=>settamizhome(1)}/>
<label for="Tamizhome"> تامیز و بازسازی شده </label><br/>

<input id="Telephone" type="checkbox" name="name" onChange={(event)=>settelephone(1)}/>
<label for="Telephone">تلفن</label><br/>

<input id="Yard" type="checkbox" name="name" onChange={(event)=>setyard(1)}/>
<label for="Yard"> حیاط</label><br/>
<input type="submit" value="ثبت اطلاعات"/>
</div>
</div>
            </form>
     
    )
}

export default Homefacilies
