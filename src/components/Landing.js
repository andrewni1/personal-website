import React from 'react'
import Email from '../pictures/email.png'
import Github from '../pictures/github.png'
import LinkedIn from '../pictures/linkedin.png'
import ResumeIcon from '../pictures/resumeIcon.png'
import Resume from '../documents/Andrew_Ni_Resume.pdf'
import MyPic from '../pictures/myPic.png'
import './landing.css'

function Landing() {
    return (
        <div className='landing-container'>
            <div className="text-container">
                <h4 className="intro">Hello, I'm</h4>
                <h1 className="name">Andrew.</h1>
                <h1 className="short-desc">Student and Developer at Purdue University.</h1>
                <div className="contact-icons">
                    <a href="mailto:ni95@purdue.edu" target="_blank" rel="noreferrer" title="Email"><img className="icon" src={Email} alt="email"/></a>
                    <a href="https://github.com/andrewni1" target="_blank" rel="noreferrer" title="GitHub"><img className="icon" src={Github} alt="github"/></a>
                    <a href="https://www.linkedin.com/in/andrew-ni-7809b01a6/" target="_blank" rel="noreferrer" title="LinkedIn"><img className="icon" src={LinkedIn} alt="linkedin"/></a>
                    <a href={Resume} target="_blank" rel="noreferrer" title="Resume"><img className="icon" src={ResumeIcon} alt="resume"/></a>
                </div>
            </div>
            <div className='img-container'>
                <img className="pic" src={MyPic} alt="pic"/>
            </div>
        </div>
    )
}

export default Landing
