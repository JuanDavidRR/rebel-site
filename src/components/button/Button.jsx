import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

const Button = ({ url, content }) => {
  return <Link className={styles.button} href={url}>{content}</Link>;
};

export default Button;
