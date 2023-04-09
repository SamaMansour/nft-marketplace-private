import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./HeroSection.scss";
import Slides from "../../../assets/images/Slides.png"


const HeroSection = () => {

  return (
    <section className="hero__section">
     
            <div className="hero__content">
              <h2>
                Discover the
                <span>NFT</span><br></br>
                for the worldwide  creators
              </h2>
                <div className="hero__btns d-flex align-items-center gap-4">
                  <button className=" explore__btn d-flex align-items-center gap-2">
                    <i className="ri-rocket-line"></i>{" "}
                    <Link to="/market">Become a Creator</Link>
                  </button>
                  <button className=" create__btn d-flex align-items-center gap-2">
                    <i className="ri-ball-pen-line"></i>
                    <Link to="/create">Explore NFT</Link>
                  </button>
                </div>
              </div>
           
        
              <div className="hero__img">
                <img src={Slides} className="w-100"/>
              </div>
         
  </section>
  );
};

export default HeroSection;