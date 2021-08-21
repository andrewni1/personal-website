import React from 'react'
import Github from '../pictures/github.png'
import Fibro from '../pictures/fibro.png'
import Python from '../pictures/python.png'
import ProjPic from '../pictures/projPic.png'
import ExternalLink from '../pictures/externalLink.png'
import './projects.css'

function Projects() {
    return (
        <div className="projects-container">
            <h1 className="header">Projects</h1>
            <div className="content-container">
                <img className="projects-icon" src={Fibro} alt="fibro"/>
                <div className="projects-header">
                    <h2 className="projects-org">Fibro</h2>
                    <h3 className="projects-link">
                        <a className="project-link" href="https://fibro.dev/" target="_blank" rel="noreferrer">fibro.dev</a>
                    </h3>
                    <p className="projects-description">
                        • Developed a full stack web application that allows authenticated users to record their product inventory with details such as product name, price, and group
                        <br />
                        • Utilized Next.js to allow for enhanced user experience and application performance through the use of Next.js's server side rendering and static site generation
                        <br />
                        • Applied Firebase Authentication to allow users to create or sign in to an authenitcated account, providing privacy and security of information
                        <br />
                        • Employed Firebase Firestore to create a database to handle and store user requests, allowing data to be displayed to authenticated users with each and every session
                        <br />
                        <p className="projects-technologies">JavaScript | Next.js | Firebase | Node.js</p>
                        <a href="https://github.com/andrewni1/fibro" target="_blank" rel="noreferrer"><img className="experience-github" src={Github} alt="github"/></a>
                        <a href="https://fibro.dev/" target="_blank" rel="noreferrer"><img className="experience-github" src={ExternalLink} alt="external-link"/></a>
                    </p>
                </div>
            </div>
            <div className="content-two-container">
                <img className="projects-icon" src={Python} alt="python"/>
                <div className="projects-header">
                    <h2 className="projects-org">Product Monitor</h2>
                    <h3 className="projects-link">https://github.com/andrewni1/product-monitor</h3>
                    <p className="projects-description">
                        • Developed an application with Python that monitors whether certain products are in stock or are restocking on BestBuy
                        by scraping product details with the use of Beautiful Soup
                        <br />
                        • Utilized Discord.py to send alerts to users of in-stock/restocking products through Discord webhooks
                        <br />
                        • Monitor alerts display a product's name, link, SKU, price, and an `Add to cart` button to allow users to add the product straight to cart by utilizing BestBuy's API endpoint
                        <br />
                        • Any product can be monitored by inputing the link into the bestBuyLinks.txt file
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
                    <h3 className="projects-link">
                        <a className="project-link" href="https://andrewni.com/" target="_blank" rel="noreferrer">andrewni.com</a>
                    </h3>
                    <p className="projects-description">
                        • Developed a personal website with the use of React.js
                        <br />
                        • Showcases my experience and the projects that I have worked on
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
