import { ComponentProps, ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import dishesImage from "@/assets/images/dishes.png";

import styles from "./hero.module.css";

type Props = {
  subtitle: string;
  subject: string;
  logo: ReactElement;
  description: ReactElement;
};

export default function HeroComponent({
  subtitle,
  subject,
  logo,
  description,
}: Props): ReactElement {
  return (
    <section id="intro" className={styles.hero}>
      <div className={styles.writings}>
        <h1>
          <span className={styles.subtitle}>{subtitle}</span>
          <span className={styles.title}>
            <span className={styles.highlight}>{subject}</span>
            {` `}
            رو قورت بده!
          </span>
        </h1>
        <div className={styles.description}>{description}</div>
        <div className={styles.actions}>
          <Link className="button primary large" href="#register">
            همین الان شروع کن!
          </Link>
        </div>
      </div>
      <div className={styles.visuals}>
        <Image
          className={styles.dishes}
          src={dishesImage}
          alt=""
          height={300}
          priority
        />
        {logo}
      </div>
    </section>
  );
}
