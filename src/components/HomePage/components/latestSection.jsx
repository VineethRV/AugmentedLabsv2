import React from 'react';
import './latest.css'; // Import the CSS file for styling

const latestCard = ({ title, description, date, imageUrl, onClick }) => {
    return (
        <>
            {/* Display this version for mobile screens (column layout) */}
            <div 
                onClick={onClick} 
                className="latest-card mobile-layout"
            >
                <img 
                    src={imageUrl || 'https://via.placeholder.com/150'} 
                    alt="latest preview" 
                    className="latest-card-image"
                />
                <div className="latest-card-content">
                    <h2 className="latest-card-title">{title}</h2>
                    <p className="latest-card-description">{description}</p>
                    <p className="latest-card-date">{date}</p>
                </div>
            </div>

            {/* Display this version for larger screens (row layout, more structured) */}
            <div 
                onClick={onClick} 
                className="latest-card desktop-layout"
            >
                <div className="latest-card-image-container">
                    <img 
                        src={imageUrl || 'https://via.placeholder.com/150'} 
                        alt="latest preview" 
                        className="latest-card-image"
                    />
                </div>
                <div className="latest-card-content">
                    <h2 className="latest-card-title">{title}</h2>
                    <p className="latest-card-description">{description}</p>
                    <p className="latest-card-date">{date}</p>
                </div>
            </div>
        </>
    );
};

export default latestCard;
