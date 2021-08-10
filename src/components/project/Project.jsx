import "./project.css";

import React, { useEffect, useState } from "react";
import { catgFeatured, catgHtml, catgReact } from "./projectData";

import ProjectItem from "./ProjectItems/ProjectItem";
import ProjectList from "./projectList/ProjectList";

const Project = () => {
    const [selectedCatg, setSelectedCatg] = useState("featured");
    const [projectData, setProjectData] = useState(catgFeatured);
    const projectCategories = [
        {
            id: "featured",
            tittle: "Featured",
        },

        {
            id: "react",
            tittle: "React",
        },
        {
            id: "html",
            tittle: "HTML CSS",
        },
    ];

    useEffect(() => {
        switch (selectedCatg) {
            case "featured":
                setProjectData(catgFeatured);
                break;
            case "react":
                setProjectData(catgReact);
                break;
            case "html":
                setProjectData(catgHtml);
                break;

            default:
                setProjectData(catgFeatured);
                break;
        }
    }, [selectedCatg]);

    return (
        <div id="project" className="project-page container-lg">
            <h1>PROJECTS</h1>
            <ul>
                {projectCategories.map((catg) => (
                    <ProjectList
                        id={catg.id}
                        tittle={catg.tittle}
                        active={selectedCatg === catg.id}
                        setSelectedCatg={setSelectedCatg}
                    />
                ))}
            </ul>
            <div className="project-container ">
                {projectData.map((project) => (
                    <ProjectItem project={project} />
                ))}
            </div>
        </div>
    );
};

export default Project;
