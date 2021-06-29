import React from "react";

const OtherSkill = ({ skillName, skillitems }) => {
    return (
        <div className="other-skill-item">
            <h1>{skillName}</h1>
            <div
                style={{ width: `${skillitems.length * 90}px` }}
                className="other-skill-icons">
                {skillitems.map((item, index) => (
                    <div className="each-icons" key={index}>
                        <img
                            className="skill-size"
                            src={item.skillicon}
                            alt={item.skillname}
                        />
                        <h2>{item.skillname}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtherSkill;
