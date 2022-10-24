import React from 'react'

import { Redirect } from 'react-router-dom';



function Test() {
    function onclick(){
     <Redirect to="/Rd"/>
    }
    return (
        <div className="ali">
            <li>
                <a>fsdfsdfsdf</a>
                <form>
                   <input type="submit" onclick={onclick}  value="submit"/>
                </form>
            </li>
        </div>
    )
}

export default Test
