import React,{useState} from 'react'
import Login from '../../assets/Css/StyleDesktopOrLaptop/Login.css'
import { IoIosClose } from "react-icons/io";
import axios from 'axios';
import qs from 'qs'
import { Alert } from 'bootstrap';
import {Redirect} from "react-router-dom"
import Addproject from './Addproject';
import { useHistory } from "react-router-dom";



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
    let history = useHistory();
    const [Username, setUsername] = useState('')
    const [Passwords, setPasswords] = useState('')
    const [UsernameErr, setUsernameErr] = useState(true)
    const [PasswordsErr, setPasswordsErr] = useState(true)
    const [Auto, setAuto] = useState(false)
    function submithandle (event){
        event.preventDefault();
        const UsernameErr={};
        const PasswordsErr={};
        if(Username.length==0){
            setUsernameErr(false);
        }
        if(Passwords.length==0){
            setPasswordsErr(false);
        }
        axios
        .post(
         'http://localhost/testjoin/index.php',
         qs.stringify({Username: Username,Passwords:Passwords})
        )
        
       
     
      .then((response) => {
        console.log(response);
        console.log(response.data)
       
            if(response.data=="Success"){
                setAuto(true);
                alert('کاربر وجود دارد')
                // if(!Auto){
                //      <Redirect to='/Addproject'/>
                // }
                
            }
       
        
      })
      .catch((error) => {
        console.log(error.response);
      });
    
       }
    
    // submithandle=(event)=>{}
    function changehandleU(event){
        setUsername(event.target.value)
       
    }
     
    // changehandleU=(event)=>{}
    function changehandleP(event){
        setPasswords(event.target.value)
    }

    function handleClick() {
        history.push("/Addproject");
      }
    
    // changehandleP=(event)=>{}
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
                    <form onSubmit={submithandle}>
                    <label for="loginname">نام کاربری:
                    <br/><input id="loginname"  name="loginname" type="text" onChange={changehandleU} value={Username} placeholder="نام کاربری را وارد کنید"/></label>
                    {!UsernameErr?<p>نام کاربری الزامی می باشد</p>:null
                    }
                    <div>{Username}</div>
                    <br/>
                    <label for="loginpas">پسورد:
                    <br/><input id="loginpas" name="loginpas" type="password" onChange={changehandleP} value={Passwords}
                    placeholder="پسورد"/>
                    </label><br/>
                    {!PasswordsErr?<p>نام کاربری الزامی می باشد</p>:null
                    }
                    <div className="remember">
                    <input id="loginremember" type="checkbox" name="loginremember" style={{margin:"5px"}}/>
                    <label for="loginremember" style={style}>من را به خاطر بسپار</label>
                    <a href="">فراموشی رمز</a>
                    <br/>
                    </div>
                    {/* <button type="submit" id="loginenter"   name="loginenter">Login</button><br/> */}
                    <input id="loginenter" name="loginenter" onclick={handleClick} type="submit" value="login"/>
                    
                   


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
