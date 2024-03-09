import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

const Profile = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Mern Stack Developer",
      "Frontend Developer",
      "Backend Developer",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/shweta-kohad-b15b54169/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="hhttps://github.com/shwetakohad22">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.instagram.com/shweta_kohad_">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I am <span className="highlited-text">Shweta Kohad</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <span className="type-effect">{typeEffect}</span>
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}  
            >
              {""}
              Hire Me{" "}
            </button>
            <a href="ehizcv.pdf" download="Ehiedu ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
