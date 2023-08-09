export const dynamic = 'force-dynamic'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { seoSeparator, seoTitle } from "@/utils/constants";
import styles from "./page.module.css";

export const metadata = {
  title: 'Blog' + seoSeparator + seoTitle,
  description: 'Keep in touch with your us',
}

async function getData() {
  const res = await fetch("https://rebel-site.vercel.app/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Blog = async () => {
  const data = await getData();
  return (
    <main>
      <h1>BLOG | POSTS</h1>
      <div className={styles.mainContainer}>
        {data.map((item) => (
          <Link
            href={`/blog/${item._id}`}
            className={styles.container}
            key={item.id}
          >
            <div className={styles.imageContainer}>
              <Image
                src={item.img}
                alt=""
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
              <div className={styles.secondary}>
                <p className={styles.desc}>{item.username}</p>
                <p className={styles.desc}>{formatDate(item.createdAt)}</p>
              </div>
              <div className={styles.hover}></div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Blog;
