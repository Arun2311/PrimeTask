import React, { useState } from 'react';
import './Arun.css';
import { Route, Link, Routes } from "react-router-dom";

import align from "../../assets/align-justify.png";

function Arun() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
      <img
        src={align}
        alt="icon"
        width={30}
        height={30}
        onClick={toggleSidebar}
        style={{ cursor: "pointer" }}
      />
      </nav>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeSidebar}>X</button>
        <ul>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Arun;