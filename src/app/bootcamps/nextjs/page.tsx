import HeroComponent from "@/components/hero/hero.component";
import FeaturesComponent from "@/components/features/features.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <HeroComponent />
      <FeaturesComponent />
    </div>
  );
}
