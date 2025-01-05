"use client";

import { ComponentProps, ReactElement } from "react";

import { motion, Variants } from "motion/react";

import clsx from "clsx";

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.5,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      delay: 0.025 * Math.floor(Math.random() * 10),
    },
  }),
};

type Props = ComponentProps<typeof motion.li> & {
  index: number;
};

export default function MotionListItemComponent({
  children,
  className,
  index,
}: Props): ReactElement {
  return (
    <motion.li
      className={clsx(className)}
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        amount: "all",
      }}
      custom={index}
    >
      {children}
    </motion.li>
  );
}
