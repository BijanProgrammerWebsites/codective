import { ReactElement } from "react";

import styles from "./logo-image.module.css";

type Props = {
  src: string;
  alt: string;
};

export default function LogoImageComponent({ src, alt }: Props): ReactElement {
  return <img className={styles["logo-image"]} src={src} alt={alt} />;
}
