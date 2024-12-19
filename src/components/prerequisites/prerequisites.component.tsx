import { PropsWithChildren, ReactElement } from "react";

import TablerCornerDownLeft from "@/icons/TablerCornerDownLeft";

import styles from "./prerequisites.module.css";

type Props = {
  technicalItems: string[];
};

export default function PrerequisitesComponent({
  technicalItems,
}: Props): ReactElement {
  return (
    <section id="prerequisites" className={styles.prerequisites}>
      <h2>پیش‌نیازها</h2>
      <div className={styles.group}>
        <h3>فنی</h3>
        <ul>
          {technicalItems.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </ul>
      </div>
      <div className={styles.group}>
        <h3>غیرفنی</h3>
        <ul>
          <ListItem>انگیزه و هدف</ListItem>
          <ListItem>نظم و انضباط</ListItem>
          <ListItem>وقت و انرژی کافی</ListItem>
          <ListItem>انتقادپذیری</ListItem>
          <ListItem>خلاقیت</ListItem>
        </ul>
      </div>
    </section>
  );
}

function ListItem({ children }: PropsWithChildren): ReactElement {
  return (
    <li>
      <TablerCornerDownLeft />
      {children}
    </li>
  );
}
