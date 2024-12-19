import { ReactElement } from "react";

import { Accordion, AccordionProps } from "@szhsin/react-accordion";

import styles from "./custom-accordion.module.css";

type Props = AccordionProps;

export default function CustomAccordionComponent({
  children,
  ...otherProps
}: Props): ReactElement {
  return (
    <Accordion
      className={styles.accordion}
      transition
      transitionTimeout={250}
      {...otherProps}
    >
      {children}
    </Accordion>
  );
}
