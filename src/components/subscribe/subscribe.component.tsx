import { ReactElement } from "react";

import Link from "next/link";

import { ButtonLinkComponent } from "@/components/button/button.component";

import styles from "./subscribe.module.css";

export default function SubscribeComponent(): ReactElement {
  return (
    <section className={styles.subscribe}>
      <p>
        برای دریافت آموزش‌ها و اطلاع از بوت‌کمپ‌ها،
        <span> </span>
        <Link href="https://t.me/Codective" target="_blank">
          عضو کانال تلگرام شوید
        </Link>
        .
      </p>
      <ButtonLinkComponent
        dir="ltr"
        href="https://t.me/Codective"
        target="_blank"
      >
        @Codective
      </ButtonLinkComponent>
    </section>
  );
}
