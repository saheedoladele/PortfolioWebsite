import React from 'react'

const  SectionHead =(props) => {
    const { heading, subheading } = props
    return (
       <div>
            <div className="title">
        {heading}
    </div>
    <div className="brief">
        {subheading}
    </div>
    <hr className="lines" />
    <hr className="subSpan" />
       </div>
    )
}

export default SectionHead;
