import React from "react";
import "./header.css";
import Typical from "react-typical";

const Header = () => {
  return (
    <div>
      <div className="home">
        <div className="container">
          <h1 className="logo">Saheed Oladele</h1>

          <div className="profile">
            <div className="info">
              <div className="social">
                <i className="fa fa-facebook-square icon"></i>
                <i className="fa fa-twitter-square icon"></i>
                <i className="fa fa-linkedin-square icon"></i>
                <i className="fa fa-google-plus-square icon"></i>
              </div>
              <div className="name">
                Hello, I'am <span className="nameValue">Adewale</span>
              </div>
              <div className="roles">
                <Typical
                  steps={[
                    "Full Stack Developer!",
                    2000,
                    "Front-End Developer!",
                    2000,
                    "Instructor!",
                    2000,
                  ]}
                  loop={Infinity}
                />
              </div>
              <div className="details">
                I am a season developer with considerable level of experience
              </div>
              <div className="call-to-actions">
                <button className="btn hireMe">Hire Me</button>
                <button className="btn viewResume">View Resume</button>
              </div>
            </div>
            <div className="photo">
              <div className="realImg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
