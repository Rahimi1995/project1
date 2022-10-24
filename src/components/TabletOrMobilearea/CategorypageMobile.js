import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import NavbarMobile from '../TabletOrMobilearea/NavbarMobile'
import Upload from '../../assets/Css/StyleTaletOrMobile/Upload.css'

function Categorypage() {

    return (
        <Container fluid>
        <Row>
          <Col lg={2}>
           <NavbarMobile/>
           </Col >
           <Col lg={10}>
               <div className="Addcategory">
                   <p>افزودن دسته جدید</p>
               </div>
               <div className="Addcategoryform">
                       <form>
                           <label for="categoryname">افزودن دسته جدید<br/>
                           <input id="categoryname" name="categoryname" type="text"/></label>
                           &nbsp;&nbsp;
                           <label for="submitcategory" style={{color:"#ffffff"}}>افزودن دسته جدید<br/>
                           <input id="submitcategory" name="submitcategory" type="submit" value="افزودن دسته" /></label>
                       

                       </form>
                   </div>
                   <div className="Tablecategory">
                   <p>جدول دسته ها</p>
               </div>
               <div className="Tablecategory1">
                   <table >
                       <th>ID</th>
                       <th>نام دسته</th>
                       <th>عملیات</th>
                       <tr>
                       <td>Jill</td>
                       <td>Smith</td>
                       <td>
                           <button type="button">حذف</button>
                           <button type="button">ویرایش</button>
                       </td>
                       </tr>
                   </table>
               </div>
           </Col>
        </Row>
        </Container>
    )
}

export default Categorypage
