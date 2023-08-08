"use client";

import React from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <p className={styles.subtitle}>Please sign up to see the dashboard.</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={styles.input}
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {/* {error && "Something went wrong!"} */}
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
        className={styles.button + " " + styles.google}
      >
        Login with Google
      </button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login">
        Register if you do not have an account
      </Link>
    </div>
  );
};

export default Login;
