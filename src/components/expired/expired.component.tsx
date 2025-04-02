import { ReactElement } from "react";

import styles from "./expired.module.css";

export default function ExpiredComponent(): ReactElement {
  return (
    <div className={styles.expired}>
      <div className={styles.banner}>پایان ثبت‌نام</div>
    </div>
  );
}
