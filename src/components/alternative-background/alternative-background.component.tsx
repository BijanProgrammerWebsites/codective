import { PropsWithChildren, ReactElement } from "react";

import styles from "./alternative-background.module.css";

type Props = PropsWithChildren;

export default function AlternativeBackgroundComponent({
  children,
}: Props): ReactElement {
  return (
    <section className={styles["alternative-background"]}>{children}</section>
  );
}
