import { ReactElement } from "react";

import styles from "./preorder.module.css";

export default function PreorderComponent(): ReactElement {
  return (
    <section className={styles.preorder}>
      <p>این دوره از اواسط بهمن (بعد از امتحانات) شروع میشه.</p>
      <p>
        کسایی که از الان ثبت‌نام کنن
        <span className={styles.highlight}>50% تخفیف ویژه</span>
        دریافت میکنن.
      </p>
    </section>
  );
}
