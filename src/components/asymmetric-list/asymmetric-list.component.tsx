import { ReactElement } from "react";

import styles from "./asymmetric-list.module.css";

type Props = {
  children: ReactElement<HTMLLIElement>[];
};

export default function AsymmetricListComponent({
  children,
}: Props): ReactElement {
  return <ul className={styles["asymmetric-list"]}>{children}</ul>;
}
