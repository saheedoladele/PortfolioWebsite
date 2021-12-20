import React from 'react'

 const JobComponent =(props) => {
     const { jobTitle, jobDate, company, desc1, desc2} = props
    return (
       <>
        <div className="top">
            <div className="icon"></div>
            <h3 className="titles">{company}</h3>
            <div className="dates">{jobDate}</div>
        </div>
        <div className="workDetails">
           <h3 className="jobTitle">{jobTitle}</h3>
           <p className="jobDesciption">{desc1}</p>
           <p className="jobDesciption">{desc2}</p>

    </div>
    </>
    )
}
export default JobComponent
