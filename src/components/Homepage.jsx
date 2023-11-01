import React from "react";
import { SocialIcon } from 'react-social-icons'

import "../css/homepage.css";
const Homepage = () => {
  return (
    <div className="homePageContainer">
      <div className="headingTxt"><h1>PORTFOLIO</h1></div>
      <div className="boxContainer">
        <div className="leftSection">
          <img
            className="authorImg"
            src={require("../assets/photo.jpg")}
            alt=""
          />
        </div>
        <div className="rightSection">
          <div className="authorName">Rawahul Islam</div>
          <div>B.Tech in Electrical Engineering</div>
          <div>Full Stack Developer - MERN Stack</div>
          <div>1 year in Non-Tech and Joined <strong>Pepper Square</strong> as Software Engineer in August 16th 2023 till Present</div>
          <div><a href="tel:+917006081386">Phone: +917006081386</a></div>
          <div>WhatsApp <SocialIcon target="blank" href="http://wa.me/+917006081386" url="https://whatsapp.com/" /></div>
          <div className="cursorPointer">Download Resume</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
