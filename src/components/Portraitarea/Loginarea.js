import React,{useState} from 'react'
import Login from '../assets/Css/Login.css'
import { IoIosClose } from "react-icons/io";


function Loginarea() {
    const style={
        fontSize:"0.95rem"
    };
    const stylebutton={
        
        width: "2.5vw",
        height:"2.5vw"
    };
    const[show,setShow]=useState(true);
    function onclick(){
        setShow(false);
    
    }
    return (
        <div>
        {
            show?
            <div className="loginarea">
            <div className="loginform">
                {/* <div className="closearea"> */}
                   
                  
                {/* </div> */}
                <div className="logintext">
                <button onClick={onclick}>
                    <IoIosClose style={stylebutton} />
                    </button>
                <h2>Sign in</h2>
                
                </div>
                <div className="loginrem">
                    <form>
                    <label for="loginname">نام کاربری:
                    <br/><input id="loginname"  name="loginname" type="text" placeholder="نام کاربری را وارد کنید"/></label>
                    <br/>
                    <label for="loginpas">پسورد:
                    <br/><input id="loginpas" name="loginpas" type="password" placeholder="پسورد"/>
                    </label><br/>
                    <div className="remember">
                    <input id="loginremember" type="checkbox" name="loginremember" style={{margin:"5px"}}/>
                    <label for="loginremember" style={style}>من را به خاطر بسپار</label>
                    <a href="">فراموشی رمز</a>
                    <br/>
                    </div>
                
                    <input id="loginenter" name="loginenter" type="submit" value="login"/>


                    </form>
                </div>
            </div>
        </div>
            :null
        }
        </div>
        
    )
}

export default Loginarea
