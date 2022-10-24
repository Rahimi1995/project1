import React from 'react'
import { FaBars } from 'react-icons/fa';

function Buttonhome() {
    const onClick=()=>{
        var btnheader=document.querySelectorAll('.btnheader')[0];
        var modal=document.querySelectorAll('.modal')[0];
        btnheader.onClick=function () {
            modal.style.display='block';
            modal.style.display='block';
            
        }
      
       }
    return (
        <div>
        <button className="btnheader" onClick={onClick} type='button' > <FaBars/></button>
        <div className="modal">
           <form>
             
               <label for="modalname">نام کاربری خود را وارد کنید</label>
                <input  type="text" id="modalname" name="modalname"></input>
                <br/>
               <label  for="modalpass">پسورد خود را وارد کنید</label>
               <input type="password" id="modalpass" name="modalpass"></input>
               <input type="submit" value="ورود"/>
               
           </form>
        </div>
        </div>


    )
}

export default Buttonhome
