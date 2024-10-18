import React, { useState } from 'react';
import Block from './components/Block';
import { Link } from 'react-router-dom'; 
const Services = () => {
    const [bgImage, setBgImage] = useState('');

    return (
        <div 
            style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                marginTop: '25px',
                justifyContent: 'flex-start',
                padding: '2em',
                gap: '20px',
                minHeight: '100vh',
                color: '#fff',
                backgroundImage: bgImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>

            <h1 style={{ 
                width: '100%', // Ensure the title takes the full width of the container
                textAlign: 'center', 
                fontSize: '2.5em', 
                marginBottom: '1.5em', 
                color: 'black' ,
                marginTop:'1em'
            }}>
                Services Offered
            </h1>
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                alignItems: 'center',
                gap: '20px',
                maxWidth: '1200px',  // Limits the width of the content
            }}>
                <Link to="/3dprinting">
                <Block 
                    heading="3D PRINTING" 
                    desc="Print the finest models at the cheapest prices. With the state-of-the-art bambu lab printers, we can get your prints ready fast. Guaranteed one day delivery to RV students!" 
                    videoUrl="src/images/3dprinting.mp4" // Update with actual image path
      
                />
                </Link>
            </div>
        </div>
    );
};

export default Services;
