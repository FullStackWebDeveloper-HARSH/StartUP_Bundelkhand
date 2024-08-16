import React from "react";


const CustomerSection = () => {
  return (
    <div className="customer-section">
      <div className="stats">
        <div className="stat-item">
          <h2>23 Million</h2>
          <p>Customers Acquired</p>
        </div>
        <div className="stat-item">
          <h2>237,000</h2>
          <p>Startup Launches</p>
        </div>
      </div>

      <div className="content">
        <div className="image-wrapper">
          <img src="/components/image3.png" alt="Phone" />
        </div>
        <div className="text-content">
          <h1>Get More Customers</h1>
          <p>
            Whether you're trying to find your first customer or scale to
            millions, we can help you supercharge your acquisition efforts.
          </p>
        </div>
      </div>

      <div className="platforms">
        <h3>Launched on our Platforms</h3>
        <div className="platform-logos">
          <img src="/components/image4.png" alt="Bumble" />
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
