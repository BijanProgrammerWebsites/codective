import { ReactElement } from "react";

import Link from "next/link";

import styles from "./cta-banner.module.css";

export default function CtaBannerComponent(): ReactElement {
  return (
    <section id="register" className={styles["cta-banner"]}>
      <div className={styles.card}>
        <div className={styles.info}>
          <div className={styles.subtitle}>
            <div>از مفاهیم پایه</div>
            <div>تا تکنیک‌های حرفه‌ای</div>
          </div>
          <div className={styles.title}>تنها در یک بوت‌کمپ!</div>
          <div className={styles.price}>🔥 فقط 5,000,000 تومان! 🔥</div>
        </div>
        <p className={styles.cta}>
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
    </section>
  );
}
