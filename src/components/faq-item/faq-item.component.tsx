"use client";

import { ReactElement } from "react";

import CustomAccordionItemComponent from "@/components/custom-accordion-item/custom-accordion-item.component";

import styles from "./faq-item.module.css";

type Props = {
  question: string;
  children: ReactElement | ReactElement[];
};

export default function FaqItemComponent({ question, children }: Props) {
  return (
    <CustomAccordionItemComponent
      className={styles["faq-item"]}
      header={question}
    >
      {children}
    </CustomAccordionItemComponent>
  );
}
