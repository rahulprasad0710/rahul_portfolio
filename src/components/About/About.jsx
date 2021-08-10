import "./about.css";

import React from "react";
import rahul from "../../img/rahuls.png";

const About = () => {
    return (
        <div id="about" className="about-container">
            <h2>About Me</h2>
            <div className="about__inside-container container-md">
                <div className="inside-container-c c1">
                    <div className="about-img">
                        <img src={rahul} alt="rahul-img" />
                    </div>
                </div>
                <div className="about__inside-container-c c2">
                    <h3 className="about_heading">
                        {" "}
                        Hello, My name is Rahul Prasad.
                    </h3>
                    <p className="about-page-para">
                        <span>
                            I am MERN Stack who want to excel in Life by
                            thinking out of the box. I want to work with maximum
                            potential in a challenging and dynamic environment,
                            with an opportunity of working with diverse group of
                            people and enhancing my professional skills with
                            learning and experience for career growth.
                        </span>
                    </p>
                    <p className="about-page-para"></p>
                </div>
            </div>
        </div>
    );
};

export default About;
