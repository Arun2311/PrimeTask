import React from 'react'
import line from "../../assets/Line.png"
import hand from "../../assets/hand.png"
import puzzle from "../../assets/puzzle.png"
import mountain from "../../assets/mountain.png"
import climb from "../../assets/climb.png"
import "./ProLogoComp.css" 
export default function ProLogoComp() {
  return (
    <div className='Main-Box'>
        <div className='Box-Container'>
 <img src={line} alt="line" /><span>Lorem ipsum dolor</span>
        </div>
        <div className='Logo-container'>
        <div  className='hand'>
          <img src={hand} alt="logo"  width={30} height={30}/><span>Lorem ipsum dolor sit amet consectetur. In.</span><br/><br/></div>
          <div  className='puzzle'>
          <img src={puzzle} alt="logo" width={30} height={30}/><span>Lorem ipsum dolor sit amet consectetur. In.</span><br/><br/></div>
          <div className='mountain'>
          <img src={mountain} alt="logo"   width={30} height={30}/><span>Lorem ipsum dolor sit amet consectetur. In.</span><br/><br/></div>
          <div className='climb'>
          <img src={climb} alt="logo"  width={30} height={30} /><span>Lorem ipsum dolor sit amet consectetur. In.</span><br/><br/></div>

        </div>
    </div>
  )
}

