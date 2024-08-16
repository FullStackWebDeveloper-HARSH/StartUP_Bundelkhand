import React from 'react';

function NetworkingSection() {
    return (
        <div className="networking-container">
            <div className="networking-image">
                <img src="/components/network-visual.jpeg" alt="Networking visual" />
            </div>
            <div className="networking-content">
                <h1>10x Your Rolodex</h1>
                <p>
                    Every week we host curated Speed Networking events where you will be introduced to new 
                    Founders who can help you grow your startup and build your network. It's basically Tinder for 
                    Founders – on steroids.
                </p>
                <button className="networking-button">
                    Meet Other Founders &rarr;
                </button>
            </div>
        </div>
    );
}

export default NetworkingSection;