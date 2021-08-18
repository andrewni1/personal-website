import React from 'react'
import MyPic from '../pictures/myPic.png'
import './about.css'


function About() {
    return (
        <div className="about-container">
            <h1 className="header">About Me</h1>
            <div className="contents-container">
                <div className="contents">
                    <p className="desc">Hello, my name is Andrew! I am a sophomore attending Purdue University, seeking a Bachelor's Degree in Computer Science. 
                        My area of interest in the CS field lies in full stack development. I am always looking to create products with a seemless interface on
                        the frontend while providing product functionality on the backend. 
                        <br /> <br />
                        Some of my many interests include the stock market, blackjack, weight lifting, and poker.
                    </p>
                </div>
                <img className="picture" src={MyPic} alt="pic"/>
            </div>
        </div>
    )
}

export default About
