import React from 'react'
import Github from '../pictures/github.png'
import Python from '../pictures/python.png'
import './projects.css'

function Projects() {
    return (
        <div>
            <h1 className="header">Projects</h1>
            <div className="content-container">
                <img className="experience-icon" src={Python} alt="python"/>
                <div className="experience-header">
                    <h2 className="experience-org">Product Monitor</h2>
                    <h3 className="experience-timeframe">https://github.com/andrewni1/bestbuy-monitor</h3>
                    <p className="experience-description">
                        - Developed an application with Python that monitors whether certain products are in stock or are restocking
                        on by scraping product details
                        <br />
                        - Utilized Discord.py to alert user of in-stock/restocking products through Discord webhooks
                        <br />
                        - Monitor alerts display product name, link, SKU, price, and an add to cart button which allow users to add the product straight to cart through the use of BestBuy's API
                        <br />
                        <p className="experience-technologies">Python | Discord.py</p>
                        <a href="https://github.com/andrewni1/bestbuy-monitor" target="_blank" rel="noreferrer"><img className="experience-github" src={Github} alt="github"/></a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects
