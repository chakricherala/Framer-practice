import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -10, opacity: 0 } }
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.ul animate="hidden" variants={list}>
    <motion.li variants={item} />
    <motion.li variants={item} />
    <motion.li variants={item} />
  </motion.ul>
      <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      // drag="x"
      // dragConstraints={{ bottom: -10, top: 10 }}
        onClick={() => setIsVisible(!isVisible)}
        className="example-button"
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
          
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "3600deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
              background: "black",
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
              background: 'red'
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            style={{
              width: 150,
              height: 150,
              background: "red",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
