import "./intro.css";
import "react-simple-typewriter/dist/index.css";

import Particles from "react-particles-js";
import React from "react";
import Typewriter from "react-simple-typewriter";
import { motion } from "framer-motion";

// import rahul from "../img/rahuls.png";

const particlesOpt = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#0000",
            },
            polygon: {
                nb_sides: 5,
            },
            image: {
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.3,
            random: false,
            anim: {
                enable: false,
                speed: 10,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 6,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00cdab46",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "repulse",
            },
            onclick: {
                enable: false,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
};

const Intro = () => {
    return (
        <div id="intro" className="intro-container ">
            <Particles
                params={particlesOpt}
                className="App-particles__container"
            />
            <div className="intro-info">
                <motion.h3
                    initial={{ x: "-100vw" }}
                    transition={{ ease: "easeOut", duration: 1.2 }}
                    animate={{ x: "0vw" }}>
                    Hi,My name is
                    <motion.span className="text-color-intro">
                        {" "}
                        Rahul Prasad.
                    </motion.span>
                </motion.h3>
                <motion.h3
                    initial={{ x: "100vw" }}
                    transition={{ ease: "easeOut", delay: 1.2, duration: 1.2 }}
                    animate={{ x: "0vw" }}>
                    I'm a{" "}
                    <motion.span className="text-color-intro">
                        {" "}
                        <Typewriter
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={50}
                            deleteSpeed={30}
                            delaySpeed={3000}
                            words={[
                                "Web Developer.",
                                "Full Stack Developer.",
                                "MERN Stack Developer.",
                            ]}
                        />
                    </motion.span>{" "}
                </motion.h3>
            </div>
        </div>
    );
};

export default Intro;
