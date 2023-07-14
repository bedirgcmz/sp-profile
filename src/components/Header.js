import React from "react";
import "./Header.css";
import image1 from "../images/image1.png";
import wave from "../images/wave.jpg";
import profilePhoto2 from "../images/profile-photo-2.png";

const Header = () => {
  return (
    <div className="header-container d-flex position-relative">
      <div className="shape-1"></div>
      <div className="shape-2"></div>
      <div className="shape-3"></div>
      <div className="shape-4"></div>
      <div className="shape-5"></div>
      <div className="shape-6"></div>
      <div className="shape-7"></div>
      <img className="wave" src={wave} alt="wave" />
      {/* <img className="header-pc-bg" src={bgPcImage2} alt="Header background" /> */}
      <img className="my-photo" src={profilePhoto2} alt="" />
      <div className="name-container d-flex flex-column justify-content-start align-items-center">
        <p className="name">Bedir Gocmez</p>
        <p className="job">Junior Full Stack Web Developer</p>
      </div>
      <p className="slogan">Success Is The Result Of Hard Work And Determination</p>
      <img className="image-1 me-2" src={image1} alt="" />
    </div>
  );
};

export default Header;
