import React from "react";

const ProjectList = ({ id, tittle, active, setSelectedCatg }) => {
    return (
        <li
            key={id}
            onClick={() => setSelectedCatg(id)}
            className={
                active ? "border-gradient project-active" : "border-gradient"
            }>
            {tittle}
        </li>
    );
};

export default ProjectList;
