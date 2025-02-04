import { ReactElement } from "react";

import styles from "./week.module.css";

type Props = {
  children: ReactElement<typeof SessionComponent>[];
};

export default function WeekComponent({ children }: Props): ReactElement {
  return (
    <div className={styles.week}>
      {children.map((child, index) => (
        <div key={index} className={styles.session}>
          <h4>جلسه {index + 1}</h4>
          <ol dir="ltr">{child}</ol>
        </div>
      ))}
    </div>
  );
}

type SessionComponentProps = {
  children: ReactElement<HTMLLIElement> | ReactElement<HTMLLIElement>[];
};

function SessionComponent({ children }: SessionComponentProps) {
  return children;
}

WeekComponent.SessionComponent = SessionComponent;
