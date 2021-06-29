import "./contact.css";

import React, { useState } from "react";

import emailjs from "emailjs-com";

const Contact = () => {
    const [showMsg, setshowMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    function sendEmail(e) {
        e.preventDefault();

        if (!name || !email || !msg) {
            setErrorMsg(true);
            setTimeout(() => {
                setErrorMsg(false);
            }, 3000);
        } else {
            emailjs
                .sendForm(
                    "service_ioe505n",
                    "template_9mdw518",
                    e.target,
                    "user_TwlPDafGN8Z2AAArjpD7z"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );

            setshowMsg(true);
            e.target.reset();
        }
    }

    return (
        <section id="contact" className="contact-container">
            <h1 className="page-heading-dark">Contact</h1>

            <div className="contact-page-container container-md">
                <div className="left-container">
                    <h2>Get In Touch</h2>

                    <form className="contact-form-box" onSubmit={sendEmail}>
                        <div className="form-group">
                            <label>Enter your name* </label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                type="text"
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Enter your email* </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                name="email"
                            />
                        </div>
                        <div className="form-group">
                            <label>Enter your subject* </label>
                            <input type="text" name="subject" />
                        </div>
                        <div className="form-group form-text-area">
                            <label>Enter your message* </label>
                            <textarea
                                onChange={(e) => setMsg(e.target.value)}
                                value={msg}
                                className="textarea"
                                name="message"
                                id=""
                                cols="30"
                                rows="10"></textarea>
                        </div>
                        <button onSubmit={sendEmail} className="btn btn-about ">
                            SEND EMAIL <i class="far fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
                <div className="right-container">
                    <div className="address-container">
                        {showMsg && (
                            <p className="showMsg">
                                <i class="far fa-check-circle"></i> A message
                                has been sent to rahulprasad0710@gmail.com
                            </p>
                        )}
                        {errorMsg && (
                            <p className="errorMsg">
                                <i class="far fa-check-circle"></i> Please,
                                Enter all the fields.
                            </p>
                        )}
                        <div className="address">
                            <div className="address-icon">
                                <span>
                                    <i className="font-icon fas fa-phone"></i>
                                </span>
                            </div>
                            <div className="address-info">
                                <h1>Phone</h1>
                                <p>+997 9819828300</p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="address-icon">
                                <span>
                                    <i className="font-icon far fa-envelope"></i>
                                </span>
                            </div>
                            <div className="address-info">
                                <h1>Email</h1>
                                <p>raulshah2021@hotmail.com</p>
                                <p>rahulprasad0710@gmail.com</p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="address-icon">
                                <span>
                                    <i className="font-icon fas fa-map-marker-alt"></i>
                                </span>
                            </div>
                            <div className="address-info">
                                <h1>Address</h1>
                                <p>Baneshwor</p>
                                <p>Kathmandu,Nepal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
