import { ReactElement } from "react";

import Link from "next/link";

import GoldCardComponent from "@/components/gold-card/gold-card.component";

import styles from "./cta-priceless-banner.module.css";

type Props = {
  title: string;
  subtitle: string;
  expired?: boolean;
};

export default function CtaPricelessBannerComponent({
  title,
  subtitle,
  expired = false,
}: Props): ReactElement {
  return (
    <section id="register" className={styles["cta-banner"]}>
      <GoldCardComponent
        cardContentClassName={styles["card-content"]}
        expired={expired}
      >
        <div className={styles.info}>
          <div className={styles.subtitle}>{subtitle}</div>
          <div className={styles.title}>{title}</div>
        </div>
        <p className={styles.cta}>
          برای ثبت‌نام
          <span> </span>
          <Link href="#" target="_blank">
            این پرسشنامه
          </Link>
          <span> </span>
          رو پر کنید.
        </p>
        <p className={styles.rules}>
          ثبت‌نام در دوره به منزله‌ی پذیرش تمام قوانینی است که در ادامه مطرح
          شده‌اند.
        </p>
      </GoldCardComponent>
    </section>
  );
}
