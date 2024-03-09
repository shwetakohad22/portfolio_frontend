import React from "react";
import "./Home.css";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
