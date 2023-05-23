import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/heroimage.jpg";
import Logo from "../assets/Logo.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
      <img src={Logo} alt="name" />

        <h1> Welcome to a  </h1>
        <p> World of Flavors!</p>
        <Link to="/menu">
          <button> viev menu </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
