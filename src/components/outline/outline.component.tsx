import { ReactElement } from "react";

import AsymmetricListComponent from "@/components/asymmetric-list/asymmetric-list.component";

import styles from "./outline.module.css";

type ListItems = ReactElement<HTMLLIElement>[];

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: [any, any];
};

export default function OutlineComponent({ children }: Props): ReactElement {
  return (
    <section id="outline" className={styles.outline}>
      <div className={styles.group}>
        <h2>چه چیزهایی یاد می‌گیریم؟</h2>
        <AsymmetricListComponent dir="ltr">
          {children[0]}
        </AsymmetricListComponent>
      </div>
      <div className={styles.group}>
        <h2>چه چیزهایی یاد نمی‌گیریم؟</h2>
        <AsymmetricListComponent dir="ltr" hollow>
          {children[1]}
        </AsymmetricListComponent>
      </div>
    </section>
  );
}

type ListProps = {
  children: ListItems;
};

function List({ children }: ListProps): ListItems {
  return children;
}

OutlineComponent.WillLearn = List;
OutlineComponent.WillNotLearn = List;
