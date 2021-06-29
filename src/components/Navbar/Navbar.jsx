import "../Navbar/navbar.css";

import React, { useState } from "react";

const Navbar = ({ toggleMenu, setToggleMenu }) => {
    const [bgChange, setBGChange] = useState(false);
    const changeBG = () => {
        if (window.scrollY >= 100) {
            setBGChange(true);
        } else {
            setBGChange(false);
        }
    };

    window.addEventListener("scroll", changeBG);

    return (
        <nav className={bgChange ? "navbar bgShadow " : "navbar "}>
            <div className="navbar_nav-container container-lg">
                <div className="navbar_brandName">
                    <a className="brandText" href="#intro">
                        {" "}
                        <span>
                            <i class="fas fa-home"></i>
                        </span>{" "}
                    </a>
                </div>
                <div className="navbar_info">
                    <h1>
                        {" "}
                        <span>
                            <i class="fas fa-phone"></i>
                        </span>{" "}
                        +977 9819828300
                    </h1>
                    <h1>
                        <span>
                            <i class="far fa-envelope"></i>
                        </span>{" "}
                        raulshah2021@hotmail.com
                    </h1>
                </div>

                <div className="hire-burger">
                    <a className="btn btn-about" href="#contact">
                        HIRE ME
                    </a>

                    <div
                        className="navbar_toogle-btns"
                        onClick={() => setToggleMenu(!toggleMenu)}>
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
