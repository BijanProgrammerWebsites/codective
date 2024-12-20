import HeroComponent from "@/components/hero/hero.component";
import FeaturesComponent from "@/components/features/features.component";
import PrerequisitesComponent from "@/components/prerequisites/prerequisites.component";
import ReactOutlineComponent from "@/components/react-outline/react-outline.component";
import ReactRoadmapComponent from "@/components/react-roadmap/react-roadmap.component";
import ReactTimeNoticeComponent from "@/components/react-time-notice/react-time-notice.component";

import ReactLogo from "@/logo/react.logo";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div id="react" className={styles.page}>
      <HeroComponent
        subject="React"
        logo={<ReactLogo className={styles.logo} />}
      />
      <ReactTimeNoticeComponent />
      <FeaturesComponent />
      <PrerequisitesComponent
        technicalItems={[
          "تسلط به HTML و CSS و JavaScript",
          "آشنایی با npm یا یک Package Manager دیگر",
        ]}
      />
      <ReactOutlineComponent />
      <ReactRoadmapComponent />
      <ReactTimeNoticeComponent />
    </div>
  );
}
