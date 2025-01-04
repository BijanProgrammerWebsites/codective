import { ReactElement } from "react";

import Link from "next/link";

import { ButtonLinkComponent } from "@/components/button/button.component";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactElement {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        Codective
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="#">معرفی</Link>
          </li>
          <li>
            <Link href="#features">ویژگی‌ها</Link>
          </li>
          <li>
            <Link href="#prerequisites">پیش‌نیازها</Link>
          </li>
          <li>
            <Link href="#outline">محتوا</Link>
          </li>
          <li>
            <Link href="#roadmap">نقشه راه</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.cta}>
        <ButtonLinkComponent href="#register" variant="primary">
          ثبت‌نام
        </ButtonLinkComponent>
      </div>
    </header>
  );
}
