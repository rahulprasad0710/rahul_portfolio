import "./App.css";

import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/Intro/Intro";
import Menubar from "./components/Menubar/Menubar";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/project/Project";
import Resume from "./components/Resume/Resume.jsx";
import { useState } from "react";

function App() {
    const [toggleMenu, setToggleMenu] = useState(true);

    return (
        <>
            <Navbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
            <div className="App">
                <Intro />

                <Menubar
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                <About />
                <Resume />
                <Project />
                <Contact />
                <Footer />
            </div>
        </>
    );
}

export default App;

{
    /* <Intro />
                <Navbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
                <Resume />
                <Menubar
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                <Project />

                <Contact />
                <Footer /> */
}
