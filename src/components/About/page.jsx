import React from 'react';
import founder from './images/founder.jpg'
const About = () => {
    return (
        <div style={{
            color: '#fff',
            padding: '3em 1em',
            textAlign: 'center',
            minHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop:'25px',
            padding:'2em',
            width:'110%',
            marginLeft:'-5%'
        }}>
        <h1 style={{ 
            width: '100%', // Ensure the title takes the full width of the container
            textAlign: 'center', 
            fontSize: '2.5em', 
            marginBottom: '1.5em', 
            color: '#FFF' ,
            marginTop:'1em'
        }}>
            About Us
        </h1>
            <p style={{ fontSize: '1.2em', maxWidth: '800px', marginBottom: '2em' }}>
            Imagine a place that allows the wildest imaginations to be engineered at the fastest pace—that's Augmented Labs. Our aim is to bring cutting-edge technology to the masses in a way that has never been done before!</p>
            
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2em',
                width: '100%',
                maxWidth: '1200px',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#111',
                    padding: '2em',
                    borderRadius: '1em',
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                    textAlign: 'left'
                }}>
                    <img 
                        src={founder}
                        alt="Founder" 
                        style={{ maxWidth: '400px',  borderRadius: '2%', marginBottom: '1em' }} 
                    />
                    <h2 style={{ fontSize: '2em', marginBottom: '0.5em' }}>Vineeth </h2>
                    <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
                        Our founder, Vineeth Rao, started Augmented Labs with the vision to blend science fiction with reality. With years of experience in... lets cut the GPT content here.<br/><br/>
                        Well let me introduce myself- I'm Vineeth Rao, The CEO, The CTO, The intern, The Janitor... I'm everything and everyone here. Augmented Labs is an outlet for me to showcase and make sense of the projects and how I make them. I love engineering and I engineer a LOT. But a LOT- A LOT more is left unexplored and untouched!!<br/><br/>
                        Anyways, I'll always keep pushing out products over here, and you can help me out and Augmented Labs by criticizing them (and maybe purchasing them if you find them useful)!
                    </p>
                </div>

                {/* <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    width: '100%',
                    gap: '2em',
                    flexWrap: 'wrap'
                }}>
                    <div style={{
                        width: '300px',
                        backgroundColor: '#111',
                        padding: '1.5em',
                        borderRadius: '1em',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                        textAlign: 'left'
                    }}>
                        <img 
                            src="src/components/About/images/Pokemon Clip Art.jpeg" 
                            alt="Team Member 1" 
                            style={{ width: '100px', height: '100px', borderRadius: '2%', marginBottom: '1em' }} 
                        />
                        <h3 style={{ fontSize: '1.5em', marginBottom: '0.5em' }}>Team Member 1</h3>
                        <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
                            [Name] is a [Role] at Augmented Labs, bringing a wealth of knowledge in [field]. [He/She/They] play a critical role in [specific contributions].
                        </p>
                    </div>

                    <div style={{
                        width: '300px',
                        backgroundColor: '#111',
                        padding: '1.5em',
                        borderRadius: '1em',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                        textAlign: 'left'
                    }}>
                        <img 
                            src="src/components/About/images/Pokemon Clip Art.jpeg" 
                            alt="Team Member 2" 
                            style={{ width: '100px', height: '100px', borderRadius: '2%', marginBottom: '1em' }} 
                        />
                        <h3 style={{ fontSize: '1.5em', marginBottom: '0.5em' }}>Team Member 2</h3>
                        <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
                            [Name] is a [Role] at Augmented Labs, with a focus on [field]. [He/She/They] excel in [specific contributions] and have been instrumental in our success.
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default About;
