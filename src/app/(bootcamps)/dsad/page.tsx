import HeroComponent from "@/components/hero/hero.component";
import FeaturesComponent from "@/components/features/features.component";
import PrerequisitesComponent from "@/components/prerequisites/prerequisites.component";
import DsadOutlineComponent from "@/components/dsad-outline/dsad-outline.component";
import DsadRoadmapComponent from "@/components/dsad-roadmap/dsad-roadmap.component";
import CtaBannerComponent from "@/components/cta-banner/cta-banner.component";

import DsadLogo from "@/logo/dsad.logo";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div id="dsad" className={styles.page}>
      <HeroComponent
        length="10 روز"
        subject="ساختمان داده و طراحی الگوریتم"
        logo={<DsadLogo className={styles.logo} />}
        extraDescriptions={[
          <p key="date">
            این دوره از 7 بهمن شروع میشه و تا 28 اسفند ادامه داره.
          </p>,
        ]}
      />
      <FeaturesComponent logo={<DsadLogo />} />
      <PrerequisitesComponent
        technicalItems={[
          "تسلط به HTML و CSS و JavaScript",
          "آشنایی با npm یا یک Package Manager دیگر",
        ]}
      />
      <DsadOutlineComponent />
      <DsadRoadmapComponent />
      <CtaBannerComponent />
    </div>
  );
}
