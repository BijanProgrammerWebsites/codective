import { ReactElement } from "react";

import { AccordionItem, AccordionItemProps } from "@szhsin/react-accordion";

import clsx from "clsx";

import MingcuteDownLine from "@/icons/MingcuteDownLine";

import styles from "./custom-accordion-item.module.css";

type Props = AccordionItemProps & {
  header: string;
};

export default function CustomAccordionItemComponent({
  header,
  ...otherProps
}: Props): ReactElement {
  return (
    <AccordionItem
      className={styles.item}
      header={
        <>
          {header}
          <MingcuteDownLine className={styles.chevron} />
        </>
      }
      buttonProps={{
        className: ({ isEnter }) => {
          return clsx(styles.button, isEnter && styles.expanded);
        },
      }}
      contentProps={{ className: styles.content }}
      panelProps={{ className: styles.panel }}
      {...otherProps}
    />
  );
}
