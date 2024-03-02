import React, { useState, useEffect } from "react";
import Round from "../../assets/Round.png";
import Fruit from "../../assets/Fruit.png";
import Nature from "../../assets/Nature.png";
import operate from "../../assets/operate.png";
import Rightarrow from "../../assets/Rightarrow.png";
import Comma from "../../assets/Comma.png";
import { Collapse } from "antd";
import "./about.css";
import Footercomp from "../Footercomp/Footercomp";
import Paragraph from "../Paragraph/Paragraph";
import Navbar from "../NavbarComp/Navbar";
import Carouselcomp from "../corosalcomp/Carouselcomp";

const Aboutuscomp = () => {
  const [hide, setHide] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Call once to set initial value
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const items = [
    {
      key: "1",
      label: "The Story",
      children: (
        <p>
          Founded on the principles of dedication, support, and a shared
          commitment to health, we guide you towards your transformative path
          Lorem ipsum dolor sit amet consectetur. Semper donec sem donec
          habitasse facilisis mattis sem. Augue et leo cursus consectetur dolor
          viverra tempor morbi. Pellentese vel ornare tristique iaculis iaculis.
          Nibh at magna malesuada gravida sed accumsan magna magna.
        </p>
      ),
    },
    {
      key: "2",
      label: "The Mission",
      children: (
        <p>
          Founded on the principles of dedication, support, and a shared
          commitment to health, we guide you towards your transformative path
          Lorem ipsum dolor sit amet consectetur. Semper donec sem donec
          habitasse facilisis mattis sem. Augue et leo cursus consectetur dolor
          viverra tempor morbi. Pellentese vel ornare tristique iaculis iaculis.
          Nibh at magna malesuada gravida sed accumsan magna magna.
        </p>
      ),
    },
    {
      key: "3",
      label: "The Vision",
      children: (
        <p>
          Founded on the principles of dedication, support, and a shared
          commitment to health, we guide you towards your transformative path
          Lorem ipsum dolor sit amet consectetur. Semper donec sem donec
          habitasse facilisis mattis sem. Augue et leo cursus consectetur dolor
          viverra tempor morbi. Pellentese vel ornare tristique iaculis iaculis.
          Nibh at magna malesuada gravida sed accumsan magna magna.s
        </p>
      ),
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="totty">
      {/* <Navbar /> */}

      <div className="align-Text">
        <h1 className="Body-text">Body</h1>
        <h1 className="Mind-text">Mind</h1>
        <h1 className="Transform-text">transform</h1>
        <h1 className="Shine-text">shine</h1>
      </div>

      {/* <div className=`container ${!isMobile && arcontainer}`> */}
      <div className={`container ${!isMobile && "arcontainer"}`}>

        <div className="text-column">
          <div className="text-col">
            {/* <img src={Round} className="Round-img" alt="Round Image" /> */}
            {/* <p className="The-story">The Story</p> */}
          </div>

          <div className="collapse-wrapper handchange">
            {/* <Collapse
              items={items}
              defaultActiveKey={[""]}
              onChange={onChange}
              className="collapse-align"
            /> */}
          
              <Collapse
                items={items}
                defaultActiveKey={[""]}
                onChange={onChange}
                className="collapse-align"
                style={{ width: "100%" }} // Set width to 100% for mobile screens
              />
      
          </div>
        </div>

        {/* <div className="image-column">
          <div className="Float-img">
            <img src={Fruit} alt="Image 1" className="Img-1" />
            <img src={Nature} alt="Image 2" className="Img-2" />
          </div>
        </div> */}
        <div className="image-column">
          <div className="Float-img">
            {!isMobile && (
              <>
                <img src={Fruit} alt="Image 1" className="Img-1" />
                <img src={Nature} alt="Image 2" className="Img-2" />
              </>
            )}
          </div>
        </div>
      </div>



      <div className="Center-3">
        {!isMobile && (
          <img src={operate} className="select-img" alt="operate" />
        )}
      </div>

      <div>
        <Paragraph />
      </div>
      <div className="Transform-class mt-4 ">
        <h1>
          Ready to <span className="span-trans">transform</span> yourself?
        </h1>
        <button className="Gets-button">
          Get Started{" "}
          <img src={Rightarrow} className="Right-arrow" alt="Rightarrow" />
        </button>
      </div>
      <div>
        <Carouselcomp />
      </div>
      <div className="mt-4">
        <Footercomp />
      </div>
    </div>
  );
};

export default Aboutuscomp;
