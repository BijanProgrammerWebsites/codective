"use client";

import { PropsWithChildren, ReactElement } from "react";

import { motion } from "motion/react";

import clsx from "clsx";

type Props = PropsWithChildren & {
  className?: string;
};

export default function FeatureComponent({
  children,
  className,
}: Props): ReactElement {
  return (
    <motion.li
      className={clsx(className)}
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: "all",
        margin: "-50px",
      }}
      transition={{ type: "spring", bounce: 0.5 }}
    >
      {children}
    </motion.li>
  );
}
