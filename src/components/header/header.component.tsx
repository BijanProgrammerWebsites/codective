import { ReactElement } from "react";

import Link from "next/link";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactElement {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        Codective
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="#">معرفی</Link>
          </li>
          <li>
            <Link href="#features">مزایا</Link>
          </li>
          <li>
            <Link href="#roadmap">نقشه راه</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.cta}>
        <Link className="button primary" href="#register">
          ثبت‌نام
        </Link>
      </div>
    </header>
  );
}
