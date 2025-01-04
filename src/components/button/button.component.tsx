"use client";

import { ComponentProps, ReactElement } from "react";

import { motion } from "motion/react";

import clsx from "clsx";

import MotionLinkComponent from "@/components/motion-link/motion-link.component";

import styles from "./button.module.css";

export type ButtonVariant = "default" | "primary";
export type ButtonShape = "solid" | "outlined";
export type ButtonSize = "medium" | "large";
export type ButtonPosition = "default" | "inline";

type CommonProps = {
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  position?: ButtonPosition;
};

type ButtonComponentProps = ComponentProps<typeof motion.button> & CommonProps;

type ButtonLinkComponentProps = ComponentProps<typeof MotionLinkComponent> &
  CommonProps;

export function ButtonComponent({
  variant = "default",
  shape = "solid",
  size = "medium",
  position = "default",
  className,
  children,
  ...otherProps
}: ButtonComponentProps): ReactElement {
  return (
    <motion.button
      className={clsx(
        styles.button,
        styles[variant],
        styles[shape],
        styles[size],
        styles[position],
        className,
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      {...otherProps}
    >
      {children}
    </motion.button>
  );
}

export function ButtonLinkComponent({
  variant = "default",
  shape = "solid",
  size = "medium",
  position = "default",
  className,
  href,
  children,
  ...otherProps
}: ButtonLinkComponentProps): ReactElement {
  return (
    <MotionLinkComponent
      href={href}
      className={clsx(
        styles.button,
        styles[variant],
        styles[shape],
        styles[size],
        styles[position],
        className,
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      {...otherProps}
    >
      {children}
    </MotionLinkComponent>
  );
}
