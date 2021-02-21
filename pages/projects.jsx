import React from "react";
import { motion } from "framer-motion";

import Button from "../component/Button";
import styles from "../styles/Home.module.css";
import ProjectData from "../component/projectData";
import ProjectRow from "../component/ProjectRow";

const Projects = () => {
  return (
    <div id="top">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="/"
        className="back"
      >
        <img src="/left-arrow.svg" width="35px" alt="back" />
      </motion.a>
      <div
        style={{ paddingLeft: "5px" }}
        className={`${styles.section_content} ${styles.section} projects_container`}
      >
        <h2 style={{ color: "#272341" }}>PROJECTS</h2>

        <div>
          {ProjectData.map((data) => (
            <ProjectRow key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
