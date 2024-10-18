import './Blog1.css'
import React from 'react';
import Overall from './images/Overall.jpg';
import FilementWaste from './images/filementWaste.jpg';
import Steps from './images/steps.png';
import ShredderTop from './images/shredderTop.jpg';
import ShredderIsometric from './images/shredderIsometric.jpg';
import ShredderFront from './images/shredderFront.jpg';
import GrinderIsometricNoCap from './images/grrinderIsometricNoCap.jpg';
import GrinderIsometric from './images/grinderIsometric.jpg';
import GrinderFrontView from './images/grinderfrontView.jpg'
import MoulderIsometricNoCap from './images/moulderIsometricNoCap.jpg';
import MoulderIsometric from './images/moulderIsomteric.jpg'
import SpoolerIsometric from './images/spoolerIsometric.jpg';
import SpoolerSide from './images/spoolerSide.jpg';
import SpoolerFront from './images/spoolerFront.jpg';
import ControlHub from './images/controllHub.jpg';
import Circuit from './images/circuit.jpeg';

const BlogPost = () => {
    
    return (
        <div className="container w-11/12 lg:w-3/4" style={{color:'white',marginTop:'6em'}}>
            <div className="alignImage flex flex-col-reverse lg:flex-row" >
                <div className="heading-container">
                    <h1 style={{fontSize:'1.8em',marginTop:'1.5em',marginBottom:'0.5em',fontWeight:'bold',color:'white'}}>Filament Recycler Under 100 Dollars</h1>

                    <p>October 15, 2024 | By Vineeth, Shreevathsa, Saathwika and Vijesh </p><br/>

                    <nav>
                        <ul>
                            <li><a href="#introduction">Introduction</a></li>
                            <li><a href="#overview">Overall Overview</a></li>
                            <li><a href="#shortcomings">Shortcomings</a></li>
                            <li><a href="#construction">Design and Construction</a></li>
                            <li><a href="#conclusion">Conclusion</a></li>
                        </ul>
                    </nav>
                </div>
                <img className="imageProp" src={Overall} alt="Filament Recycler Icon" id="mainIMG" style={{height:'20em',width:'auto',borderRadius:'1.5em'}}/>
            </div>
            <section id="introduction" className="grouped-section">
                <h1>Introduction</h1>
                <div className="alignImage flex flex-col lg:flex-row">
                    <img className="imageProp " src = {FilementWaste} style={{height:'20em',width:'auto',borderRadius:'1.5em', marginBottom:'1em'}}alt="sample image" />
                <p>
                    3D printing enthusiasts often face the issue of filament waste, which not only impacts the environment but also adds 
                    to the cost of 3D printing. Commertially available filament recyclers are very expensive, which inturn makes the premium for
                    sustinability quite high, which is resulting in the wastage of a lot of potentially usefull material going into landfills.
                    <br/><br/>Sustinability being one of the main mottos of <b> <i>Augmented Labs</i></b> we attempted to develop a recycler for 3d printer just under 100$ (we came close)
                </p>
                </div>
            </section>
            <section id="overview" className="grouped-section">
            <h1 >Overall Overview</h1>
                <p >
                    The filament recycler is composed of a few key parts: 
                    <ul>
                        <li>Shredder: Breaks Large pieces of materials into smaller chunks</li>
                        <li>Grinder: Further converts shredded chunks into finer grains</li>
                        <li>Moulder: Heats and shapes grins into the standard 1.75mm diameter filament tube</li>
                        <li>Spooler: Wraps the filament onto a spool</li>
                        <li>Controll Hub: User interface to controll the system </li>
                    </ul>
                    <img className="imageProp"style={{height:'20em',width:'auto',borderRadius:'1.5em', marginTop:'2em'}} src={Steps} alt="Insert Process image here" />
                </p>
            </section>

            <section id="shortcomings" className="grouped-section">
                <h1>Shortcomings</h1>
                <p>
                    All the above mentioned parts were developed with multiple inspirations, aqcuiring the parts needed to build them, and cost in mind. We managed to get the Shredder, Grinder, 
                    and Spooler working. <b>But the Moulder we designed did not work as it was intended.</b><br/><br/> We would love to say that we are working on it, but trush be told we ran out of resources; both money and time.
                    Moulders are available Commertially, tho this will drive the cost of the overall setup higher, it will still remain cheaper then most of the Commertially available filament recyclers.
                </p>
            </section>
            <section id="construction">
            <h1 style={{ 
                fontWeight: 'bold', // or '800' for a heavier weight
                fontSize: '1.8em',
                marginTop: '1.5em',
                marginBottom: '0.5em' ,
            }}>Design and Construction</h1>
                <h3 style={{fontWeight:'bold'}}>Jump to:</h3>
                <ul style={{
                    listStyleType: 'none',
                    paddingLeft: '2em',
                    color: '#bbb',
                    marginBottom: '2em'
                }}>
                    <li style={{ marginBottom: '0.5em' }}>
                    <a href="#shredder" style={{
                        color: '#bbb',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'color 0.3s'
                    }} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = '#bbb'}>
                        Shredder:
                    </a>
                    </li>
                    <li style={{ marginBottom: '0.5em' }}>
                    <a href="#grinder" style={{
                        color: '#bbb',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'color 0.3s'
                    }} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = '#bbb'}>
                        Grinder:
                    </a>
                    </li>
                    <li style={{ marginBottom: '0.5em' }}>
                    <a href="#moulder" style={{
                        color: '#bbb',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'color 0.3s'
                    }} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = '#bbb'}>
                        Moulder:
                    </a>
                    </li>
                    <li style={{ marginBottom: '0.5em' }}>
                    <a href="#spooler" style={{
                        color: '#bbb',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'color 0.3s'
                    }} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = '#bbb'}>
                        Spooler:
                    </a>
                    </li>
                    <li style={{ marginBottom: '0.5em' }}>
                    <a href="#controllHub" style={{
                        color: '#bbb',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'color 0.3s'
                    }} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = '#bbb'}>
                        Controll Hub:
                    </a>
                    </li>
                </ul>
                <section id="shredder" className="part-section">
                    <h2>Shredder</h2>
                     <p className="desc" >Shredding is the first step in converting waste into reusable filament by breaking down large materials like support structures into smaller, manageable pieces for further processing.</p>
                    
                    <div className="Views">
                        <img className="imageProp" src={ShredderTop} alt="Shredder Outcome Image" />
                        <img className="imageProp" src={ShredderIsometric} alt="Shredder Outcome Image" />
                        <img className="imageProp" src={ShredderFront} alt="Shredder Outcome Image" />
                    </div>
                    

                    <h3>Parts Needed:</h3>
                    <ul>
                        <li><a href="https://robu.in/product/jgb37-555-dc12v-high-torque-dc-low-speed-reduction-motor/" target="_blank">Motor</a></li>
                        <li><a href="https://www.flyrobo.in/flanged-coupling-for-6mm-shaft-motor-shaft-coupling?search=Flanged+Coupling+for+6mm+shaft+motor+-+Shaft+Coupling&description=true" target="_blank">Motor shaft Coupler</a></li>
                        <li><a href="https://robocraze.com/products/radial-ball-bearing-623zz-for-3d-printer?_pos=1&_sid=9230ec6f2&_ss=r" target="_blank">Bearings(size 1)</a></li>
                        <li><a href="https://robocraze.com/products/radial-ball-bearing-623zz-for-3d-printer?_pos=1&_sid=9230ec6f2&_ss=r" target="_blank">Bearings(size 2)</a></li>
                        <li><a href="" target="_blank">Bolts and nuts</a></li>
                    </ul>

                    <h3>Download 3D Files:</h3>
                    <ul>
                        <li><a href="https://drive.google.com/drive/folders/1FbYOh1U-1qsz6xsLmBkFtnbExtL-YjDY?usp=drive_link" target="_blank">Shredder bearing supports, spacers and gears(3d pritned)</a></li>
                        <li><a href="https://drive.google.com/drive/folders/1FbYOh1U-1qsz6xsLmBkFtnbExtL-YjDY?usp=drive_link" target="_blank">Shredder body(MDF/3d pritned)+Acrylic</a></li>
                        <li><a href="https://drive.google.com/drive/folders/1Ply5yaffUZpCbbJTlC7FylNZoXEd6OtJ?usp=sharing" target="_blank">Shaft and knives (Laser Cut)</a></li>
                    </ul>

                    <h3>Process to Build:</h3>
                    <ul>
                        <li><b>Step 1- Acquiering all the parts:</b> 3 sides of the body are either made as 3d pritned supports or laser cut out of mdf(5.5mm). We have chosen 3 sides to be printed, and one side laser cut from an acrylic sheet. Get all the knives and shafts laser cut from metals. We have chosen Hardened steel(5mm), and we got it cut from <a href="https://www.robu.in" style={{color:'rgb(103, 140, 241)'}}>ROBU.in</a></li>
                        <li><b>Step 2- 3d Printing the gears:</b> We decided to 3d print the gears because it was not possible to metal laser cut them becuase of their small size, and mdf laser cut wouldnt be strong enough. We recommend printing using PETG filament, with gears having an infill of 100% with a wall count of 6, we even 3d pritned the shaft because of some time constraints. Shaft had a wall count of 5 with gyroid infill of 60%</li>
                        <li><b>Step 3- Assembing the shaft:</b> Insert the knives into the shaft, we reccomend offsetting the each knife in the shaft by an angle of 90 degrees. And add a 10mm spacer between each knife, offsett knife in each shaft by 2.5mm using the 2.5mm spacer in one shaft.  After inserting 8 knives to each of the shaft, insert the spacer for bearing at all the ends.</li>
                        <li><b>Step 4- Assembling the body:</b> Sandwitch the shaft with 2 sides of the body, and holding it in place glue the other other 2 sides to it, use the cad file as reference. Then again using the cad file as reference add the gears and the bearings. Use the coupler to attatch gear to the motor(If you look at what we have done, its very unconventional but works well) and attach the motor, and add the remaining plate on the motor, securing everything in place.</li>
                    </ul>

                   
                </section>

                <section id="grinder" className="part-section">
                <h2>Grinder</h2>
                <p className="desc">A grinder unit is required in the Filament recycling unit to get uniform-sized pellets like the ones we use while making fresh filament. This increases the quality of filament we receive in the end.</p>
                
                <div className="Views">
                    <img className="imageProp" src={GrinderIsometricNoCap} alt="Grinder Isometric View"/>
                    <img className="imageProp" src={GrinderIsometric} alt="Grinder Isometric View"/>
                    <img className="imageProp" src={GrinderFrontView} alt="Grinder Front View"/>
                </div>
                <h3>Parts Needed:</h3>
                <ul>
                    <li>Mixer grinder blade (as shown in the image)</li>
                    <li>
                    <a href="https://robocraze.com/products/a2212-1000kv-bldc-brushless-motor?_pos=1&_sid=c69c3066a&_ss=r" target="_blank">
                        A2212 1000KV BLDC motor
                    </a>
                    </li>
                    <li>
                    <a href="https://robu.in/product/30a-bldc-esc-electronic-speed-controller" target="_blank">
                        SimonK 30A BLDC ESC
                    </a>
                    </li>
                    <li>
                    <a href="https://robu.in/product/towerpro-sg90-continuous-rotation-360-degree-servo-motor/" target="_blank">
                        SG90 continuous Servo motor
                    </a>
                    </li>
                    <li>
                    <a href="https://robocraze.com/products/2a-125v-ac-microswitch-kw10-z1p-limit-switch?_pos=1&_sid=932b151d9&_ss=r" target="_blank">
                        Limit switches
                    </a>
                    </li>
                    <li>3D printed + Laser cut enclosure</li>
                    <li>3D printed parts (files given in the blog)</li>
                    <li>Connectors/wires</li>
                </ul>

                <h3>Download 3D Files:</h3>
                <ul>
                    <li>
                    <a href="https://drive.google.com/drive/folders/1aqoEuq7GXNMb-fYAAutgu-OIEpj-la70?usp=sharing" target="_blank">
                        Grinder Housing (3D File)
                    </a>
                    </li>
                    <li>
                    <a href="https://drive.google.com/drive/folders/1aqoEuq7GXNMb-fYAAutgu-OIEpj-la70?usp=sharing" target="_blank">
                        Disc Mount (3D File)
                    </a>
                    </li>
                </ul>

                <h3>Process to Build:</h3>
                <ol>
                    <li>Print/laser cut the files (or take it as a reference and print your files).</li>
                    <li>Test the BLDC motor using a microcontroller; fiddle around with the code and "feel" the motor.</li>
                    <li>Once confident with the motor, start assembling. Make the body by using the four walls—don’t forget to place the motor base before securing the walls with glue or screws.</li>
                    <li>Insert the grinder base into the slots and attach the rack gears into their slot.</li>
                    <li>Insert the servos into their sockets and place the pinion gear into the shaft.</li>
                    <li>Align the grinder base, then insert the servo setup into the walls of the body.</li>
                    <li>If the grinder base isn’t opening and closing easily, sand the slots or add grease.</li>
                    <li>Glue the limit switches to the walls so they are pressed when the grinder base is open or closed.</li>
                    <li>Attach the BLDC motor to the motor base.</li>
                    <li>Test-run the code before attaching the blade.</li>
                    <li>After everything is running smoothly, attach the blade using the connector and covering provided. The grinder is now ready for use.</li>
                    <li>Friendly reminder: Put a cover on the body before turning on the grinder when there’s shredded plastic inside.</li>
                </ol>
                </section>
                <section id="moulder" className="part-section">
                    <h2>Moulder</h2>
                
                    <p className="desc">Heating and Filament making: This is the main component of recycling filament waste. Even though our model did not work, we would like to mention how we tried to achieve our goal. Out of all the 4 parts of our project, this was the only part where we were disappointed as we couldn't find an alternate/cost-effective method to melt and extrude the filament.</p>
                    <div className="Views">
                        <img className="imageProp" src={MoulderIsometricNoCap} alt="Moulder Isometric View"/>
                        <img className="imageProp" src={MoulderIsometric} alt="Moulder Isometric View"/>
                    </div>
                    <h3>Parts Needed:</h3>
                    <ul>
                        <li herf=""target="_blank">1-inch diameter GI pipe (main body)</li>
                        <li herf="" target="_blank">3D printing nozzle (drilled with a 1.7mm hole)</li>
                        <li herf="https://amzn.in/d/8IikZqp"target="_blank">Wooden auger bit</li>
                        <li herf="https://robocraze.com/products/radial-ball-bearing-623zz-for-3d-printer?_pos=1&_sid=9230ec6f2&_ss=r"target="_blank">Bearings</li>
                        <li herf=""target="_blank">3D printed/laser cut enclosure for the mechanism</li>
                        <li herf="https://robocraze.com/products/60-rpm-geared-motor?_pos=5&_psq=60+rpm+motor&_ss=e&_v=1.0"target="_blank">60rpm gear motor</li>
                        <li herf="https://robu.in/product/m274-360-degree-rotary-encoder-module-brick-sensor/"target="_blank">Rotary encoder</li>
                        <li herf=""target="_blank">Metal laser cuts to house the heating elements</li>
                        <li herf=""target="_blank">Heating element</li>
                        <li herf="https://robocraze.com/products/100k-ohm-ntc-3950-thermistor?_pos=1&_psq=100k+therm&_ss=e&_v=1.0"target="_blank">Thermistor</li>
                    </ul>
                
                    <h3>Process to Build:</h3>
                    <ol>
                        <li>We initially used a 1-inch galvanized pipe thinking it was strong, conductive, and cost-effective as it could be easily sourced from any hardware store.</li>
                        <li>We custom-cut the holes and slots in the pipe by visiting a nearby welding shop to modify the pipe according to our design.</li>
                        <li>We assembled all the planned parts and proceeded to test the heating of the pipe to check its performance with our PID algorithm.</li>
                        <li>Unfortunately, the heating element was not able to heat the entire GI pipe as intended, leading to disappointing results.</li>
                        <li>We then attempted to switch from a GI pipe to rolled-over tin cans, hoping that reducing the thickness would improve heat distribution.</li>
                        <li>Despite this change, the heating process still failed to achieve the desired output.</li>
                    </ol>
                
                    <p>You can see how we designed the body from the images attached to this blog.</p>
                
                    {/* <!-- Outcome Video -->
                    <!-- <h3>Outcome Video:</h3>
                    <div className="video-container">
                        <video className="dynamic-video" controls>
                            <source src="images/3dprinting.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div> --> */}
                </section>
                
                <section id="spooler" className="part-section"> 
                    <h2>Spooler</h2>
                    <p className="desc">After the filament is extruded from the moulder, the Spooler spools it around a spool. Spooler can even controll the diameter of the filament. </p>
                
                    <div className="Views">
                        <img className="imageProp" src={SpoolerIsometric} alt="Spooler Isometric View"/>
                        <img className="imageProp" src={SpoolerSide} alt="Spooler Side View"/>
                        <img className="imageProp" src={SpoolerFront} alt="Spooler Front View"/>
                    </div>
                
                    <h3>Parts Needed:</h3>
                    <ul>
                        <li><a href="https://robocraze.com/products/60-rpm-geared-motor?_pos=5&_psq=60+rpm+motor&_ss=e&_v=1.0" target="_blank">Motor</a></li>
                        <li><a href="" target="_blank">Empty Spool</a></li>
                        <li><a href="https://robu.in/product/6902zz-bearing-15x28x7-shielded-miniature-ball-bearings-4pcs/" target="_blank">Bearings</a></li>
                        <li><a href="https://robu.in/product/m274-360-degree-rotary-encoder-module-brick-sensor/" target="_blank">Rotary encoder</a></li>
                    </ul>

                    <h3>Download 3D Files:</h3>
                    <ul>
                        <li><a href="https://drive.google.com/drive/folders/1fSj_jPF-VQfIWg21DvuHG6MmqYdoYLDj?usp=sharing" target="_blank">Gears(3D print)</a></li>
                        <li><a href="https://drive.google.com/drive/folders/1fSj_jPF-VQfIWg21DvuHG6MmqYdoYLDj?usp=sharing" target="_blank">Self reversing screw(3D print)</a></li>
                        <li><a href="https://drive.google.com/drive/folders/1fSj_jPF-VQfIWg21DvuHG6MmqYdoYLDj?usp=sharing" target="_blank">Other parts(3D print)</a></li>
                        <li><a href="https://drive.google.com/drive/folders/1OGWMYZM4bb5p2vrxMlD_yHcpYKiiOYRc?usp=sharing" target="_blank">Body(Laser cut and acrylic)</a></li>
                    </ul>

                    <h3>Process to Build:</h3>
                    <ol>
                        <li>Print all the parts mentioned above</li>
                        <li>Get MDF and Acrylic laser cuts (This is only for dope looking purpose, this can be printed too)</li>
                        <li>Insert all the necessary bearings taking the CAD file as reference.</li>
                        <li>Insert an empy spool in the spool holder</li>
                        <li>Assemble the self reversing screw and attatch it to the bearing</li>
                        <li>Screw the motor nut onto the motor holder. Then Fit the appropriate gear onto the motor shaft.</li>
                    </ol>

                    {/* <h3>Outcome Video:</h3> 
                    <!-- <div className="video-container">
                        <video className="dynamic-video" controls>
                            <source src="images/3dprinting.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div> --> */}
                </section>

                <section id="controllHub" className="part-section">
                    <h2>Control Hub</h2>
                    <p className="desc"> This is the user interface through which users can set certain parameters.</p>
                    
                    <section id="spooler" className="part-section">
                    <div className="Views">
                        <img className="imageProp" src={ControlHub} alt="Control Hub View"/>
                        <img className="imageProp" src={Circuit} alt="Circuit View"/>
                    </div>
                    <h3>Parts Needed:</h3>
                    <ul>
                        <li><a href="https://robu.in/product/5v-lcd2002-display-with-blue-backlight/" target="_blank">LCD display</a></li>
                        <li><a href="https://robu.in/product/iic-i2c-serial-interface-adapter-module/" target="_blank">LCD display driver</a></li>
                        <li><a href="https://robu.in/product/m274-360-degree-rotary-encoder-module-brick-sensor/" target="_blank">Rotary encoder</a></li>
                        <li><a href="https://robu.in/product/6x6x5-tactile-push-button-switch/" target="_blank">Push Butoons</a></li>
                        <li><a href="https://robu.in/product/6-x-8-cm-universal-pcb-prototype-board-single-sided-2-54mm-hole-pitch/" target="_blank">Perf board</a></li>
                        <li><a href="https://amzn.in/d/3VN1S04" target="_blank">Transistor</a></li>
                        <li><a href="https://robu.in/product/irlz44n-mosfet-ic/" target="_blank">Mosfet</a></li>
                        <li><a href="https://robu.in/product/6-x-8-cm-universal-pcb-prototype-board-single-sided-2-54mm-hole-pitch/" target="_blank">Arduino</a></li>
                        <li><a href="https://robocraze.com/products/l298-motor-driver-board?_pos=1&_sid=887454617&_ss=r" target="_blank">H bridge</a></li>
                    </ul>
                    <h3>Outlook</h3>
                    <ul>
                        <li><h5>The control hub consists of 3 main menu:</h5></li>
                        <li>Set Temperature (filament dependant)</li>
                        <li>Set Speed       (of auger and spooler)</li>
                        <li>BLDC            (control motor and base) </li>
                    </ul>
                    <h3>Github link to the code:</h3>
                    <ul>
                        <li><a href="https://github.com/Saathwika2005/FIlamentRecyclingCode.git">Code to be uploaded to arduino</a></li>
                    </ul>
                    <h3>Work flow and Control mechanism</h3>
                    <ol>
                        <li>Shredded 3D waste is taken to the grinder where the small pellets are further ground into very fine pieces. The motor used in the grinder is a BLDC motor, which is controlled by an H-bridge. Users have the privilege of setting the motor speed,turning on and turning off the motor using the menu.
                        </li>
                        <li>After the grinding process is completed, the grinder base opens when the user selects the "Grinder Base Open" option in the menu. The plastic is then transferred to the hopper below.
                        </li>
                        <li>The plastic collected in the hopper is then transported to the hot-end with the help of an auger.
                        </li>
                        <li>The auger is rotated by a DC motor, which is controlled by an H-bridge. The speed of the auger is maintained at a fixed angular velocity(set by user) by implementing a PID algorithm.
                        </li>
                        <li>The hot-end is heated using three heating elements with progressively increasing temperatures. The temperature of each heating element is accurately controlled by using the PID algorithm. Users are allowed to choose the filament(PLA,ABS,PETG) in the SET TEMP’ option of the menu, thus selecting the corresponding melting temperature.If the user wishes to set the temperature manually,there’s a provision to do so.
                        </li>
                        <li>The extruded filament after being cooled, is spooled using a spooler, which ensures that the filament is spread evenly onto the spool. The speed of the spooler varies with the velocity of the extruded filament from the hot end. Additionally, the spooler's speed adjusts in response to increasing load and the radius of the filament being spooled.
                        </li>
                    </ol>
                    <h3>Control algorithm</h3>
                    
                        <ul><li>PID Algorithm: For controlling temperature of the hot end and the speed of auger
                            and spooler.It is a control loop mechanism that works by continuously calculating an error value as
                            the difference between a desired setpoint and a measured process variable.The PID
                            algorithm applies correction based on three parameters:</li></ul>
                        <ol>
                        <li>Proportional (P): This term produces an output value proportional to the current error.
                            The larger the error, the larger the proportional response.</li>
                        <li>Integral (I): This term accounts for past errors. It integrates the error over time, ensuring
                            that any accumulated error is corrected by adjusting the process control inputs.</li>
                        <li>    : This term predicts future errors based on the current rate of change. It
                            helps to dampen the system response and improve stability.</li>
                    </ol>
                </section>

            </section>
            <section id="conclusion" className="grouped-section">
                <h1>Conclusion</h1>
                <p>In conclusion, our 3D printer filament recycler offers an eco-friendly and cost-effective solution for makers and 3D printing enthusiasts. This way we attempted to reduce plastic waste and contribute to a more sustainable future for 3D printing. Our device is designed with simplicity and efficiency in mind. With this innovation, we hope to inspire others to embrace sustainability in their creative processes.
                    Feel free to tweak it based on your specific product features! 
                </p>
            </section>
        </section>
        </div>
    );
};

export default BlogPost;
