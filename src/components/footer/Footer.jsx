import React from "react";
import styles from "./footer.module.css";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Link from "next/link";

console.log("Hi");

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>©2023 Rebel Blog. All rights reserved.</div>
      <ul className={styles.links}>
        <li>
          <Link className={styles.link} href="#">
            <AiFillInstagram />
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="#">
            <AiFillLinkedin />
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="#">
            <AiFillGithub />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
