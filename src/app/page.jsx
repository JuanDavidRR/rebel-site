import Image from "next/image";
import styles from "./page.module.css";
import heroImage from "public/images/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.description}>
          Turning your website into something completely different and reach all
          your business goals.
        </p>
        <Button url='/portfolio' content='See our Work'/>

      </section>
      <section className={styles.item}>
        <Image src={heroImage} alt="" className={styles.img} />
      </section>
    </main>
  );
}
