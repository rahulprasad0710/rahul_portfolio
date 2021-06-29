import "./footer.css";

import React from "react";

const Footer = () => {
    return (
        <div className="footerpage">
            <div className=" foooter-inner container">
                <div className="bottom-contact">
                    <h1>
                        Would you like to hire me?
                        <span className="awesome"> Awesome!</span>
                    </h1>
                    <span className="btn btn-contact">
                        <a href="#contact">Let's Talk.</a>
                    </span>
                </div>
            </div>
            <div className="reserved">
                <h1>All Right Reserverd. &#169; RAHUL </h1>
            </div>
        </div>
    );
};

export default Footer;
