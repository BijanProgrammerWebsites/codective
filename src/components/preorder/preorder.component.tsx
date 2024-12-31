import { ReactElement } from "react";

import styles from "./preorder.module.css";

export default function PreorderComponent(): ReactElement {
  return (
    <section className={styles.preorder}>
      <p>این دوره از 7 بهمن (بعد از امتحانات) شروع میشه.</p>
      <p>
        کسایی که از الان تا 21 دی ثبت‌نام کنن
        <span className={styles.highlight}>50% تخفیف ویژه</span>
        دریافت میکنن.
      </p>
    </section>
  );
}
