import React from "react";
import headerPic from "../assets/hero-right.png";
import "../CSS/header.css";
import Button from "../Utils/Button";

const Header = () => {
  return (
    <section className="section-display">
      <header>almila</header>
      <div className="00">
        <div className="heroleft">
          <h1>I'm a Frontend Developer...</h1>
          <p className="heroleftP">
            ...who likes to craft solid and scalable frontend products with
            great user experiances
          </p>
          <Button />
        </div>
        <img src={headerPic} alt="Header Picture" className="0" />
        <header id="hiddenAlmila">almila</header>
      </div>
    </section>
  );
};
export default Header;
