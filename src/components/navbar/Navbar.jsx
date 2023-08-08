"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Darkmode from "../darkmode/Darkmode";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <nav className={styles.container}>
      <Link className={styles.logo} href="/">
        Rebel Blog
      </Link>
      <ul className={styles.links}>
        <li>
          <Darkmode />
        </li>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={link.url}
                className={pathname === link.url ? styles.active : styles.link}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
        <li>
          {session.status === "authenticated" && (
            <button className={styles.logout} onClick={signOut}>
              Logout
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
