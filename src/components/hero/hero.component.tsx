import { ComponentProps, ReactElement } from "react";

import Image from "next/image";

import dishesImage from "@/assets/images/dishes.png";

import { ButtonLinkComponent } from "@/components/button/button.component";

import styles from "./hero.module.css";

type Props = {
  subject: string;
  logo: ReactElement;
  extraDescriptions?: ReactElement<ComponentProps<"p">>[];
};

export default function HeroComponent({
  subject,
  logo,
  extraDescriptions,
}: Props): ReactElement {
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
          {extraDescriptions}
        </div>
        <div className={styles.actions}>
          <ButtonLinkComponent href="#register" variant="primary" size="large">
            همین الان شروع کن!
          </ButtonLinkComponent>
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
