import React from "react";
import Button from "./Button";

const ProjectRow = ({ data }) => {
  const { name, info, live, code, image } = data;
  return (
    <div className="project">
      <div className="project_left">
        <h3>{name}</h3>
        <p>{info}</p>
        <a href={live} target="_blank">
          <Button>See Live</Button>
        </a>
        <span
          style={{
            color: "#6dd5ed",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          <a href={code} target="_blank">
            Source Code
          </a>
        </span>
      </div>
      <div className="project_image">
        <img alt={name} src={image} width="80%" />
      </div>
    </div>
  );
};

export default ProjectRow;
