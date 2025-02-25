import { ReactElement } from "react";

import Link from "next/link";

import styles from "./typescript-doc.module.css";

export default function TypescriptDocComponent(): ReactElement {
  return (
    <p className={styles["typescript-doc"]}>
      اگه به JavaScript مسلط هستید اما با TypeScript کار نکردید، می‌تونید از
      {` `}
      <Link
        className={styles.highlight}
        href="https://docs.codective.ir/typescript"
        target="_blank"
      >
        اینجا
      </Link>
      {` `}
      مفاهیم مورد نیاز رو یاد بگیرید.
    </p>
  );
}
