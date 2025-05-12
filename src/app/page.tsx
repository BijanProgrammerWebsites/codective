import CoursesComponent from "@/app/(home)/components/courses/courses.component";
import {
  completedCoursesData,
  ongoingCoursesData,
  upcomingCoursesData,
} from "@/app/(home)/data/courses.data";

import FooterComponent from "@/components/footer/footer.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <header className={styles.header}>
        <h1>Codective</h1>
      </header>
      <div className={styles.page}>
        <main>
          <CoursesComponent
            upcoming={upcomingCoursesData}
            ongoing={ongoingCoursesData}
            completed={completedCoursesData}
          />
        </main>
      </div>
      <FooterComponent />
    </>
  );
}
