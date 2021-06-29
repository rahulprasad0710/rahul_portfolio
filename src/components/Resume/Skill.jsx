import React from "react";

const Skill = ({ title, icon, level, index }) => {
    return (
        <div className="skill-item" key={index}>
            <img className="skill-size skill-img " src={icon} alt={title} />
            <div className="skill-info">
                <h2>{title}</h2>
                <h3>{level}%</h3>
                <div className="progessbar">
                    <div style={{ width: `${level}%` }}></div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
