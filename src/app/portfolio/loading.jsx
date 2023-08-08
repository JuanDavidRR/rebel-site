import React from "react";
import styles from "./page.module.css";

const Loading = () => {
  return (
    <div>
      <h2>Our Work</h2>
      <h1>Loading Portfolios...</h1>
      <div className={styles.loadingMainContainer}>
        <div>
          <div className={styles.loading + " " + styles.loadingContainer}></div>
          <div className={styles.loading + " " + styles.loadingTextShort}></div>
        </div>
        <div>
          <div className={styles.loading + " " + styles.loadingContainer}></div>
          <div className={styles.loading + " " + styles.loadingTextShort}></div>
        </div>
        <div>
          <div className={styles.loading + " " + styles.loadingContainer}></div>
          <div className={styles.loading + " " + styles.loadingTextShort}></div>
        </div>
        </div>
    </div>
  );
};

export default Loading;
