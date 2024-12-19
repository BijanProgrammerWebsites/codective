import { ReactElement } from "react";

import Link from "next/link";

import styles from "./not-found.module.css";

export default function NotFound(): ReactElement {
  return (
    <div className={styles["not-found"]}>
      <h1>صفحه‌ی مورد نظر پیدا نشد!</h1>
      <Link href="/">بازگشت به صفحه‌ی اصلی</Link>
    </div>
  );
}
