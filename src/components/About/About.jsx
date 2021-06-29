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
                    <p className="about-page-para">
                        Hello, My name is Rahul Prasad.
                        <br />
                        repellat? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Earum sint velit doloribus beatae
                        commodi facilis. Maxime totam,
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
