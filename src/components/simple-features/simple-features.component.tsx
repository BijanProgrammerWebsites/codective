import { ReactElement } from "react";

import styles from "./simple-features.module.css";

type Props = {
  children: ReactElement<HTMLLIElement>[];
};

export default function SimpleFeaturesComponent({
  children,
}: Props): ReactElement {
  return (
    <section id="features" className={styles["simple-features"]}>
      <h2>ویژگی‌ها</h2>
      <ul>{children}</ul>
    </section>
  );
}
