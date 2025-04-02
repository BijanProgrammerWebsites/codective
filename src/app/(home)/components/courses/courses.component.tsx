import { ReactElement } from "react";

import CourseComponent from "@/app/(home)/components/course/course.component";

import { CourseType } from "@/app/(home)/types/course.type";
import { CourseStatusType } from "@/app/(home)/types/course-status.type";

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
        <CourseList courses={upcoming} status="upcoming" />
      </section>
      <section>
        <h2>دوره‌های درحال برگزاری</h2>
        <CourseList courses={ongoing} status="ongoing" />
      </section>
      <section>
        <h2>دوره‌های پایان‌یافته</h2>
        <CourseList courses={completed} status="completed" />
      </section>
    </div>
  );
}

type CourseListProps = {
  courses: CourseType[];
  status: CourseStatusType;
};

function CourseList({ courses, status }: CourseListProps): ReactElement {
  if (courses.length === 0) {
    return (
      <div className={styles.empty}>
        در حال حاضر دوره‌ای در این لیست وجود ندارد.
      </div>
    );
  }

  return (
    <ul>
      {courses.map((course, index) => (
        <CourseComponent key={index} course={course} status={status} />
      ))}
    </ul>
  );
}
