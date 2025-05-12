import { ReactElement } from "react";

import Link from "next/link";

import clsx from "clsx";

import { CourseStatusType } from "@/app/(home)/types/course-status.type";
import { CourseType } from "@/app/(home)/types/course.type";

import styles from "./course.module.css";

type Props = {
  course: CourseType;
  status: CourseStatusType;
};

export default function CourseComponent({
  course,
  status,
}: Props): ReactElement {
  return (
    <li
      className={clsx(styles.course, styles[course.category], styles[status])}
    >
      <div className={styles.logo}>{course.logo}</div>
      <div className={styles.title}>{course.title}</div>
      <p className={styles.date}>{course.date}</p>
      <div className={styles.action}>
        {status === "upcoming" ? (
          <Link className="button primary" href={course.link}>
            ثبت‌نام
          </Link>
        ) : (
          "پایان مهلت ثبت‌نام"
        )}
      </div>
    </li>
  );
}
