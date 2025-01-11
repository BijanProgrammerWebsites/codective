"use client";

import { ComponentProps, ReactElement } from "react";

import useListAnimation from "@/hooks/use-list-animation.hook";

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
  const [scope] = useListAnimation();

  return (
    <ul
      ref={scope}
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
