import React from "react";
import PLace from "../assets/place.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${PLace})` }}></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>Welcome to Richard Restaurant!</p>
        <p>We are proud to offer you the ultimate culinary experience.</p>
        <p>Richard is the place where you can enjoy a variety of tastes and discover new gastronomic adventures.</p>
        <p>Our menu is created with love and attention to detail.</p>
        <p>We offer a wide selection of burgers, sushi, salads, breakfasts, drinks, and pizzas.</p>
        <p>Whatever your preference, we have a dish to satisfy your appetite. cumque velit</p>
      </div>
    </div>
  );
}

export default About;
