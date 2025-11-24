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
                <img className="experience-icon" src={Walmart} alt="Walmart Global Tech"/>
                <div className="experience-header">
                    <p className="experience-role">Software Engineer II</p>
                    <h2 className="experience-org">Walmart Global Tech</h2>
                    <p className="experience-timeframe">July 2024 — Present</p>
                    <ul className="experience-description">
                        <li>Built <b>ELM 2.0</b> (<b>Enterprise Location Master</b>) from the ground up: an internal tool for creating and modifying Walmart locations that processes 200+ location change requests per month.</li>
                        <li>Maintained <b>SDL</b> (<b>Store Directory Lookup</b>), a high-traffic internal app with 5,000+ daily visits that provides a quick and detailed view of store data across 40+ regions, and added new attributes for initiatives such as <b>EV charging</b> and <b>preferred manager name</b>.</li>
                        <li>Integrated <b>Automated CRQ</b> (<b>Change Request</b>) across 2+ applications, cutting production change lead time by ~80% through automated pipelines, approvals, and quality-control gates.</li>
                        <li>Implemented new <b>Sensory Friendly Hours</b> fields in <b>Location Hours Manager</b> to support modification and addition of sensory friendly shopping hours across all U.S. stores.</li>
                        <li>Expanded the <b>DC alignment tool</b> to international markets such as <b>Canada (CA)</b> and <b>Mexico (MX)</b>, aligning distribution centers with stores to improve supply chain management.</li>
                    </ul>
                    <p className="experience-technologies">React.js • Angular.js • Java • Spring Boot • Kafka • Cassandra</p>
                </div>
            </div>

            <div className="content-container">
                <img className="experience-icon" src={Walmart} alt="Walmart Global Tech"/>
                <div className="experience-header">
                    <p className="experience-role">Software Engineer Intern</p>
                    <h2 className="experience-org">Walmart Global Tech</h2>
                    <p className="experience-timeframe">May 2023 — August 2023</p>
                    <p className="experience-description">
                        • Developed a multifaceted utility utilizing <b>Spring Boot</b>, <b>Kafka</b>, <b>Cassandra</b>, and <b>Solr</b>, synchronizing <b>40M+ records</b> between databases with <b>automated cron scheduling</b>
                        <br />
                        • Implemented a <b>real-time email notification system</b> for synchronization milestones, notifying stakeholders from initiation through completion
                        <br />
                        • Orchestrated a user-centric utility for precise <b>data replication</b> across 15+ Cassandra tables in multiple environments (dev, stage, prod)
                        <br />
                        • Built a <b>React.js frontend</b> with <b>optimized Axios</b> backend communication for a Spring Boot service
                        <br />
                    </p>
                    <p className="experience-technologies">Java • Spring Boot • React.js • Kafka • Cassandra</p>
                </div>
            </div>

            <div className="content-container">
                <img className="experience-icon" src={Estack} alt="Estack"/>
                <div className="experience-header">
                    <p className="experience-role">Software Engineer Intern</p>
                    <h2 className="experience-org">Estack</h2>
                    <p className="experience-timeframe">August 2021 — November 2021</p>
                    <p className="experience-description">
                        • Conceived and developed a <b>real estate listing platform</b> using <b>React.js</b>, <b>Node.js</b>, and <b>MySQL</b>
                        <br />
                        • Architected a <b>user-centric frontend</b> supporting <b>5,000+ daily active users</b>
                        <br />
                        • Optimized <b>MySQL database</b> to securely store 25K+ user profiles and process 150K+ monthly engagement data points
                        <br />
                    </p>
                    <p className="experience-technologies">MySQL • Node.js • React.js</p>
                    <a href="https://github.com/Estack-industries/estack-app" target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                        <img className="experience-github" src={Github} alt="github"/>
                    </a>
                </div>
            </div>

            <div className="content-container">
                <img className="experience-icon" src={HTF} alt="Hack The Future"/>
                <div className="experience-header">
                    <p className="experience-role">Frontend Developer</p>
                    <h2 className="experience-org">Purdue Hack The Future</h2>
                    <p className="experience-timeframe">September 2020 — May 2021</p>
                    <p className="experience-description">
                        • Engineered a robust <b>full-stack web solution</b> for <b>Jessie's Kids Foundation</b>, streamlining 50+ monthly funding requests
                        <br />
                        • Built <b>responsive frontend</b> using <b>JavaScript</b> and <b>EJS</b>, handling <b>150+ daily users</b> across login, submissions, and recovery pages
                        <br />
                        • Enhanced UX with <b>Materialize</b>, achieving <b>30% faster load times</b> and responsive design
                        <br />
                    </p>
                    <p className="experience-technologies">JavaScript • EJS • Materialize</p>
                    <a href="https://github.com/Hack-the-Future/jessies-kids-foundation" target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                        <img className="experience-github" src={Github} alt="github"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Experience
