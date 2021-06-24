import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Link href="/">
          <a className={pathname === "/" ? styles.selected : ""}>Home</a>
        </Link>

        <Link href="/hello_next_js" prefetch={true}>
          <a className={pathname === "/hello_next_js" ? styles.selected : ""}>
            Fetch DATA
          </a>
        </Link>

        <Link href="/blog/1">
          <a className={pathname.includes("blog") ? styles.selected : ""}>
            Blog
          </a>
        </Link>
      </div>
    </div>
  );
}
