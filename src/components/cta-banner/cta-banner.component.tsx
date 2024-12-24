import { ReactElement } from "react";

import Link from "next/link";

import styles from "./cta-banner.module.css";

export default function CtaBannerComponent(): ReactElement {
  return (
    <section id="register" className={styles["cta-banner"]}>
      <div className={styles.card}>
        <p className={styles.title}>
          از مفاهیم پایه <br className={styles["mobile-only"]} />
          تا تکنیک‌های حرفه‌ای
          <br className={styles["desktop-only"]} />
          <span className={styles.highlight}>تنها در یک بوت‌کمپ!</span>
          <br className={styles["desktop-only"]} />
          <span className={styles.price}>🔥 فقط 5 میلیون تومان 🔥</span>
          <br className={styles["desktop-only"]} />
          <span className={styles.discount}>
            اگر دانشجو هستید
            <span> </span>
            <span className={styles.highlight}>50درصد تخفیف</span>
            <span> </span>
            دریافت می‌کنید.
          </span>
        </p>
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
