import HeroComponent from "@/components/hero/hero.component";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <HeroComponent />
    </div>
  );
}
