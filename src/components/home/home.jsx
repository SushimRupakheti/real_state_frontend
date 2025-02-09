import React from "react";
import '../../styles/home.css';


const Home = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: "url('/images/bg.png')", backgroundSize: "contain", backgroundPosition: "right", backgroundRepeat: "no-repeat" }}
    >
      <header className="header">
        <div className="logo">ORIGIN HOMES</div>
        <nav>
          <a href="#contact">Contact Us</a>
          <a href="#about">About Us</a>
        </nav>
      </header>
      
      <div className="logo1">
        <img src="/images/logo.png" alt="Origin Homes Logo" />
      </div>
      
      <section className="hero">
        <div className="content">
          <h1>Find the property<br/> of Your dream in <br/>Nepal.</h1>
          <p>
            “Successfully facilitated over 500 properties,<br/>
            earning a reputation for trust, transparency, and <br/>
            exceptional customer satisfaction.”
          </p>
            <a href="/auth">
            <button>Join Now</button></a>
        </div>
      </section>
    </div>
  );
};

export default Home;
