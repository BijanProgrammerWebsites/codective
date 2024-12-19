import { ReactElement } from "react";

import styles from "./week.module.css";

type Props = {
  children: ReactElement<HTMLLIElement>[];
};

export default function WeekComponent({ children }: Props): ReactElement {
  return (
    <ol dir="ltr" className={styles.week}>
      {children}
    </ol>
  );
}
