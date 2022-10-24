import React,{useState} from 'react'
import {Container,Row,Col,ProgressBar} from 'react-bootstrap'
import person from '../../assets/images/person.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Upload from '../../assets/Css/StyleDesktopOrLaptop/Upload.css'
import { FaUserCog,FaAngleLeft } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { MdPageview } from "react-icons/md";
import Navbar from '../DesktopOrLaptoparea/Navbar'
import { func } from 'prop-types';
import qs from 'qs';
import axiosInstance from '../DesktopOrLaptoparea/axios'
function Homeupload() {
    const [imgupload, setimgupload] = useState('');
    const [fileupload, setfileupload] = useState('');
    const [imguploadE, setimguploadE] = useState(true);
    const [fileuploadE, setfileuploadE] = useState(true);

    const [imgprogress, setimgprogress] = useState(0);
    const [fileprogress, setfileprogress] = useState(0);
    function changeimg(event) {
        setimgupload(event.target.files[0])
       
        
    }
    function changefile(event) {
        setfileupload(event.target.files)
    
    }

   
    function submitimg(event) {
        event.preventDefault();
        console.log(imgupload.type)
        if(imgupload.length==0){
            setimguploadE(false)
        }
        
        if(imgupload.type=="image/jpeg" || imgupload.type=="image/jpg"){
            let formData = new FormData()
            formData.append("file", imgupload)
            formData.append("file", imgupload[0])
            axiosInstance.post("http://localhost/testjoin/upload.php", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              onUploadProgress: data => {
                setimgprogress(Math.round((100 * data.loaded) / data.total))
              },
            })
            
        }
        
        
    }


    function submitfile(event) {
        event.preventDefault();
        console.log(fileupload)

        if(fileupload.length==0){
            setfileuploadE(false)
        }
      
        if(fileupload[0].type=="application/x-zip-compressed" ){
            let formData = new FormData()
            formData.append("file", fileupload)
            formData.append("file", fileupload[0])
            console.log(formData);
            axiosInstance.post("http://localhost/testjoin/upload.php", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              onUploadProgress: data => {
                setfileprogress(Math.round((100 * data.loaded) / data.total))
              },
            }) .then((response) => {
              console.log(response);
              // console.log(response.data);
             
            })
   
            
            
        }
        
        
    }

    return (
       <div>
                <form onSubmit={submitimg}>
        
                    <input type="file" onChange={changeimg}/>
                    <button type="submit" >Upload img</button>
                    {!imguploadE?<div className="Error"><p>وارد کردن تصویر پروژه الزامی می باشد</p></div>:null}
                    <ProgressBar animated  now={imgprogress} label={`${imgprogress}%`} />
                </form>
                <form onSubmit={submitfile}>
                    <input type="file" onChange={changefile}/>
                    <button type="submit" >Upload file</button>
                    {!fileuploadE?<div className="Error"><p>وارد کردن فایل پروژه الزامی می باشد</p></div>:null}
                    <ProgressBar animated  now={fileprogress} label={`${fileprogress}%`} />
                   
               
                </form>
        </div>
    )
}

export default Homeupload


