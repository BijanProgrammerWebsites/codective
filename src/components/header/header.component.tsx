"use client";

import { ReactElement, useCallback, useEffect, useState } from "react";

import Link from "next/link";

import MingcuteMenuLine from "@/icons/MingcuteMenuLine";

import GhostIconButtonComponent from "@/components/header/components/ghost-icon-button/ghost-icon-button.component";
import MenuComponent from "@/components/header/components/menu/menu.component";

import { NavItemType } from "@/components/header/types/nav-item.type";

import styles from "./header.module.css";

const navItems: NavItemType[] = [
  { href: "#tutor", title: "مدرس", className: "md" },
  { href: "#features", title: "ویژگی‌ها", className: "lg" },
  { href: "#prerequisites", title: "پیش‌نیازها", className: "md" },
  { href: "#outline", title: "محتوا", className: "lg" },
  { href: "#roadmap", title: "نقشه راه", className: "md" },
  { href: "#faq", title: "سوالات متداول", className: "md" },
];

export default function HeaderComponent(): ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const closeHandler = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "auto";
  }, [isVisible]);

  return (
    <>
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          Codective
        </Link>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.title} className={styles[item.className]}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link className={styles.cta} href="#register">
          ثبت‌نام
        </Link>
        <GhostIconButtonComponent
          className={styles.hamburger}
          onClick={() => setIsVisible(true)}
        >
          <MingcuteMenuLine />
        </GhostIconButtonComponent>
      </header>
      <MenuComponent
        navItems={navItems}
        isVisible={isVisible}
        onClose={closeHandler}
      />
    </>
  );
}
