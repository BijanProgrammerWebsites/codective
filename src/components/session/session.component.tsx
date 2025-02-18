import { ReactElement } from "react";

import styles from "./session.module.css";

type Props = {
  children: ReactElement<HTMLLIElement>[];
};

export default function SessionComponent({ children }: Props): ReactElement {
  return (
    <div className={styles.session}>
      <ol>{children}</ol>
    </div>
  );
}
