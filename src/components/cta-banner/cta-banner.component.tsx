import { ReactElement } from "react";

import { ButtonLinkComponent } from "@/components/button/button.component";

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
          <ButtonLinkComponent
            dir="ltr"
            href="https://t.me/BijanEisapour"
            target="_blank"
            variant="primary"
            shape="outlined"
            position="inline"
          >
            @BijanEisapour
          </ButtonLinkComponent>
          <span> </span>
          در تلگرام پیام بدید.
        </p>
      </div>
    </section>
  );
}
