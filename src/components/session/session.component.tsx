import { ReactElement } from "react";

import OrderedListComponent from "@/components/ordered-list/ordered-list.component";

import styles from "./session.module.css";

type Props = {
  children: ReactElement<HTMLLIElement>[];
};

export default function SessionComponent({ children }: Props): ReactElement {
  return (
    <div className={styles.session}>
      <OrderedListComponent>{children}</OrderedListComponent>
    </div>
  );
}
