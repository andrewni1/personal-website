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
                <h1 className="name">Andrew Ni</h1>
                <h2 className="short-desc">Software Engineer @ Walmart Global Tech</h2>
                <div className="contact-icons">
                    <a href="mailto:ni95@purdue.edu" target="_blank" rel="noreferrer" title="Email" aria-label="Email">
                        <img className="icon" src={Email} alt="email"/>
                    </a>
                    <a href="https://github.com/andrewni1" target="_blank" rel="noreferrer" title="GitHub" aria-label="GitHub">
                        <img className="icon" src={Github} alt="github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/andrewni1/" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="LinkedIn">
                        <img className="icon" src={LinkedIn} alt="linkedin"/>
                    </a>
                    <a href={Resume} target="_blank" rel="noreferrer" title="Resume" aria-label="Resume">
                        <img className="icon" src={ResumeIcon} alt="resume"/>
                    </a>
                </div>
            </div>
            <div className='img-container'>
                <img className="pic" src={MyPic} alt="Profile"/>
            </div>
        </div>
    )
}

export default Landing
