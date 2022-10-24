
import React from 'react'
import { FaUserCog,FaAngleLeft } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { MdPageview } from "react-icons/md";
import person from '../../assets/images/person.jpg'
import Upload from '../../assets/Css/StyleDesktopOrLaptop/Upload.css'
import Styleindex from '../../assets/Css/StyleDesktopOrLaptop/Styleindex.css'


function Navbar() {
    const style={
        color:"#ffffff" ,
        position:"absolute",
        left:"1vw" ,
        // padding:"0.8vw",
        bottom:"0.6vw"
        
       };
    return (
        <div className="sidarea">
           <div className="imgearea">
               <img src={person} />
               <br/>
               <p>نام و نام خانوادگی: امیررضائی</p>
           </div>
           <div className="navarea">
              <nav>
                <ul>
               <li>
                <div className="naveoption">
                  <a href=""><FaUserCog />     &nbsp;    مدیریت </a>
                  <FaAngleLeft style={style}
                  />
                </div>
                <ul>
                  <li>
                  <div className="naveoption">
                  <a href="">افزودن پروژه
                  </a>
                </div>
                  </li>
                  <li>
                  <div className="naveoption">
                  <a href="">افزودن دسته
                  </a>
                </div>
                  </li>
                  <li>
                  <div className="naveoption">
                  <a href="">نمایش پروژه ها
                  </a>
                </div>
                  </li>
                </ul>
                </li>
                <li>
                <div className="naveoption">
                  <a href=""><MdPageview/>     &nbsp;    نمایش
                  </a>
                  <FaAngleLeft style={style}
                  />
                </div>
                <ul>
                  <li>
                  <div className="naveoption">
                  <a href="">نمایش پروژه های 360
                  </a>
                </div>
                  </li>
                  <li>
                  <div className="naveoption">
                  <a href=""> نمایش لیست پروژه ها
                  </a>
                </div>
                  </li>
                </ul>
                </li>
                <li>
                <div className="naveoption">
                  <a href=""><HiHome/>      &nbsp;   بازگشت به صفحه اصلی
                  </a>
                  
                </div>
                </li>
                </ul>
              </nav>
           </div>
           
           </div>
       
       
    )
}

export default Navbar
