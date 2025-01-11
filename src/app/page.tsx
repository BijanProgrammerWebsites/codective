import Link from "next/link";

import clsx from "clsx";

import ReactLogo from "@/logo/react.logo";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <h1>Codective</h1>
      <ul>
        <li className={clsx(styles.card, styles.react)}>
          <div className={styles.visuals}>
            <ReactLogo />
          </div>
          <div className={styles.title}>بوت‌کمپ React</div>
          <p className={styles.date}>از 7 بهمن تا 28 اسفند</p>
          <Link className="button primary large" href="/react">
            ثبت‌نام
          </Link>
        </li>
      </ul>
    </div>
  );
}
