import { ReactElement } from "react";

import clsx from "clsx";

import styles from "./react-time-notice.module.css";

type Props = {
  alternate?: boolean;
};

export default function ReactTimeNoticeComponent({
  alternate = false,
}: Props): ReactElement {
  return (
    <section
      className={clsx(
        styles["react-time-notice"],
        alternate && styles.alternate,
      )}
    >
      <p>
        این بوت‌کمپ به درخواست دانشجوها در دو نوبت برگزار میشه تا با امتحانات
        پایان‌ترم تداخل نداشته باشه.
      </p>
      <p>
        نوبت اول از
        <span className={styles.highlight}>هفته‌ی دوم دی</span>
        شروع میشه و نوبت دوم از
        <span className={styles.highlight}>اواسط بهمن (بعد از امتحانات)</span>.
      </p>
      <p>
        محتوای این بوت‌کمپ‌ها هیچ تفاوتی باهم نداره و فقط برای راحتی شما دو نوبت
        در نظر گرفته شده.
      </p>
    </section>
  );
}
