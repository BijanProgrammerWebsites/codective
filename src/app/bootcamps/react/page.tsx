import HeroComponent from "@/components/hero/hero.component";
import FeaturesComponent from "@/components/features/features.component";
import PrerequisitesComponent from "@/components/prerequisites/prerequisites.component";

import ReactLogo from "@/logo/react.logo";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div id="react" className={styles.page}>
      <HeroComponent
        subject="React"
        logo={<ReactLogo className={styles.logo} />}
      />
      <FeaturesComponent />
      <PrerequisitesComponent
        technicalItems={[
          "تسلط به HTML و CSS و JavaScript",
          "آشنایی با npm یا یک Package Manager دیگر",
        ]}
      />
    </div>
  );
}
