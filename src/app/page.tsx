import HeroComponent from "@/components/hero/hero.component";
import FeaturesComponent from "@/components/features/features.component";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <HeroComponent />
      <FeaturesComponent />
    </div>
  );
}
