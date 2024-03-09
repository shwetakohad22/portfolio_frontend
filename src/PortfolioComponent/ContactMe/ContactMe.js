import React, { useState } from "react";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { useTypewriter } from "react-simple-typewriter";
import "./ContactMe.css";
import axios from "axios";
import { toast } from "react-toastify";

const ContactMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFeedIn.subscribe(fadeInScreenHandler);

  const [typeEffect] = useTypewriter({
    words: ["Get in touch "],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} subHeading={"Let's Keep In Touch"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">{typeEffect}</h2>
          <a href="https://www.linkedin.com/in/shweta-kohad-b15b54169/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/shwetakohad22">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.instagram.com/shweta_kohad_">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={handleName} />
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={handleEmail} />
            <label htmlFor="message">Message</label>
            <textarea type="text" value={message} onChange={handleMessage} />
            <div className="send-btn">
              <button type="submit">
                Send <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="img not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
