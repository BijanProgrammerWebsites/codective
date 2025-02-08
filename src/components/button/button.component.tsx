"use client";

import { ComponentProps, ReactElement, useRef } from "react";

import Link from "next/link";

import { ReactRef, useGSAP } from "@gsap/react";
import gsap from "gsap";

import clsx from "clsx";

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

type ButtonComponentProps = ComponentProps<"button"> & CommonProps;

type ButtonLinkComponentProps = ComponentProps<typeof Link> & CommonProps;

export function ButtonComponent({
  variant = "default",
  shape = "solid",
  size = "medium",
  position = "default",
  className,
  children,
  ...otherProps
}: ButtonComponentProps): ReactElement {
  const [ref] = useButtonAnimation();

  return (
    <button
      ref={ref}
      className={clsx(
        styles.button,
        styles[variant],
        styles[shape],
        styles[size],
        styles[position],
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
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
  const [ref] = useButtonAnimation();

  return (
    <Link
      ref={ref}
      href={href}
      className={clsx(
        styles.button,
        styles[variant],
        styles[shape],
        styles[size],
        styles[position],
        className,
      )}
      {...otherProps}
    >
      {children}
    </Link>
  );
}

function useButtonAnimation(): [ref: ReactRef] {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const timeline = gsap.timeline({ paused: true });

    timeline.fromTo(
      element,
      {
        scale: 1,
      },
      {
        scale: 1.05,
        duration: 0.2,
      },
    );

    const mouseEnterHandler = (): void => {
      console.log("play");
      timeline.play();
    };

    const mouseLeaveHandler = (): void => {
      console.log("reverse");
      timeline.reverse();
    };

    element.addEventListener("mouseenter", mouseEnterHandler);
    element.addEventListener("mouseleave", mouseLeaveHandler);

    return () => {
      element.removeEventListener("mouseenter", mouseEnterHandler);
      element.removeEventListener("mouseleave", mouseLeaveHandler);
    };
  });

  return [ref];
}
