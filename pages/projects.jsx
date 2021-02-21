import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import ProjectData from "../component/projectData";
import ProjectRow from "../component/ProjectRow";

const Projects = () => {
  return (
    <div id="top">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="satanrout, satyaranjan rout, bhuinpur, odisha, satyaranjan rout web developer, javascript, react.js, node.js, web developer, projects"
        />
        <meta
          name="description"
          content="Projects of Satyaranjan Rout aka satanrout"
        />
        <meta name="author" content="Satyaranjan Rout"></meta>
        <title>Projects | Satyaranjan Rout</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
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
