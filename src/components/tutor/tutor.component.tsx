import { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";

import digikalaImage from "@/assets/companies/digikala.png";
import mciImage from "@/assets/companies/mci.svg";
import queraImage from "@/assets/companies/quera.svg";
import snappImage from "@/assets/companies/snapp.svg";
import systemgroupImage from "@/assets/companies/systemgroup.svg";

import styles from "./tutor.module.css";

export default function TutorComponent(): ReactElement {
  return (
    <section id="tutor" className={styles.tutor}>
      <h2>
        بیژن عیسی‌پور
        {` `}
        (مدرس و منتور)
      </h2>
      <p>
        از دانشگاه دولتی خوارزمی فارغ‌التحصیل شدم و مدرک کارشناسی مهندسی
        کامپیوتر دارم. تجربۀ برگزاری سه دوره کارآموزی دارم و تا الان به صدها نفر
        تدریس کرده‌ام.
      </p>
      <p>
        تو خیلی از مسابقات برنامه‌نویسی مقام آوردم که از بینشون می‌تونم به این
        عناوین اشاره کنم:
      </p>
      <ul className={styles.contests}>
        <li>
          <div className={styles.company}>
            <Image src={digikalaImage} alt="" loading="eager" />
          </div>
          <div className={styles.title}>دیجی‌کالا کاپ</div>
          <div className={styles.rank}>رتبه 1 🥇</div>
          <Link
            className={clsx(styles.link, "button primary")}
            href="https://quera.org/contest/assignments/33751/scoreboard/"
          >
            جدول امتیازات
          </Link>
        </li>
        <li>
          <div className={styles.company}>
            <Image src={mciImage} alt="" loading="eager" />
          </div>
          <div className={styles.title}>همراه کاپ</div>
          <div className={styles.rank}>رتبه 1 🥇</div>
          <Link
            className={clsx(styles.link, "button primary")}
            href="https://quera.org/contest/assignments/25979/scoreboard/"
          >
            جدول امتیازات
          </Link>
        </li>
        <li>
          <div className={styles.company}>
            <Image src={queraImage} alt="" loading="eager" />
          </div>
          <div className={styles.title}>CodeCup 6</div>
          <div className={styles.rank}>رتبه 1 🥇</div>
          <Link
            className={clsx(styles.link, "button primary")}
            href="https://quera.org/contest/assignments/35057/scoreboard/"
          >
            جدول امتیازات
          </Link>
        </li>
        <li>
          <div className={styles.company}>
            <Image src={snappImage} alt="" loading="eager" />
          </div>
          <div className={styles.title}>Box Factory</div>
          <div className={styles.rank}>رتبه 2 🥈</div>
          <Link
            className={clsx(styles.link, "button primary")}
            href="https://quera.org/contest/assignments/31890/scoreboard/"
          >
            جدول امتیازات
          </Link>
        </li>
        <li>
          <div className={styles.company}>
            <Image src={systemgroupImage} alt="" loading="eager" />
          </div>
          <div className={styles.title}>هم‌کد</div>
          <div className={styles.rank}>رتبه 2 🥈</div>
          <Link
            className={clsx(styles.link, "button primary")}
            href="https://quera.org/contest/assignments/33749/scoreboard/"
          >
            جدول امتیازات
          </Link>
        </li>
      </ul>
    </section>
  );
}
