import "./projectItem.css";

import React from "react";

const ProjectItem = ({ project }) => {
    return (
        <div className="project-item" key={project.id}>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.web_link}>
                <div className="share-btn">
                    <img src={project.img} alt={project.title} />
                    <i class="far fa-share-square"></i>
                </div>
                <h2 className="project-title">{project.title}</h2>
            </a>

            <p className="project-tags">
                {project.tag.map((tag) => (
                    <span>{tag}</span>
                ))}
            </p>

            <div className="project-btns">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.git_link}
                    className="btn btn-about">
                    {" "}
                    <i class="fab fa-github"></i> Source Code
                </a>
            </div>
        </div>
    );
};

export default ProjectItem;

{
    /* <a
    target="_blank"
    rel="noopener noreferrer"
    href={project.web_link}
    className="btn btn-about">
    {" "}
    <i class="fas fa-globe"></i> View Site
</a>; */
}
