import React from 'react'
import HTF from '../pictures/hackthefuture.png'
import Estack from '../pictures/estack.png'
import Github from '../pictures/github.png'
import './experience.css'

function Experience() {
    return (
        <div className="experience-container">
            <h1 className="header">Work Experience</h1>
            <div className="content-container">
                <img className="experience-icon" src={Estack} alt="estack"/>
                <div className="experience-header">
                    <h3 className="experience-role">Full Stack Developer</h3>
                    <h2 className="experience-org">Estack</h2>
                    <h3 className="experience-timeframe">Aug. 2021 - Nov. 2021</h3>
                    <p className="experience-description">
                        • Developed a <b>full-stack</b> real estate listing web application with the use of <b>React.js</b>, <b>Node.js</b>, and <b>MySQL</b>
                        <br />
                        • Conceptualized and developed <b>front-end</b> website architecture
                        <br />
                        • Leveraged <b>React.js</b> for the creation of a responsive user interface (landing page, login and registration pages, and user dashboard)
                        <br />
                        • Employed <b>MySQL</b> as a database to store user information
                        <br />
                        <p className="experience-technologies">MySQL | Node.js | React.js</p>
                        <a href="https://github.com/Estack-industries/estack-app" target="_blank" rel="noreferrer"><img className="experience-github" src={Github} alt="github"/></a>
                    </p>
                </div>
            </div>
            <div className="content-container">
                <img className="experience-icon" src={HTF} alt="htf"/>
                <div className="experience-header">
                    <h3 className="experience-role">Frontend Developer</h3>
                    <h2 className="experience-org">Purdue Hack The Future</h2>
                    <h3 className="experience-timeframe">Sept. 2020 - May 2021</h3>
                    <p className="experience-description">
                        • Developed a <b>full-stack web application</b> utilizing <b>Javascript</b>, <b>EJS</b>, and <b>Materialize</b> to allow employees at 
                        <b> Jessie's Kids Foundation</b> to request funding and for board members to approve or disapprove any incoming requests
                        <br />
                        • Implemented the <b>front-end</b> architecture of the web pages (login, request form, forgot password, etc.) by utilizing <b>EJS</b> and <b>JavaScript</b>
                        <br />
                        • Leveraged <b>Materialize</b> to style the web pages (login, request form, etc.) and to create a seamless and responsive front-end framework
                        <br />
                        • Attended multiple stand-ups throughout the week to update the team on my progress and address any concerns and/or problems that have arisen
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
