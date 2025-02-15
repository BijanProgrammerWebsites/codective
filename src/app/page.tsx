import Link from "next/link";

import clsx from "clsx";

import DsadLogo from "@/logo/dsad.logo";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <h1>Codective</h1>
      <ul>
        <li className={clsx(styles.card, styles.dsad)}>
          <div className={styles.visuals}>
            <DsadLogo />
          </div>
          <div className={styles.title}>ساختمان داده و طراحی الگوریتم</div>
          <p className={styles.date}>از 2 تا 12 فروردین</p>
          <Link className="button primary large" href="/dsad">
            ثبت‌نام
          </Link>
        </li>
      </ul>
    </div>
  );
}
