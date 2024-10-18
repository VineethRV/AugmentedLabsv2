import React from 'react';
import './App.css'; // Assuming you have a CSS file for custom styles
import benchy from "./images/benchy.jpg"
import pbrao from "./images/pbrao.jpg"
import precision from "./images/precision.jpg"
import sizeCompare from "./images/sizeCompare.jpg"
const PrintingService = () => {
  return (
    <div className="container mt-16">
      {/* Hero Section */}
        <header className="hero-section">
            <h1 className="text-white">Top Quality 3D Printing Services</h1>
            <p>High precision, fast turnaround, and affordable pricing. Bring your ideas to life with us!</p>
            <a href="https://wa.me/8217684886/" target="_blank" rel="noopener noreferrer">
            <button className="whatsapp-btn">Get Your Prints Now</button>
            </a>
        </header>
        {/* Why Print With Us Section */}
        <section className="why-us-section">
        <h2>Why Print With Us</h2>
        <ul className="why-us-list">
            <li><strong>Instant Free Delivery:</strong> Receive your prints within 24 hours at no additional cost! (Exclusive to RV students)</li>
            <li><strong>Top-Notch Quality:</strong> Benefit from our cutting-edge 3D printers ensuring precision with an accuracy of ±0.2mm.</li>
            <li><strong>Expert Team:</strong> Our experienced team will assist you on the way to getting high-quality prints.</li>
            <li><strong>Variety of Materials and Colors:</strong> Choose from a wide range of colors, or provide your own spool for a personalized touch.</li>
            <li><strong>Competitive Pricing:</strong> Enjoy premium quality services at prices lower than most online competitors.</li>
        </ul>
        </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2 className="text-white">Gallery</h2>
        <div className="gallery">
          <div className="gallery-item">
            <img src={benchy} alt="" />
            <h3 className="text-white">Detail Captured</h3>
            <p>Our printing service ensures maximum detail of your idea is encorporated into the final print. The benchy (boat) in the picture sets a good example, with zero stringing and dropping of the prints, a highly detailed print is produced.</p>
          </div>
          <div className="gallery-item">
          <img src={precision} alt="" />
            <h3 className="text-white">Precision.</h3>
            <p>We ensure a precision of ±0.2mm,this means that for most applications you need not provide tolerance. In the image beside, the print(green) has a perfect tight fit on the servo shaft as well as the gear, there was zero tolerance provided in the model.</p>
          </div>
          <div className="gallery-item">
          <img src={sizeCompare} alt="" />
            <h3 className="text-white">Quality</h3>
            <p>Even small parts are printed with detail and precision. The part in image is only about 8mm in length and breadth.</p>
          </div>
          <div className="gallery-item">
          <img src={pbrao} alt="" />
            <h3 className="text-white">Volume</h3>
            <p>We provide a printing volume of 246mm*246mm*246mm. Extremely long/ large prints can be broken down into a few parts to get it in the proper build space. The one shown in picture had to be 420mm long, so it was printed in 2 parts of 200mm and 220mm</p>
          </div>
          {/* Add more items as needed */}
        </div>
      </section>

      {/* Footer Section with WhatsApp Button */}
      <footer className="footer-section">
        <h2 className="text-white">Ready to Get Started?</h2>
        <a href="https://wa.me/8217684886/" target="_blank" rel="noopener noreferrer">
          <button className="whatsapp-btn">Get Your Prints Now</button>
        </a>
      </footer>
    </div>
  );
};

export default PrintingService;
