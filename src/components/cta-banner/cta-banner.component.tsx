import { ReactElement } from "react";

import Link from "next/link";

import clsx from "clsx";

import ExpiredComponent from "@/components/expired/expired.component";

import FluentEmojiFire from "@/icons/FluentEmojiFire";

import styles from "./cta-banner.module.css";

type Props = {
  title: string;
  subtitle: ReactElement;
  price: number;
  expired?: boolean;
};

export default function CtaBannerComponent({
  title,
  subtitle,
  price,
  expired = false,
}: Props): ReactElement {
  return (
    <section
      id="register"
      className={clsx(styles["cta-banner"], expired && styles.expired)}
    >
      <div className={styles.card}>
        <div className={styles.info}>
          <div className={styles.subtitle}>{subtitle}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>
            <FluentEmojiFire />
            <span>
              فقط
              {` `}
              {price.toLocaleString()}
              {` `}
              تومان!
            </span>
            <FluentEmojiFire />
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
        <p className={styles.rules}>
          ثبت‌نام در دوره به منزله‌ی پذیرش تمام قوانینی است که در ادامه مطرح
          شده‌اند.
        </p>
      </div>
      {expired && <ExpiredComponent />}
    </section>
  );
}
