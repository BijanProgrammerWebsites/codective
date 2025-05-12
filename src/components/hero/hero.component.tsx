import { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";

import dishesImage from "@/assets/images/dishes.png";

import ExpiredComponent from "@/components/expired/expired.component";

import styles from "./hero.module.css";

type Props = {
  subtitle: string;
  subject: string;
  logo: ReactElement;
  description: ReactElement;
  dish?: boolean;
  expired?: boolean;
};

export default function HeroComponent({
  subtitle,
  subject,
  logo,
  description,
  dish = false,
  expired = false,
}: Props): ReactElement {
  return (
    <section
      id="intro"
      className={clsx(
        styles.hero,
        dish && styles.dish,
        expired && styles.expired,
      )}
    >
      <div className={styles.writings}>
        <h1>
          <span className={styles.subtitle}>{subtitle}</span>
          <span className={styles.title}>
            <span className={styles.highlight}>{subject}</span>
            {` `}
            {dish && "رو قورت بده!"}
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
        {dish && (
          <Image
            className={styles.dishes}
            src={dishesImage}
            alt=""
            height={300}
            priority
          />
        )}
        {logo}
      </div>
      {expired && <ExpiredComponent />}
    </section>
  );
}
