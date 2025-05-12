import FeaturesComponent from "@/components/features/features.component";
import HeroComponent from "@/components/hero/hero.component";
import PrerequisitesComponent from "@/components/prerequisites/prerequisites.component";

import NextLogo from "@/logo/next.logo";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div id="next" className={styles.page}>
      <HeroComponent
        expired
        subtitle="فقط تو 2 ماه"
        subject="Next.js"
        logo={<NextLogo />}
        description={
          <>
            <p key={1}>
              تو این بوت‌کمپ، Next.js رو از پایه یاد می‌گیریم و یه سایت کامل
              توسعه میدیم. هر هفته دو جلسه تدریس آنلاین و یک جلسه رفع اشکال
              داریم.
            </p>
            <p key={2}>
              از همه مهم‌تر بهتون تسک داده میشه و Code Review داریم. همچنین تو
              گروه اختصاصی می‌تونید هر جا به مشکل خوردید از منتورتون کمک بگیرید.
            </p>
            <p key={3}>این دوره از 1 دی شروع میشه و تا 30 بهمن ادامه داره.</p>
          </>
        }
      />
      <FeaturesComponent logo={<NextLogo />} />
      <PrerequisitesComponent
        technicalItems={[
          "تسلط به HTML و CSS و JavaScript",
          "روان بودن در React",
          "آشنایی با TypeScript",
        ]}
      />
    </div>
  );
}
