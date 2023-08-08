"use client";

import React, { useContext } from "react";
import styles from "./darkmode.module.css";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "@/context/ThemeContext";

const Darkmode = () => {
  const { toggle, darkMode } = useContext(ThemeContext);

  return (
    <div onClick={toggle} className={styles.container}>
      <div className={styles.icon}>
        <BsFillMoonFill />
      </div>
      <div className={styles.icon}>
        <BsFillSunFill />
      </div>
      <div
        className={styles.ball}
        style={
          darkMode === "dark"
            ? { left: "2px", transition: "0.4s" }
            : { right: "2px", transition: "0.4s" }
        }
      />
    </div>
  );
};

export default Darkmode;
