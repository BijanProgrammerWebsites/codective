import { PropsWithChildren, ReactElement } from "react";

import clsx from "clsx";

import ExpiredComponent from "@/components/expired/expired.component";

import styles from "./gold-card.module.css";

type Props = PropsWithChildren<{
  cardContentClassName?: string;
  expired?: boolean;
}>;

export default function GoldCardComponent({
  cardContentClassName,
  children,
  expired = false,
}: Props): ReactElement {
  return (
    <div className={clsx(styles["gold-card"], expired && styles.expired)}>
      <div className={styles.card}>
        <div className={cardContentClassName}>{children}</div>
      </div>
      {expired && <ExpiredComponent />}
    </div>
  );
}
