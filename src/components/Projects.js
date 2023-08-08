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
                        • Architected a React.js-based web interface to elucidate an Ethereum wallet’s aggregate value, encompassing both ERC-20 assets and NFT holdings
                        <br />
                        • Integrated Ethers.js protocols to facilitate seamless Metamask connections, ensuring precise retrieval of on-chain Ethereum balances
                        <br />
                        • Leveraged Coingecko and Opensea API integrations via Axios, ensuring real-time data acquisition for Ethereum valuation and comprehensive NFT asset analytics
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
                        • Developed a full-stack web application, allowing authenticated users to catalog their product inventory, encompassing details like nomenclature, pricing, and categorization
                        <br />
                        • Leveraged Next.js, enhancing application performance through server-side rendering and static site generation
                        <br />
                        • Applied <b>Firebase Authentication</b> to allow users to create or sign into an authenticated account, providing privacy and security of information
                        <br />
                        • Integrated Firebase tools, utilizing Authentication for robust user sign-ins and Firestore as a database backend, managing product entries and ensuring consistent data presentation across user sessions
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
                        • Architected a Python-driven application, leveraging Beautiful Soup, to meticulously surveil inventory dynamics on BestBuy, enabling real-time insights into product availability and restocking events
                        <br />
                        • Seamlessly integrated Discord.py, transmitting timely and crucial inventory alerts to users via Discord webhooks, thus elevating user engagement and responsiveness
                        <br />
                        • Facilitated a user-centric monitoring experience by featuring pivotal product data such as name, link, SKU, and price, and by ingeniously integrating an 'Add to Cart' functionality using BestBuy's API, all powered by simply populating the bestBuyLinks.txt file
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
