import { ReactElement } from "react";

import styles from "./week.module.css";

type Props = {
  children: ReactElement<HTMLLIElement>[];
};

export default function WeekComponent({ children }: Props): ReactElement {
  return <ul className={styles.week}>{children}</ul>;
}
