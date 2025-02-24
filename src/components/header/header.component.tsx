import { ReactElement } from "react";

import Link from "next/link";

import styles from "./header.module.css";

type NavItem = {
  href: string;
  title: string;
};

const navItems: NavItem[] = [
  { href: "#tutor", title: "مدرس" },
  { href: "#features", title: "ویژگی‌ها" },
  { href: "#prerequisites", title: "پیش‌نیازها" },
  { href: "#outline", title: "محتوا" },
  { href: "#roadmap", title: "نقشه راه" },
  { href: "#faq", title: "سوالات متداول" },
];

export default function HeaderComponent(): ReactElement {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        Codective
      </Link>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link className={styles.cta} href="#register">
        ثبت‌نام
      </Link>
    </header>
  );
}
