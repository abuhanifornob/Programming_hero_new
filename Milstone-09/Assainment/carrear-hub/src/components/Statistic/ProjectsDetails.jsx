import React, { useState } from "react";

const ProjectsDetails = ({ project }) => {
  const { marks, projectGithubLink, projectLiveLink, projectTitle, id } =
    project;

  return (
    <div className="mb-2">
      <div
        tabIndex={id}
        className="collapse collapse-plus border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-xl font-medium">
          {id}. {projectTitle}
        </div>
        <div className="collapse-content bg-white">
          <p>
            {" "}
            <span className="text-xl font-semibold ">Live Link : </span>{" "}
            {projectLiveLink}
          </p>
          <p>
            {" "}
            <span className="text-xl font-semibold">Github Link : </span>{" "}
            {projectGithubLink}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
