import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { seoSeparator, seoTitle } from "@/utils/constants";

export const metadata = {
  title: 'Portfolio' + seoSeparator + seoTitle,
  description: 'Keep in touch with your us',
}

const Portfolio = () => {
  return (
    <section>
      <h1 className={styles.selectTitle}>Check our Portfolios</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
          <div className={styles.hover}></div>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
          <div className={styles.hover}></div>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title}>Application</span>
          <div className={styles.hover}></div>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
