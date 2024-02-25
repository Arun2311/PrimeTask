import React from 'react';
import "./pageone.css"
import blogimage from "../../../assets/blogimage.png"
import copy from "../../../assets/copy.png"
import twitter from "../../../assets/Twitter.png"
import linkin from "../../../assets/linkedin.png"
import fb from "../../../assets/Facebook.png"
// import back from "../../assets/o.png"


const Pageone = () => {
    return (
        <div className='blogbody'>

          <div className='blogheading'>
            <h1 className='blogtitle'>Empowering your<span className='inline'>wellness </span> journey Exciting tips from health experts</h1>
          </div>

          <div className='blogimagebox'>
<img className='blogimage' src={blogimage}/>

<div className='bloglinkinfo'>

<div className='intro'>
<div className='writer'>
<p className='linkfont'>Written by</p><h3 className='linkname'> Rhode Coldman</h3>
</div>

<div className='writer'>
<p className='linkfont'>Published on</p><h3 className='linkname'> Jan 2,2024</h3>
</div>
</div>



<div className='links'>
<ul className='linklist'>
    <li className='copy'><img className='copyimg' src={copy}/><h3 className='linkname'>copy link</h3></li>
    <li><img className='icon' src={twitter}/></li>
    <li><img className='icon' src={linkin}/></li>
    <li><img className='icon' src={fb}/></li>
</ul>
</div>


</div>



          </div>



        </div>
    );
}

export default Pageone;
