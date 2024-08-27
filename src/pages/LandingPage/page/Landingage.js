
import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      
      <div className="content">
        <div className="left-section">
          <h1>Not An Investing Genius? We can help!</h1>
          <p>
            Our app is user-friendly, convenient, and automatically invests your money for you. Investing doesn’t have to be hard, download our app now and get started in minutes!
          </p>
          <div className="download-buttons">
            <button className="download-button apple">DOWNLOAD</button>
            <button className="download-button google">DOWNLOAD</button>
          </div>
          <div className="ratings">
            <div className="rating">
              <span>4.0</span> ★★★★☆
            </div>
            <div className="rating">
              <span>5.0</span> ★★★★★
            </div>
          </div>
        </div>
        
        <div className="right-section">
          <div className="phone-image">
            {/* Add phone image here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
