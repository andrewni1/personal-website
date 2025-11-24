import React from 'react'
import './about.css'

function About() {
    return (
        <div className="about-container">
            <h1 className="header">About Me</h1>
            <div className="contents-container">
                <div className="contents">
                    <p className="desc">
                        Hey! I'm <b>Andrew Ni</b>. I recently transitioned into a full-time engineering role and currently work as a <b>Software Engineer II at Walmart Global Tech</b> on the <b>Location Catalog Team</b> (July 2024 — Present).
                        I build internal tooling and production services that improve store location data, operational workflows, and supply chain alignment.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
