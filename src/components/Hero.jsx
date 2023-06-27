import React from "react";
import heroImage from "../img/hero.jpg";
import buttonImage from "../img/button.png";

const Hero = () => {
    return (
        <section className="hero container section">
            <img className="hero__image" src={heroImage}></img>
            <div className="hero__content">
                <h4>Trade-in-Offer</h4>
                <h2>Super Value Deals</h2>

                <h1>On all products</h1>

                <p>Save more with coupons & up to 70% off!</p>
                <div className="hero__btn-wrapper">
                    <button className="hero__btn">Shop Now</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
