import React from 'react'
import SectionHead from '../../Section/SectionHead'
import './about.css'

const AboutMe =() => {
    return (
        
            <section className="about">
               <SectionHead heading ="About Me" subheading ="Get to Know me" />
                <div className="aboutDetails row">
                    <div className="col-md-6 myPicture">
                     
                    </div>

                    <div className="col-md-6 more">
                        <h3 className="info-header">Objective</h3>
                        <p className="sub-details">Results-oriented Web Application Developer and Software Developer with considerable training and enterprise experience in website design and layout in all stages of design, coding, and testing of Web applications, and in the formation, planning, and implementation of software.
                        </p>
                        <p className="sub-details">I had BSC in Mathematics from University of Ibadan, Ibadan Nigeria and a Diploma in Computer Science from Osun State College of Technology, Esa-Oke Nigeria.
                        </p>

                        <div className="highlight">
                            <h3 className="info-header">Here are few Highlights</h3>
                            <ul>
                                <li>I can build complete website with PHP/Laravel</li>
                                <li>I can build a responsive Front-End with React</li>
                                <li>I can build RESTful API</li>
                                <li>I can use manage Dayabase  use both SQL and NoSQL Database</li>
                                <li>I can build build website using Wordpress</li>
                                <li>I can teach/mentor student on web technologies</li>
                            </ul>

                            <div className="call-to-actions">
                <button className="btn hireMe">Hire Me</button>
                <button className="btn viewResume" style={{backgroundColor:'rgb(16, 3, 27)', border:'1px solid transparent'}}>View Resume</button>
              </div>
                        </div>
                    </div>

                </div>
            </section>
            
        
    )
}


export default  AboutMe