import React from 'react'
import Upload from '../assets/Css/Upload.css'
import Navbar from './Navbar'
import {Container,Col,Row} from 'react-bootstrap'
import { GoSearch } from "react-icons/go";
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";

function viewproject() {
    const style={
        background:"#dde0df" ,
        borderRadius: "50%",
        width: "1.2vw",
        height: "1.2vw",
        color:"#ffffff",
        marginLeft:"0.5vw"
    };
    return (
        <Container fluid>
        <Row>
        <Col lg={2}>
           <Navbar/>
           </Col >
           <Col lg={10}>
               <div className="searcharea1">
                  <form>
                      <input id="searchproject"  name="searchproject"  type="text" placeholder="عنوان پروژه "/>
                       <select name="selectcategory" id="selectcategory" placeholder="انتخاب دسته">
                       <option value="Aparteman">آپارتمان</option>
                       <option value="Villaei">ویلایی</option>
                       <option value="Zamin">زمین</option>
                       <option value="Tegari">تجاری</option>
                       </select>
                       <button type="submit" className="btnsearchview"><GoSearch/></button>
                    
                  </form>
               </div>
              
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
            <tr>
            <td>1</td>
            <td>شهرک غرب</td>
            <td>مسکونی</td>
            <td>1</td>
            <td>فایل پروژه</td>
            </tr>
          </table>
          </div>
          <div className="steparrow">
              <MdKeyboardArrowRight style={style}/><MdKeyboardArrowLeft style={style} />
          </div>
         </Col>
         </Row>
     </Container>
    )
}

export default viewproject
