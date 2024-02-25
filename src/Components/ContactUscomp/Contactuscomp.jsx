import React, { useState } from 'react';
import './Contactus.css';
import Footercomp from "../Footercomp/Footercomp"
import Navbar from "../NavbarComp/Navbar";

const Contactuscomp = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // Your logic to send the message
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form fields
    setEmail('');
    setMessage('');
  };

  return (
    <div>
                    {/* <Navbar /> */}

    <div className="container">
      <div className="left-column">
        <h2 className='have-question ms-5 ps-5'>Have Questions? Ask <br></br>us anything you want and <br></br> we’ll answer</h2>
        <p className='Send-mail ms-5 ps-5'>Send a mail instead?</p>
        <a className='Hello-primalcare ms-5 ps-5'>hello@primalcare.com</a>
      </div>
      <div className="right-column">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className='input'
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
        ></textarea>
        <div className='Sent-message'>
        <button className='Send-message' onClick={handleSendMessage}>Send Message</button>
        </div>
      </div>
    </div>
    <div className='join-Uss'>
        <button className='News-letter1'>Join our newsletter</button>
        <button className='on-insta'>Follow on instagram</button>
        <button className='Follo-facebook'>Follow on facebook</button>
        <button className='Follo-twiter'>Follow on twitter</button>
      </div>
    </div>
  );
};

export default Contactuscomp;
