import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
export const dynamic = 'force-dynamic'
import { seoSeparator, seoTitle } from "@/utils/constants";

export const metadata = {
  title: "Contact Us" + seoSeparator + seoTitle,
  description: "Keep in touch with your us",
};

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Keep the contact</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43180.295324142615!2d-122.31508907708233!3d37.546066413995874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9e70368acbe7%3A0x837ed9639285d6fb!2sSede%20de%20Roblox!5e0!3m2!1ses-419!2sco!4v1691515062772!5m2!1ses-419!2sco"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <form className={styles.form} action="#" method="post">
          <div className={styles.formItem}>
            <label htmlFor="name">Full Name</label>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="email">Email Address</label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="message">Message (Optional)</label>
            <textarea
              className={styles.input}
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div>
            <Button url="#" content="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
