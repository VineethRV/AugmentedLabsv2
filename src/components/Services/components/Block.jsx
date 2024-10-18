import React from 'react';

const Block = ({ heading, desc, videoUrl }) => {
    return (
        <div
            style={{
                width: '100%',
                maxWidth: '400px',
                margin: '20px auto',
                border: '2px solid rgba(0, 0, 0, 0.5)',
                background: '#fff',
                color: '#000',
                borderRadius: '0.5em',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                transition: 'transform 0.6s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                minHeight: '220px',
                overflow: 'hidden', // Ensures content stays within the bounds
                flexDirection: window.innerWidth <= 600 ? 'column' : 'row',
                padding: window.innerWidth <= 600 ? '15px' : '20px',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = window.innerWidth <= 600 ? 'scale(1.1)' : 'scale(1.5)';
                e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.4)';
                
                // Show video on hover
                const videoElement = e.currentTarget.querySelector('video');
                videoElement.style.opacity = '1';

                // Hide text on hover
                const textElements = e.currentTarget.querySelectorAll('.text-content');
                textElements.forEach(textElement => {
                    textElement.style.opacity = '0'; 
                });

                e.currentTarget.style.padding = '0'; // Set padding to 0 on hover
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.3)';

                // Hide video when not hovered
                const videoElement = e.currentTarget.querySelector('video');
                videoElement.style.opacity = '0';

                // Show text after hover
                const textElements = e.currentTarget.querySelectorAll('.text-content');
                textElements.forEach(textElement => {
                    textElement.style.opacity = '1'; 
                });

                e.currentTarget.style.padding = window.innerWidth <= 600 ? '15px' : '20px'; 
            }}
        >
            {/* Video background with opacity initially set to 0 */}
            <video 
                src={videoUrl} 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // Ensure the video covers the container
                    zIndex: '-1', // Ensure the video stays behind the content
                    borderRadius: '0.5em', // Match border-radius of the container
                    opacity: '0', // Initially hidden
                    transition: 'opacity 0.5s ease', // Smooth transition on hover
                }} 
                autoPlay 
                loop 
                muted 
                playsInline // For better mobile support
            />

            {/* Text Content */}
            <div style={{ 
                flex: 1,
                textAlign: window.innerWidth <= 600 ? 'center' : 'left',
                zIndex: 1 // Ensure text stays above the video
            }}>
                <h2 className='text-content' style={{ 
                    fontSize: window.innerWidth <= 600 ? '1.25em' : '1.5em', 
                    marginBottom: '10px',
                    transition: 'opacity 0.5s ease', // Smooth opacity transition
                }}>{heading}</h2>
                <p className='text-content' style={{ 
                    color:'black',
                    fontSize: window.innerWidth <= 600 ? '0.9em' : '1em', 
                    margin: 0,
                    transition: 'opacity 0.5s ease', // Smooth opacity transition
                }}>{desc}</p>
            </div>

            {/* Arrow */}
            <div className="arrow" style={{
                marginLeft: window.innerWidth <= 600 ? '0' : '20px',
                fontSize: '1.5em',
                fontWeight: 'bold',
                transition: 'transform 0.3s ease',
                textAlign: window.innerWidth <= 600 ? 'center' : 'right',
                zIndex: 1 // Ensure arrow stays above the video
            }}>
                <span>→</span>
            </div>
        </div>
    );
};

export default Block;
