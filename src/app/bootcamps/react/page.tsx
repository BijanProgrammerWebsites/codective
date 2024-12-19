import HeroComponent from "@/components/hero/hero.component";
import FeaturesComponent from "@/components/features/features.component";

import ReactLogo from "@/logo/react.logo";

import "./palette.css";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <HeroComponent
        subject="React"
        logo={<ReactLogo className={styles.logo} />}
      />
      <FeaturesComponent />
    </div>
  );
}
