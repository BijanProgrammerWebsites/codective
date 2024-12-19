import { ReactElement } from "react";

import Image from "next/image";

import dishesImage from "@/assets/images/dishes.png";

import styles from "./hero.module.css";

type Props = {
  subject: string;
  logo: ReactElement;
};

export default function HeroComponent({ subject, logo }: Props): ReactElement {
  return (
    <section id="intro" className={styles.hero}>
      <div className={styles.writings}>
        <h1>
          <span className={styles.subtitle}>فقط تو 2 ماه</span>
          <span className={styles.title}>
            <span className={styles.highlight}>{subject}</span>
            رو قورت بده!
          </span>
        </h1>
        <div className={styles.description}>
          <p>
            تو این بوت‌کمپ،
            {" " + subject + " "}
            رو از پایه یاد می‌گیریم و یه سایت کامل توسعه میدیم. هر هفته دو جلسه
            تدریس آنلاین و یک جلسه رفع اشکال داریم.
          </p>
          <p>
            از همه مهم‌تر بهتون تسک داده میشه و Code Review داریم. همچنین تو
            گروه اختصاصی می‌تونید هر جا به مشکل خوردید از منتورتون کمک بگیرید.
          </p>
        </div>
        <div className={styles.actions}>
          <button className="button primary large">همین الان شروع کن!</button>
        </div>
      </div>
      <div className={styles.visuals}>
        <Image
          className={styles.dishes}
          src={dishesImage}
          alt=""
          height={300}
          loading="eager"
        />
        {logo}
      </div>
    </section>
  );
}
