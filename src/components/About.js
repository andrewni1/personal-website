import React from 'react'
import MyPic from '../pictures/myPic.png'
import './about.css'


function About() {
    return (
        <div className="about-container">
            <h1 className="header">About Me</h1>
            <div className="contents-container">
                <div className="contents">
                    <p className="desc">Hello, my name is <b>Andrew</b>! I am a sophomore attending Purdue University, seeking a <b>Bachelor's Degree</b> in <b>Computer Science</b>. 
                        My area of interest in the CS field lies in <b>Full Stack Development</b>. I am always looking to create products with a seemless interface on
                        the Frontend while implementing functionality on the Backend. 
                        <br /> <br />
                        Some of my interests include Personal Finance, Blackjack, Weightlifting, and Web3.
                    </p>
                </div>
                <img className="picture" src={MyPic} alt="pic"/>
            </div>
        </div>
    )
}

export default About
