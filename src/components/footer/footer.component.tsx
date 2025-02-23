import { ReactElement } from "react";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span className={styles.persian}>
        تمامی حقوق مادی و معنوی این وب‌سایت متعلق به بیژن عیسی‌پور می‌باشد.
      </span>
      <span className={styles.english}>Copyright © {year} codective.ir</span>
    </footer>
  );
}
