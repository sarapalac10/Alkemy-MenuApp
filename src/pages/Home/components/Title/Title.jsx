import React from "react";
import { GiCook , GiCookingPot } from "react-icons/gi";
import './Title.css'

function Title() {
  return (
      <div>
        <div className="title-containter">
            <GiCook className="icon-title" />
            <h1>MENU APP</h1>
            <GiCookingPot className="icon-title" /> 
        </div>
    </div>
  )
}

export default Title;