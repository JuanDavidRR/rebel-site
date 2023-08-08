import React from "react";

const loading = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Loading Form</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
        </div>

        <div className={styles.form}>
          <div className={styles.formItem}>
            <div className={styles.loading + " " + styles.loadingText}></div>
            <div className={styles.loading + " " + styles.loadingPost}></div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.loading + " " + styles.loadingText}></div>
            <div className={styles.loading + " " + styles.loadingPost}></div>
          </div>{" "}
          <div className={styles.formItem}>
            <div className={styles.loading + " " + styles.loadingText}></div>
            <div className={styles.loading + " " + styles.loadingPost}></div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default loading;
