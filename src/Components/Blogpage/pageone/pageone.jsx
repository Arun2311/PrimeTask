import React from 'react';
import "./pageone.css"
import blogimage from "../../../assets/blogimage.png"
import copy from "../../../assets/copy.png"
import twitter from "../../../assets/Twitter.png"
import linkin from "../../../assets/linkedin.png"
import fb from "../../../assets/Facebook.png"


const Pageone = () => {
    return (
        <div className='blog-body'>

          <div className='blog-heading'>
            <h1 className='blog-title'>Empowering your<span className='inline'>wellness </span> journey Exciting tips from health experts</h1>
          </div>

          <div className='blog-imagebox'>
<img className='blog-image' src={blogimage}/>

<div className='blog-linkinfo'>

<div className='introdo'>
<div className='writer'>
<p className='link-font'>Written by</p><h3 className='line-name'> Rhode Coldman</h3>
</div>

<div className='writer'>
<p className='link-font'>Published on</p><h3 className='line-name'> Jan 2,2024</h3>
</div>
</div>



<div className='linksdo'>
<ul className='link-list'>
    <li className='copydo'><img className='copy-img' src={copy}/><h3 className='link-name'>copy link</h3></li>
    <li><img className='icony' src={twitter}/></li>
    <li><img className='icony' src={linkin}/></li>
    <li><img className='icony' src={fb}/></li>
</ul>
</div>


</div>



          </div>



        </div>
    );
}

export default Pageone;
