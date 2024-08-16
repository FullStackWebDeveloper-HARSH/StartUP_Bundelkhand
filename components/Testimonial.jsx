import React from 'react';


function Testimonial() {
    return (
        <div className="testimonial-container">
            <p className="testimonial-quote">
                "Having an expert advisor that knows what you're experiencing and has been through this before is incredibly helpful."
            </p>
            <div className="testimonial-author">
                <img 
                    src="/components/business.png" 
                    alt="Christina Perla" 
                    className="author-image" 
                />
                <div className="author-details">
                    <p className="author-name">Christina Perla</p>
                    <p className="author-title">FOUNDER</p>
                </div>
                <div className="author-company">
                    <img 
                        src="/components/th.jpg" 
                        alt="Makelab Logo" 
                        className="company-logo" 
                    />
                    <p className="company-name">Makelab</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;