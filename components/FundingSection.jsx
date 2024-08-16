import React from "react";


const FundingSection = () => {
  return (
    <div className="funding-section">
      <div className="header">
        <h1>Raise Capital</h1>
      </div>
      <div className="funding-options">
        <div className="funding-text">
          <h2>Looking for Funding?</h2>
          <p>
            We've helped startups raise over $600 million in funding commitments. 
            We can help you with every aspect of your fundraise from understanding how 
            the process works to building your Pitch Deck to finding the perfect investors.
          </p>
          <button className="funding-button">Accelerate Your Fundraise →</button>
        </div>
        <div className="funding-cards">
          <div className="card">Fundraise Strategy</div>
          <div className="card">Pitch Deck Creation</div>
          <div className="card">Step-by-Step Courses</div>
          <div className="card">Investor Research</div>
        </div>
      </div>
      <div className="recently-funded">
        <h3>Recently Funded</h3>
        <div className="funded-items">
          <div className="funded-item">
          <img src="/components/image41.png" alt="Arcimoto" />
            
          </div>
          </div>
      </div>
    </div>
  );
};

export default FundingSection;
