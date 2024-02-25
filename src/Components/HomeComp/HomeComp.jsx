import React from 'react'
import "./HomeComp.css"
import homepic from "../../assets/homepic.png"
import hello from "../../assets/hello.png"
export default function HomeComp() {
  return (<>
  < div className='main'>
 <div className='home'>
 <h1>Transform <br /> <span>from inside-out</span></h1>
 <button className='btn-start'>Get Started</button>
 </div>
 <div className='home-pic'> 
 <img src={homepic} alt="homepic"  />

 </div>
 </div>
 <div className='hello'>
  <div>
  <img src={hello} alt="hello" height={20}  width={20}/>
  <span >Hello!</span>
  </div>
  <p>  Lorem ipsum dolor sit amet consectetur healthy and fit</p>
 </div>
 </>
  )
}
