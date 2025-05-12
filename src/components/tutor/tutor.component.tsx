import { ReactElement } from "react";

import Image from "next/image";

import bijanPortrait from "@/assets/portraits/bijan.webp";

import ContestComponent from "@/components/tutor/components/contest/contest.component";
import {
  goldContests,
  silverContests,
} from "@/components/tutor/data/contest.data";

import styles from "./tutor.module.css";

export default function TutorComponent(): ReactElement {
  return (
    <section id="tutor" className={styles.tutor}>
      <div className={styles.content}>
        <div className={styles.writings}>
          <Image className={styles.portrait} src={bijanPortrait} alt="" />
          <div className={styles.title}>
            <div className={styles.name}>بیژن عیسی‌پور</div>
            <div className={styles.role}>(مدرس و منتور)</div>
          </div>
          <ul className={styles.experiences + " " + styles.chiz}>
            <li>بیش از 5 سال سابقه‌ی کار حرفه‌ای در زمینه‌ی Web Development</li>
            <li>بیش از 6 سال سابقه‌ی تدریس</li>
            <li>سابقه‌ی منتورینگ، Team Leading و مدیریت اجرایی</li>
            <li>کسب رتبه‌های برتر در چند مسابقه‌ی برنامه‌نویسی</li>
            <li>دارای مدرک کارشناسی مهندسی کامپیوتر</li>
            <li>فارغ‌التحصیل از دانشگاه دولتی خوارزمی</li>
          </ul>
        </div>
        <div className={styles.contests}>
          <ul className={styles.group}>
            {goldContests.map((contest, contestIndex) => (
              <ContestComponent key={contestIndex} contest={contest} />
            ))}
          </ul>
          <ul className={styles.group}>
            {silverContests.map((contest, contestIndex) => (
              <ContestComponent key={contestIndex} contest={contest} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
