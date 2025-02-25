import { ReactElement } from "react";

import Link from "next/link";

import clsx from "clsx";

import GhostIconButtonComponent from "@/components/header/components/ghost-icon-button/ghost-icon-button.component";

import { NavItemType } from "@/components/header/types/nav-item.type";

import MingcuteCloseLine from "@/icons/MingcuteCloseLine";

import styles from "./menu.module.css";

type Props = {
  navItems: NavItemType[];
  isVisible: boolean;
  onClose: VoidFunction;
};

export default function MenuComponent({
  navItems,
  isVisible,
  onClose,
}: Props): ReactElement {
  return (
    <div
      className={clsx(styles.menu, isVisible ? styles.visible : styles.hidden)}
    >
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.content}>
        <header>
          <Link className={styles.logo} href="/">
            Codective
          </Link>
          <GhostIconButtonComponent onClick={onClose}>
            <MingcuteCloseLine />
          </GhostIconButtonComponent>
        </header>
        <ul>
          {navItems.map((item) => (
            <li key={item.title} className={styles[item.className]}>
              <Link href={item.href} onClick={onClose}>
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#register" onClick={onClose}>
              ثبت‌نام
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
