import React from 'react';
import ContactBlock from "./components/contactBlock";
import whatsapp from "./images/logo-whatsapp.png";
import email from "./images/logo-email.png";
import phone from "./images/logo-phone.png";

let ContactUs = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '90vh',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            padding: '1em'
        }}>
            <div className="mt-64 sm: mt-0" style={{
                display: 'flex',
                flexDirection: 'column',
                border: 'solid 1px rgba(255,255,255,0.05)',
                background: 'rgba(10,10,10)',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                borderRadius: '0.5em',
                padding: '5em 2em',
                width: '100%',
                maxWidth: '800px',
                paddingTop:'3em'
            }}>
                <h1 className="text-4xl md:text-4xl " style={{
                    textAlign: 'center',
                    marginTop:'0em',
                    marginBottom:'1em',
                }}>Augment your experience<br/><br/>Connect with Us</h1>
                <div className="flex flex-col md:flex-row"style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}>
                    <ContactBlock 
                        img={whatsapp} 
                        text="Whatsapp" 
                        buttonText="Text us!" 
                        action={() => window.open('https://wa.me/8217684886', '_blank')} 
                    />  
                    <ContactBlock 
                        img={email} 
                        text="Mail" 
                        buttonText="Mail us!" 
                        action={() => window.location.href = 'mailto:augmentedlabs.teams@gmail.com'} 
                    />

                    <ContactBlock 
                    img={phone} 
                    text="Phone" 
                    buttonText="Call Us!" 
                    action={() => window.location.href = 'tel:9482465825'} 
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
