import React from 'react'
import Email from '../pictures/email.png'
import Github from '../pictures/github.png'
import LinkedIn from '../pictures/linkedin.png'
import './landing.css'

function Landing() {
    return (
        <div className="landing-container">
            <h4 className="intro">Hi, my name is</h4>
            <h1 className="name">Andrew Ni.</h1>
            <h1 className="short-desc">Student at Purdue University.</h1>
            <p className="desc">I'm an aspiring software engineer with a focus in full stack development. 
            I am currently open to internship opportunities, so feel free to contact me! In the meantime, 
            you can learn more about me by scrolling through my website!</p>
            <div className="contact-icons">
                <a href="mailto:ni95@purdue.edu" target="_blank" rel="noreferrer"><img className="icon" src={Email} alt="email"/></a>
                <a href="https://github.com/andrewni1" target="_blank" rel="noreferrer"><img className="icon" src={Github} alt="github"/></a>
                <a href="https://www.linkedin.com/in/andrew-ni-7809b01a6/" target="_blank" rel="noreferrer"><img className="icon" src={LinkedIn} alt="linekdin"/></a>
            </div>
        </div>
    )
}

export default Landing
