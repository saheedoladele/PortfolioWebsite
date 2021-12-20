import React from 'react'
import SectionHead from '../../Section/SectionHead'
import JobComponent from './JobComponent'
import './resume.css'

const Resume =() => {
    return (
        <section className="resume">
        
        <SectionHead heading ="Resume" subheading ="My Work experience and skills" />
         <div className="aboutDetails row">
             <div className="col-md-4 menus">
                <ul>
                    <li className="active"> <i className="fa fa-briefcase"></i> Work Experience</li>
                    <li> <i className="fa fa-code"></i> Technical Skills</li>
                    <li> <i className="fa fa-cubes"></i> Projects</li>
                    <li> <i className="fa fa-graduation-cap"></i> Education</li>
                    <li> <i className="fa fa-trophy"></i> Interest</li>
                </ul>
             </div>
             <div className="col-md-8 resInfo" style={{overflow:'scroll'}}>
           <JobComponent company="VoguePay Digital" 
                        jobDate = "2020 - Present"
                        jobTitle ="Full Stack Developer"
                        desc1="As a full stack developer, i have participated in the development of three projects, some i worked on Back-End, and some as a Front-End. I am responsible for the building of App portal for propal reporting of the activities that happend on the APP" 
                        desc2="I worked closely with the UI/UX and Product Designer to build scalable and user acceptable Applications. I also help in organizing training for the staff and also in presentation to the merchants." />

<JobComponent company="TechSigma Nig." 
                        jobDate = "2016 - 2019"
                        jobTitle ="Web Developer"
                        desc1="I participated in every stages on web development, which include layout, design, coding and testing. I led team of developers to build number of projects." 
                        desc2="I also work as an Instructor, i teach and mentor good number of students on different web technologies and some programing languages" />     

</div>
         </div>
     </section>
    )
}

export default Resume
