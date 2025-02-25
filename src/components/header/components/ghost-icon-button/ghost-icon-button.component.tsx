import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import styles from "./ghost-icon-button.module.css";

type Props = ComponentProps<"button">;

export default function GhostIconButtonComponent({
  className,
  children,
  ...otherProps
}: Props): ReactElement {
  return (
    <button
      className={clsx(styles["ghost-icon-button"], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
}
