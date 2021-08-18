import React from 'react'
import HTF from '../pictures/hackthefuture.png'
import Github from '../pictures/github.png'
import './experience.css'

function Experience() {
    return (
        <div className="experience-container">
            <h1 className="header">Experience</h1>
            <div className="content-container">
                <img className="experience-icon" src={HTF} alt="htf"/>
                <div className="experience-header">
                    <h3 className="experience-role">Frontend Developer</h3>
                    <h2 className="experience-org">Hack The Future</h2>
                    <h3 className="experience-timeframe">Sept. 2020 - May 2021</h3>
                    <p className="experience-description">
                        - Developed a web application using JavaScript, EJS, and Materialize which allows employees at 
                        Jessie's Kids Foundation to request funding and board members to approve or disapprove requests
                        <br />
                        - Created interface for pages (login, request form, forgot password, etc.) through the utilization of EJS
                        <br />
                        - Utilized Materialize to create a responsive front-end framework
                        <br />
                        <p className="experience-technologies">JavaScript | EJS | Materialize</p>
                        <a href="https://github.com/Hack-the-Future/jessies-kids-foundation" target="_blank" rel="noreferrer"><img className="experience-github" src={Github} alt="github"/></a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience
