import React from 'react';


const MasterclassSection = () => {
  return (
    <div className="masterclass-container">
      <h1 className="title">Get More Customers</h1>
      <div className="content-wrapper">
        <div className="text-content">
          <h2 className="subtitle">Masterclasses from World-renowned Founders</h2>
          <p className="description">
            Over 650 video classes from legendary Founders covering every aspect of starting a company. 
            Learn how to scale a company from the Founder of WordPress, grow your content marketing strategy 
            from Neil Patel, or build the perfect sales funnel from Hiten Shah of KISS Metrics.
          </p>
          <p className="description">
            Learn from expert Founders of companies like:
          </p>
         
        </div>
        <div className="image-content">
          <img src="/components/image2.png" alt="Founder" />
        </div>
      </div>
    </div>
  );
};

export default MasterclassSection;
