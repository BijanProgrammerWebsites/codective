import HeroComponent from "@/components/hero/hero.component";
import FeaturesComponent from "@/components/features/features.component";

import NextLogo from "@/logo/next.logo";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div id="next" className={styles.page}>
      <HeroComponent subject="Next.js" logo={<NextLogo />} />
      <FeaturesComponent />
    </div>
  );
}
