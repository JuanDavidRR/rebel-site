import React from "react";
import styles from "./page.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        <h2 className={styles.title}>Loading Your posts</h2>
        <div className={styles.loading + " " + styles.loadingPost}></div>
        <div className={styles.loading + " " + styles.loadingPost}></div>

        <div className={styles.loading + " " + styles.loadingPost}></div>

        <div className={styles.loading + " " + styles.loadingPost}></div>

      </div>
      <div className={styles.form}>
        <h1 className={styles.title}>Add New Post</h1>
        <div className={styles.formItem}>
          <div className={styles.loading + " " + styles.loadingText}></div>
          <div className={styles.loading + " " + styles.loadingPost}></div>
        </div>
        <div className={styles.formItem}>
          <div className={styles.loading + " " + styles.loadingText}></div>
          <div className={styles.loading + " " + styles.loadingPost}></div>
        </div>
        <div className={styles.formItem}>
          <div className={styles.loading + " " + styles.loadingText}></div>
          <div className={styles.loading + " " + styles.loadingPost}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
