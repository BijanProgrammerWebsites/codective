import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import styles from "./ordered-list.module.css";

type Props = ComponentProps<"ol">;

export default function OrderedListComponent({
  className,
  children,
}: Props): ReactElement {
  return (
    <ol className={clsx(styles["ordered-list"], className)}>{children}</ol>
  );
}
