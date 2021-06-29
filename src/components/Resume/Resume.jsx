import "./resume.css";

import { otherskill, skilldata } from "./skilldata";

import OtherSkill from "./OtherSkill";
import React from "react";
import Skill from "./Skill";
import resume from "../../Data/resume.pdf";

const Resume = () => {
    return (
        <div id="resume" className="resume-page">
            <div className="container-md">
                <h1 className="page-heading-dark">SKILLS</h1>
                <div className="skill-section">
                    <div className="main-skill-section">
                        {skilldata.map(({ title, icon, level }, index) => (
                            <Skill
                                key={index}
                                icon={icon}
                                title={title}
                                level={level}
                                index={index}
                            />
                        ))}
                    </div>
                    <div className="other-skill-section">
                        {otherskill.map(({ skillName, skillitems }, index) => (
                            <OtherSkill
                                key={index}
                                skillName={skillName}
                                skillitems={skillitems}
                            />
                        ))}
                    </div>
                </div>
                <a
                    style={{
                        width: "250px",
                        marginBottom: "2rem",
                        margin: "auto",
                    }}
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-about">
                    {" "}
                    <i class="fas fa-download"></i> DOWNLOAD CV
                </a>
            </div>
        </div>
    );
};

export default Resume;
