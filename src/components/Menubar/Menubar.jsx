import "./menubar.css";

import facebook from "../../img/assests/social/png/045-facebook.png";
import github from "../../img/assests/social/png/039-github.png";
import linkedin from "../../img/assests/social/png/031-linkedin.png";
import rahul from "../../img/rahuls.png";

const Menubar = ({ toggleMenu, setToggleMenu }) => {
    return (
        <div className={toggleMenu ? "menubar" : "menubar menubar-active"}>
            <div className="img-wrapper">
                <button
                    className="btn-close"
                    onClick={() => setToggleMenu(!toggleMenu)}>
                    <i class="far fa-times-circle"></i>
                </button>
                <div className="intro-img">
                    <img src={rahul} alt="rahul-img" />
                </div>
            </div>
            <ul className="navbar_nav-menu">
                <li
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className="navbar_nav-menu-item">
                    <a className="navbar_nav-menu-item-link" href="#intro">
                        HOME
                    </a>
                </li>

                <li
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className="navbar_nav-menu-item">
                    <a className="navbar_nav-menu-item-link" href="#about">
                        ABOUT
                    </a>
                </li>
                <li
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className="navbar_nav-menu-item">
                    <a className="navbar_nav-menu-item-link" href="#resume">
                        RESUME
                    </a>
                </li>
                <li
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className="navbar_nav-menu-item">
                    <a className="navbar_nav-menu-item-link" href="#project">
                        PROJECTS
                    </a>
                </li>

                <li
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className="navbar_nav-menu-item">
                    <a
                        className="navbar_nav-menu-item-link"
                        activeClassName="navLink-active"
                        href="#contact">
                        CONTACT
                    </a>
                </li>
            </ul>
            <div className="menubar-footer">
                <h2>
                    <span>
                        <i class="fas fa-phone"></i>
                    </span>{" "}
                    +977 9819828300
                </h2>
                <h2>
                    <span>
                        <i class="far fa-envelope"></i>
                    </span>{" "}
                    raulshah2021@hotmail.com
                </h2>

                <ul className="social-item">
                    <li>
                        <a href="/">
                            <img
                                className="social-icon"
                                src={facebook}
                                alt="facebook"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img
                                className="social-icon"
                                src={linkedin}
                                alt="LinkedIn"
                            />
                        </a>
                    </li>

                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/rahulprasad0710">
                            <img
                                className="social-icon"
                                src={github}
                                alt="github"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menubar;
