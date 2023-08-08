import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";
import { seoSeparator, seoTitle } from "@/utils/constants";


const getData = (category) => {
  const data = items[category];

  if (data) {
    return data;
  }

  return notFound();
};

export async function generateMetadata({ params }) {
  const category = await getData(params.category)
  return {
    title: category[0].categoryName + seoSeparator + seoTitle,
    description: category[0].desc,
  };
}

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <main className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <section key={item.id} className={styles.item}>
          <section className={styles.content}>
            <h2 className={styles.subtitle}>{item.title}</h2>
            <p className={styles.description}>
              {item.desc}
            </p>
            <Button url="/" content="Learn more" />
          </section>
          <section className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={item.image}
              fill={true}
              alt=""
            />
          </section>
        </section>
      ))}
      <section className={styles.item}></section>
    </main>
  );
};

export default Category;
