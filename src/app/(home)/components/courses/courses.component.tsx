import { ReactElement } from "react";

import CourseComponent from "@/app/(home)/components/course/course.component";

import { CourseType } from "@/app/(home)/types/course.type";

import styles from "./courses.module.css";

type Props = {
  upcoming: CourseType[];
  ongoing: CourseType[];
  completed: CourseType[];
};

export default function CoursesComponent({
  upcoming,
  ongoing,
  completed,
}: Props): ReactElement {
  return (
    <div className={styles.courses}>
      <section>
        <h2>دوره‌های جدید</h2>
        <ul>
          {upcoming.map((course, index) => (
            <CourseComponent key={index} course={course} status="upcoming" />
          ))}
        </ul>
      </section>
      <section>
        <h2>دوره‌های درحال برگزاری</h2>
        <ul>
          {ongoing.map((course, index) => (
            <CourseComponent key={index} course={course} status="ongoing" />
          ))}
        </ul>
      </section>
      <section>
        <h2>دوره‌های پایان‌یافته</h2>
        <ul>
          {completed.map((course, index) => (
            <CourseComponent key={index} course={course} status="completed" />
          ))}
        </ul>
      </section>
    </div>
  );
}
