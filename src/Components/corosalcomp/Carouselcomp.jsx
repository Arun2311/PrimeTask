import React, { useState } from 'react';
 // Import your CSS file
import oneimg from "../../assets/Image-1.png";
import twoimg from "../../assets/Image-2.png";
import threeimg from "../../assets/Image-3.png";
import fourimg from "../../assets/Image-4.png";
import fiveimg from "../../assets/Image-5.png";
import "./carousel.css";

const Carouselcomp = () => {
  const [displayedImage, setDisplayedImage] = useState(threeimg); // Provide a default value
  const [displayText, setDisplayText] = useState(<p className='Names-style'>Kylie Wayne<br/><span className='Direx-name'>Clinical Dietician</span></p>); // Initialize with text, not image path
  const [clickedImage, setClickedImage] = useState(threeimg); // Track the clicked image

  const handleImageClick = (image, text) => {
    setDisplayedImage(image);
    setDisplayText(text);
    setClickedImage(image);

    // Check if clicked image is 4 or 5, then hide image 1
    if (image === fourimg || image === fiveimg) {
      document.querySelector(`.carousel-image.${oneimg.replace(/\./g, '\\.')}`).classList.add('hide');
    } else {
      document.querySelector(`.carousel-image.${oneimg.replace(/\./g, '\\.')}`).classList.remove('hide');
    }
  };

  return (
    <div className="image-carousel">
      <div className="carousel-images">
        <div className={`carousel-image ${clickedImage === oneimg ? 'hide' : ''}`} onClick={() => handleImageClick(oneimg, <p className='Names-style'>Suresh<br/><span className='Direx-name'>Clinical Dietician</span></p>)}>
          <img src={oneimg} alt="Image 1" className='Image-size-opt' />
        </div>
        <div className={`carousel-image ${clickedImage === twoimg ? 'hide' : ''}`} onClick={() => handleImageClick(twoimg,<p className='Names-style'>Ragu<br/><span className='Direx-name'>Clinical Dietician</span></p>)}>
          <img src={twoimg} alt="Image 2" className='Image-size-opt' />
        </div>
        <div className={`carousel-image ${clickedImage === threeimg ? 'hide' : ''}`} onClick={() => handleImageClick(threeimg, <p className='Names-style'>Kylie Wayne<br/><span className='Direx-name'>Clinical Dietician</span></p>)}>
          <img src={threeimg} alt="Image 3" className='Image-size-opt'/>
        </div>
        <div className="displayed-content">
          <img src={displayedImage} alt="Displayed" className="displayed-image"  />
        </div>
        <div className='Need-somespace'>
          <p className="displayed-text">{displayText}  </p>
        </div>
        <div className={`carousel-image ${clickedImage === fourimg ? 'hide' : ''}`} onClick={() => handleImageClick(fourimg, <p className='Names-style'>Kylie <br/><span className='Direx-name'>Clinical Dietician</span></p>)}>
          <img src={fourimg} alt="Image 4" className='Image-size-opt' />
        </div>
        <div className={`carousel-image ${clickedImage === fiveimg ? 'hide' : ''}`} onClick={() => handleImageClick(fiveimg, <p className='Names-style'> Wayne<br/><span className='Direx-name'>Clinical Dietician</span></p> )}>
          <img src={fiveimg} alt="Image 5" className='Image-size-opt' />
        </div>
      </div>
    </div>
  );
};

export default Carouselcomp;
