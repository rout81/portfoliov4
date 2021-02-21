import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <div className="footer_content">
        <a href="#top">
          <motion.img
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            src="/up.svg "
            width="30px"
          />
        </a>
        <div className="image_content">
          <a
            target="_blank"
            href="https://www.facebook.com/satyaranjan.rout.566"
          >
            <motion.img
              whileHover={{ y: 4 }}
              whileTap={{ scale: 0.9 }}
              src="/facebook.svg"
              height="30px"
            />
          </a>
          <a target="_blank" href="mailto:satyaranjanrout81@gmail.com">
            <motion.img
              whileHover={{ y: 4 }}
              whileTap={{ scale: 0.9 }}
              src="/gmail.svg"
              height="30px"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/satyaranjan-rout-24b538103/"
          >
            <motion.img
              whileHover={{ y: 4 }}
              whileTap={{ scale: 0.9 }}
              src="/linkedin.svg"
              height="30px"
            />
          </a>
          <a target="_blank" href="https://github.com/satanrout">
            <motion.img
              whileHover={{ y: 4 }}
              whileTap={{ scale: 0.9 }}
              src="/github.svg"
              height="30px"
            />
          </a>
        </div>
        <hr />
        <p>
          &#169; {new Date().getFullYear()} - Template recreated with Next JS by{" "}
          <motion.a
            whileHover={{ color: "#6dd5ed" }}
            href="https://github.com/satanrout"
            target="_blank"
          >
            Satyaranjan Rout
          </motion.a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
