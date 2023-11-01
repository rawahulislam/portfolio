import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

import "../css/homepage.css";
const Homepage = () => {
  const [darkmode, setDarkmode] = useState(true);

  function handleDarkMode() {
    setDarkmode(!darkmode);
  }
  return (
    <div className={`homePageContainer ${darkmode ? "darkmode" : ""}`}>
      <div className="headingTxt">
        <h1>PORTFOLIO</h1>
      </div>
      <div className="cursorPointer darkmodeBtn" onClick={handleDarkMode}>
        Darkmode {darkmode ? "On" : "Off"}
      </div>
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
          <div>
            1 year in Non-Tech and Joined <strong>Pepper Square</strong> as
            Software Engineer in August 16th 2023 till Present
          </div>
          <div>
            <a href="tel:+917006081386">Phone: +917006081386</a>
          </div>
          <div>
            WhatsApp{" "}
            <SocialIcon
              target="blank"
              href="http://wa.me/+917006081386"
              url="https://whatsapp.com/"
            />
          </div>
          <div className="cursorPointer">
            <a
              target="blank"
              href="https://drive.google.com/file/d/1nwT4Fr9Dda5PvSIt6ytBx-FHQfevHueC/view?usp=drive_link"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
