import React from "react";
import styles from "./page.module.css";

const Loading = () => {
  return (
    <div>
      <h1>Loading Posts...</h1>
      <div className={styles.loadingMainContainer}>
        <div>
          <div className={styles.loading + " " + styles.loadingContainer}></div>
          <div className={styles.loading + " " + styles.loadingText}></div>
          <div className={styles.loading + " " + styles.loadingTextShort}></div>
          <div className={styles.loading + " " + styles.loadingTextShort}></div>
        </div>
        <div>
          <div className={styles.loading + " " + styles.loadingContainer}></div>
          <div className={styles.loading + " " + styles.loadingText}></div>
          <div className={styles.loading + " " + styles.loadingTextShort}></div>
          <div className={styles.loading + " " + styles.loadingTextShort}></div>
        </div>
        <div>
          <div className={styles.loading + " " + styles.loadingContainer}></div>
          <div className={styles.loading + " " + styles.loadingText}></div>
          <div className={styles.loading + " " + styles.loadingTextShort}></div>
          <div className={styles.loading + " " + styles.loadingTextShort}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
