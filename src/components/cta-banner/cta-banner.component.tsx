import { ReactElement } from "react";

import Link from "next/link";

import styles from "./cta-banner.module.css";

export default function CtaBannerComponent(): ReactElement {
  return (
    <section id="register" className={styles["cta-banner"]}>
      <div className={styles.card}>
        <p className={styles.title}>
          از مفاهیم پایه تا تکنیک‌های حرفه‌ای
          <br />
          <span className={styles.highlight}>فقط در یک بوتکمپ!</span>
        </p>
        <div className={styles.cta}>
          <p>
            برای ثبت‌نام به
            <span> </span>
            <Link
              dir="ltr"
              className="button primary-opposite inline"
              href="https://t.me/BijanEisapour"
              target="_blank"
            >
              @BijanEisapour
            </Link>
            <span> </span>
            در تلگرام پیام بدید.
          </p>
        </div>
      </div>
    </section>
  );
}
