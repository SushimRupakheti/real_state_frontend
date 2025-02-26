import "../../styles/home.css";
import { useState } from "react";

const Home = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showAboutInfo, setShowAboutInfo] = useState(false);

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: "url('/images/villa 1.png')",
        backgroundSize: "auto",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header className="home-header">
        <div className="home-logo">ORIGIN HOMES</div>
        <nav>
          {/* Contact Us */}
          <div
            className="nav-item"
            onMouseEnter={() => setShowContactInfo(true)}
            onMouseLeave={() => setShowContactInfo(false)}
          >
            <a href="#contact">Contact Us</a>
            {showContactInfo && (
              <div className="info-box">
                <p>📍 Location: Kathmandu, Nepal</p>
                <p>📞 Phone: +977-1234567890</p>
                <p>✉️ Email: info@originhomes.com</p>
              </div>
            )}
          </div>

          {/* About Us */}
          <div
            className="nav-item"
            onMouseEnter={() => setShowAboutInfo(true)}
            onMouseLeave={() => setShowAboutInfo(false)}
          >
            <a href="#about">About Us</a>
            {showAboutInfo && (
              <div className="info-box">
                <p>🏡 Origin Homes is Nepal's leading property marketplace.</p>
                <p>🔍 Trusted by thousands to buy, sell, and rent properties.</p>
                <p>💡 Our mission: Simplifying real estate transactions.</p>
              </div>
            )}
          </div>
        </nav>
      </header>

      <div className="home-logo1">
        <img src="/images/logo.png" alt="Origin Homes Logo" />
      </div>

      <section className="home-hero">
        <div className="home-content">
          <h1>
            Find the property<br /> of Your dream in <br />
            Nepal.
          </h1>
          <p>
            “Successfully facilitated over 500 properties,<br />
            earning a reputation for trust, transparency, and <br />
            exceptional customer satisfaction.”
          </p>
          <a href="/auth">
            <button>Join Now</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
