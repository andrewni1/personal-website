import React from 'react'
import BestBuy from '../pictures/bestbuy.png'
import Github from '../pictures/github.png'
import Fibro from '../pictures/fibro.png'
import Port from '../pictures/port.png'
import ProjPic from '../pictures/projPic.png'
import ExternalLink from '../pictures/externalLink.png'
import './projects.css'

function Projects() {
    return (
        <div className="projects-container">
            <h1 className="header">Personal Projects</h1>
            <div className="content-container">
                <img className="projects-icon" src={Port} alt="port"/>
                <div className="projects-header">
                    <h2 className="projects-org">Port</h2>
                    <h3 className="projects-link">
                        <a className="project-link" href="https://port-andrewni.vercel.app/" target="_blank" rel="noreferrer">port-andrewni.vercel.app</a>
                    </h3>
                    <p className="projects-description">
                        • Developed a <b>web application</b> that allows a user to visualize an ethereum-based wallet's total ERC-20 token and NFT net worth
                        <br />
                        • Implemented <b>Ethers.js</b> to enable Metamask wallet connection and retrieval of a wallet's ethereum balance
                        <br />
                        • Fetched current ethereum price and a wallet's NFT data (assets owned, collections owned, price) by utilizing Coingecko and Opensea <b>API calls</b> with <b>Axios</b>
                        <br />
                        • Utilized <b>React.js</b> as the front-end framework of the application for enhanced performance and flexibility
                        <br />
                        <p className="projects-technologies">Axios | Ethers.js | React.js</p>
                        <a href="https://github.com/andrewni1/port" target="_blank" rel="noreferrer"><img className="experience-github" src={Github} alt="github"/></a>
                        <a href="https://port-andrewni.vercel.app/" target="_blank" rel="noreferrer"><img className="experience-github" src={ExternalLink} alt="external-link"/></a>
                    </p>
                </div>
            </div>
            <div className="content-two-container">
                <img className="projects-icon" src={Fibro} alt="fibro"/>
                <div className="projects-header">
                    <h2 className="projects-org">Fibro</h2>
                    <h3 className="projects-link">
                        <a className="project-link" href="https://fibro.dev/" target="_blank" rel="noreferrer">fibro.dev</a>
                    </h3>
                    <p className="projects-description">
                        • Developed a <b>full-stack web application</b> that allows authenticated users to record their product inventory with details such as product name, price, and group
                        <br />
                        • Utilized <b>Next.js</b> to allow for enhanced user experience and application performance with Next.js's server-side rendering and static site generation
                        <br />
                        • Applied <b>Firebase Authentication</b> to allow users to create or sign into an authenticated account, providing privacy and security of information
                        <br />
                        • Employed <b>Firebase Firestore</b> to create a database to handle and store user requests, allowing data to be displayed to authenticated users with every session
                        <br />
                        <p className="projects-technologies">Firebase | Next.js | Node.js</p>
                        <a href="https://github.com/andrewni1/fibro" target="_blank" rel="noreferrer"><img className="experience-github" src={Github} alt="github"/></a>
                        <a href="https://fibro.dev/" target="_blank" rel="noreferrer"><img className="experience-github" src={ExternalLink} alt="external-link"/></a>
                    </p>
                </div>
            </div>
            <div className="content-two-container">
                <img className="projects-icon" src={BestBuy} alt="bestbuy"/>
                <div className="projects-header">
                    <h2 className="projects-org">BestBuy Product Monitor</h2>
                    <h3 className="projects-link">
                        <a className="project-link" href="https://github.com/andrewni1/product-monitor" target="_blank" rel="noreferrer">https://github.com/andrewni1/product-monitor</a>
                        </h3>
                    <p className="projects-description">
                        • Developed an application with <b>Python</b> that monitors whether certain products are in stock or are restocking on BestBuy
                        by scraping product details with the use of <b>Beautiful Soup</b>
                        <br />
                        • Utilized <b>Discord.py</b> to send alerts to users of in-stock/restocking products through Discord webhooks
                        <br />
                        • Monitor alerts display a product's name, link, SKU, price, and an `Add to cart` button to allow users to add the product straight to cart by utilizing BestBuy's <b>API</b> endpoint
                        <br />
                        • Products can be monitored by inputting the product link into the bestBuyLinks.txt file
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
                        • Developed a personal website with the use of <b>React.js</b>
                        <br />
                        • Showcases my work experience and personal projects I have worked on
                        <br />
                        <p className="projects-technologies">React.js</p>
                        <a href="https://github.com/andrewni1/personal-website" target="_blank" rel="noreferrer"><img className="experience-github" src={Github} alt="github"/></a>
                        <a href="https://andrewni.com/" target="_blank" rel="noreferrer"><img className="experience-github" src={ExternalLink} alt="external-link"/></a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects
