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
          <div className={styles.discount}>
            🔥 50% تخفیف ویژه برای ثبت‌نام زودهنگام 🔥
          </div>
          <div className={styles.price}>
            فقط و فقط
            <span className={styles["before-discount"]}>5,000,000</span>
            <br className={styles["mobile-only"]} />
            <span className={styles["after-discount"]}>2,500,000</span>
            تومان!
          </div>
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
