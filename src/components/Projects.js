import React from 'react'
import Github from '../pictures/github.png'
import Python from '../pictures/python.png'
import ProjPic from '../pictures/projPic.png'
import ExternalLink from '../pictures/externalLink.png'
import './projects.css'

function Projects() {
    return (
        <div className="projects-container">
            <h1 className="header">Projects</h1>
            <div className="content-container">
                <img className="projects-icon" src={Python} alt="python"/>
                <div className="projects-header">
                    <h2 className="projects-org">Product Monitor</h2>
                    <h3 className="projects-link">https://github.com/andrewni1/product-monitor</h3>
                    <p className="projects-description">
                        - Developed an application with Python that monitors whether certain products are in stock or are restocking
                        on by scraping product details
                        <br />
                        - Utilized Discord.py to alert user of in-stock/restocking products through Discord webhooks
                        <br />
                        - Monitor alerts display product name, link, SKU, price, and an add to cart button which allow users to add the product straight to cart through the use of BestBuy's API
                        <br />
                        <p className="projects-technologies">Python | Discord.py</p>
                        <a href="https://github.com/andrewni1/product-monitor" target="_blank" rel="noreferrer"><img className="experience-github" src={Github} alt="github"/></a>
                    </p>
                </div>
            </div>
            <div className="content-two-container">
                <img className="projects-icon" src={ProjPic} alt="proj-pic"/>
                <div className="projects-header">
                    <h2 className="projects-org">Personal Website</h2>
                    <h3 className="projects-link">www.andrewni.com</h3>
                    <p className="projects-description">
                        - Developed a personal website by using the React.js framework
                        <br />
                        - Showcases my experience and the projects that I have worked on
                        <br />
                        <p className="projects-technologies">JavaScript | React.js</p>
                        <a href="https://github.com/andrewni1/personal-website" target="_blank" rel="noreferrer"><img className="experience-github" src={Github} alt="github"/></a>
                        <a href="https://andrewni.com/" target="_blank" rel="noreferrer"><img className="experience-github" src={ExternalLink} alt="external-link"/></a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects
