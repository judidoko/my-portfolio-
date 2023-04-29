import React from "react";
import Projectlist from "../components/Projectlist";
import { ProjectLists } from "../helpers/ProjectLists";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectLists.map((project, index) => {
          return (
            <Projectlist id={index} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
