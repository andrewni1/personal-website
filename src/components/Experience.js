import React from 'react'
import HTF from '../pictures/hackthefuture.png'
import Estack from '../pictures/estack.png'
import Github from '../pictures/github.png'
import Walmart from '../pictures/walmart-global-tech-logo.jpg'
import './experience.css'

function Experience() {
    return (
        <div className="experience-container">
            <h1 className="header">Experience</h1>
            <div className="content-container">
                <img className="experience-icon" src={Walmart} alt="walmart"/>
                <div className="experience-header">
                    <h3 className="experience-role">Software Engineer Intern</h3>
                    <h2 className="experience-org">Walmart Global Tech</h2>
                    <h3 className="experience-timeframe">May 2023 - Aug. 2023</h3>
                    <p className="experience-description">
                        • Developed a multifaceted utility utilizing Spring Boot, Kafka, Cassandra, and Solr, proficiently synchronizing over 40 million records between the Cassandra and Solr databases, underpinned by a cron scheduler to allow for automation
                        <br />
                        • Implemented an email notification system, sending real-time notifications during synchronization milestones, ensuring informants were notified from initiation, through completion, to any encountered discrepancies
                        <br />
                        • Orchestrated a user-centric utility, facilitating the precise replication of data from 15+ Cassandra tables into designated destination tables across multiple development environments including dev, stage, and prod
                        <br />
                        • Anchored the solution’s front-end using React.js, while optimizing backend communication via Axios, ensuring seamless interaction with a Spring Boot backend
                        <br />
                        <p className="experience-technologies">Java | Spring Boot | React.js</p>
                    </p>
                </div>
            </div>
            <div className="content-container">
                <img className="experience-icon" src={Estack} alt="estack"/>
                <div className="experience-header">
                    <h3 className="experience-role">Software Engineer Intern</h3>
                    <h2 className="experience-org">Estack</h2>
                    <h3 className="experience-timeframe">Aug. 2021 - Nov. 2021</h3>
                    <p className="experience-description">
                        • Conceived and developed a real estate listing platform using React.js, Node.js, and MySQL
                        <br />
                        • Conceptualized and developed <b>front-end</b> website architecture
                        <br />
                        • Conceptualized a user-centric front-end architecture with React.js, enhancing the user experience and supporting an average of 5,000 daily active users from landing to dashboard interaction
                        <br />
                        • Incorporated a MySQL database, optimized for secure and efficient storage of over 25,000 user profiles and processing approximately 150,000 monthly engagement data points
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
                        • Engineered a robust full-stack web solution for Jessie’s Kids Foundation, streamlining 50+ monthly funding requests, utilizing Javascript, EJS, and Materialize for employee submissions and board member evaluations
                        <br />
                        • Deployed EJS and JavaScript to architect a front-end landscape, successfully handling 150+ daily users across login, request submissions, and password recovery pages
                        <br />
                        • Integrated Materialize, enhancing user experience with a 30% faster load time and a responsive design
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
