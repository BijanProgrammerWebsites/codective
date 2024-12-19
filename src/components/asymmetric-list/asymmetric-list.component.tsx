import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import styles from "./asymmetric-list.module.css";

type Props = ComponentProps<"ul"> & {
  children: ReactElement<HTMLLIElement>[];
  hollow?: boolean;
  highlight?: boolean;
};

export default function AsymmetricListComponent({
  className,
  children,
  hollow = false,
  ...otherProps
}: Props): ReactElement {
  return (
    <ul
      className={clsx(
        styles["asymmetric-list"],
        className,
        hollow && styles.hollow,
      )}
      {...otherProps}
    >
      {children}
    </ul>
  );
}
