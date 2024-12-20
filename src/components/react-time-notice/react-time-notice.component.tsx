import { ReactElement } from "react";

import AlternativeBackgroundComponent from "@/components/alternative-background/alternative-background.component";

import styles from "./react-time-notice.module.css";

export default function ReactTimeNoticeComponent(): ReactElement {
  return (
    <AlternativeBackgroundComponent>
      <p className={styles.notice}>
        این بوت‌کمپ به درخواست دانشجوها در دو نوبت برگزار میشه تا با امتحانات
        پایان‌ترم تداخل نداشته باشه.
      </p>
      <p className={styles.notice}>
        نوبت اول از
        <span className={styles.highlight}>هفته‌ی دوم دی</span>
        شروع میشه و نوبت دوم از
        <span className={styles.highlight}>اواسط بهمن (بعد از امتحانات)</span>.
      </p>
      <p className={styles.notice}>
        محتوای این بوت‌کمپ‌ها هیچ تفاوتی باهم نداره و فقط برای راحتی شما دو نوبت
        در نظر گرفته شده.
      </p>
    </AlternativeBackgroundComponent>
  );
}
