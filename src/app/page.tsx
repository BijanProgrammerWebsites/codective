import Link from "next/link";

import clsx from "clsx";

import ReactLogo from "@/logo/react.logo";
import NextTransparentLogo from "@/logo/next-transparent.logo";

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
          <p className={styles.date}>شروع از هفته‌ی دوم دی</p>
          <Link className="button primary large" href="/bootcamps/react">
            ثبت‌نام
          </Link>
        </li>
        <li className={clsx(styles.card, styles.next)}>
          <div className={styles.visuals}>
            <NextTransparentLogo />
          </div>
          <div className={styles.title}>بوت‌کمپ Next.js</div>
          <p className={styles.date}>شروع از اواخر اسفند</p>
          <Link className="button primary large" href="/bootcamps/nextjs">
            ثبت‌نام
          </Link>
        </li>
      </ul>
    </div>
  );
}
