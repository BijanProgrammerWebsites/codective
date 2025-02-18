import HeroComponent from "@/components/hero/hero.component";
import FeaturesComponent from "@/components/features/features.component";
import PrerequisitesComponent from "@/components/prerequisites/prerequisites.component";
import ReactOutlineComponent from "@/components/react-outline/react-outline.component";
import ReactRoadmapComponent from "@/components/react-roadmap/react-roadmap.component";
import CtaBannerComponent from "@/components/cta-banner/cta-banner.component";

import ReactLogo from "@/logo/react.logo";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div id="react" className={styles.page}>
      <HeroComponent
        subtitle="فقط تو 2 ماه"
        subject="React"
        logo={<ReactLogo className={styles.logo} />}
        description={
          <>
            <p key={1}>
              تو این بوت‌کمپ، React رو از پایه یاد می‌گیریم و یه سایت کامل توسعه
              میدیم. هر هفته دو جلسه تدریس آنلاین و یک جلسه رفع اشکال داریم.
            </p>
            <p key={2}>
              از همه مهم‌تر بهتون تسک داده میشه و Code Review داریم. همچنین تو
              گروه اختصاصی می‌تونید هر جا به مشکل خوردید از منتورتون کمک بگیرید.
            </p>
            <p key={3}>
              این دوره از 7 بهمن شروع میشه و تا 28 اسفند ادامه داره.
            </p>
          </>
        }
      />
      <FeaturesComponent logo={<ReactLogo />} />
      <PrerequisitesComponent
        technicalItems={[
          "تسلط به HTML و CSS و JavaScript",
          "آشنایی با npm یا یک Package Manager دیگر",
        ]}
      />
      <ReactOutlineComponent />
      <ReactRoadmapComponent />
      <CtaBannerComponent />
    </div>
  );
}
