import React from 'react';
import './blogCard.css'; // Import the CSS file for styling

const BlogCard = ({ title, description, date, preview, imageUrl, onClick }) => {
    return (
        <>
            {/* Display this version for mobile screens (column layout) */}
            <div 
                onClick={onClick} 
                className="blog-card mobile-layout"
            >
                <img 
                    src={imageUrl || 'https://via.placeholder.com/150'} 
                    alt="blog preview" 
                    className="blog-card-image"
                />
                <div className="blog-card-content">
                    <h2 className="blog-card-title">{title}</h2>
                    <p className="blog-card-description">{description}</p>
                    <p className="blog-card-preview">{preview}...</p>
                    <p className="blog-card-date">{date}</p>
                </div>
            </div>

            {/* Display this version for larger screens (row layout, more structured) */}
            <div 
                onClick={onClick} 
                className="blog-card desktop-layout"
            >
                <div className="blog-card-image-container">
                    <img 
                        src={imageUrl || 'https://via.placeholder.com/150'} 
                        alt="blog preview" 
                        className="blog-card-image"
                    />
                </div>
                <div className="blog-card-content">
                    <h2 className="blog-card-title">{title}</h2>
                    <p className="blog-card-preview">{preview}...</p>
                    <p className="blog-card-description">{description}</p>
                    <p className="blog-card-date">{date}</p>
                </div>
            </div>
        </>
    );
};

export default BlogCard;
