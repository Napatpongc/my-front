import React from 'react'
import Logo from '../Pictures/webicon.png'

function NAVBar() {
  return (
    <div className="NAVBar">
        <div className="leftSide">
            <img src={Logo}></img>
        </div>
        <div className="middle">
            <div className="Text1">
                MUSTODE CLEAN FOOD
            </div>
            <div className="Text2">
            "Healthy For Everyone"
            </div>
            <div className="Underline"></div>
        </div>
    </div>   
  )
}

export default NAVBar