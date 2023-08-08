import React from 'react'
import './about.css'


function About() {
    return (
        <div className="about-container">
            <h1 className="header">About Me</h1>
            <div className="contents-container">
                <div className="contents">
                    <p className="desc">Hello, my name is <b>Andrew Ni</b>! I am a senior attending Purdue University, seeking a <b>Bachelor's Degree</b> in <b>Computer Science</b>. 
                        My area of interest in the CS field lies in <b>full stack development</b>. I'm always looking to develop products with an appealing user interface on
                        the <b>frontend</b> while implementing seemless functionality on the <b>backend</b>. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
