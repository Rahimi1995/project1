import React from 'react'
import Upload from '../assets/Css/Upload.css'
import Navbar from './Navbar'
import {Container,Col,Row} from 'react-bootstrap'
import { GoSearch } from "react-icons/go";
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";

function viewproject2() {
    const style={
        background:"#dde0df" ,
        borderRadius: "50%",
        // width: "0.5vw",
        // height: "0.5vw",
        color:"#ffffff",
        // marginLeft:"0.5vw",
        border:"none"
    };
    return (
        <Container fluid>
        <Row>
        <Col lg={2}>
           <Navbar/>
           </Col >
           <Col lg={10}>
              
            
           <div className="viewproject">
            <p>نمایش لیست پروژه ها</p>
          </div>
          
          <div className="Tablecategory1">
          <table>
            <th>ID</th>
            <th>عنوان پروژه</th>
            <th>نام دسته</th>
            <th>تصویر</th>
            <th>فایل پروژه</th>
            <th>لینک پروژه</th>
            <th>عملیات</th>
            <tr>
            <td>1</td>
            <td>شهرک غرب</td>
            <td>مسکونی</td>
            <td>1</td>
            <td>فایل پروژه</td>
            <td>فایل پروژه</td>
            <td>
                     <button type="button">حذف</button>
                     <button type="button">ویرایش</button>
            </td>
            </tr>
          </table>
          </div>
          <div className="steparrow">
              <MdKeyboardArrowRight style={style}/><MdKeyboardArrowLeft style={style} />
              <button type="submit" style={style} ><MdKeyboardArrowRight/></button>
          </div>
         </Col>
         </Row>
     </Container>
    )
}

export default viewproject2
