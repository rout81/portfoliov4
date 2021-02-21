import React from "react";
import { motion } from "framer-motion";

const Skill = ({ children }) => {
  const skillStyle = {
    padding: "8px 12px",
    backgroundColor: "#fff",
    color: "#00cdac",
    borderRadius: "20px",
    border: "none",
    fontSize: "16px",
    textTransform: "uppercase",
    fontFamily: '"Montserrat", sans-serif',
  };
  return (
    <motion.span
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.8 }}
      style={skillStyle}
    >
      {children}
    </motion.span>
  );
};

export default Skill;
