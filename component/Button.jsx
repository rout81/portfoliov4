import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

const Button = ({ children }) => {
  return (
    <motion.button
      whileHover={{
        backgroundColor: "#6dd5ed",
        color: "#fff",
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9 }}
      initial={{ fontSize: "12px" }}
      animate={{ fontSize: "16px" }}
      className={styles.btn}
    >
      {children}
    </motion.button>
  );
};

export default Button;
