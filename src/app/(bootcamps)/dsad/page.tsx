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
        subtitle="تعطیلات نوروز روز از دست نده!"
        subject="ساختمان داده و طراحی الگوریتم"
        logo={<DsadLogo className={styles.logo} />}
        description={
          <>
            <p>
              این دوره از 2 تا 12 فروردین تو تعطیلات عید نوروز برگزار میشه؛ یعنی
              یه فرصت طلایی برای یادگیری بدون دغدغه.
            </p>
            <p>
              هر روز کلاس آنلاین داریم؛ هر جلسه روی یه مبحث خاص تمرکز می‌کنیم و
              چندین مثال حل می‌کنیم که تو مسابقات برنامه‌نویسی و مصاحبه‌ها
              پرسیده میشن.
            </p>
            <p>
              بعد از هر جلسه، بهتون تمرین داده میشه که به صورت خودکار داوری و
              امتیازدهی میشه. بنابراین هر زمان، حتی بعد از اتمام دوره، می‌تونید
              پاسخ خودتون رو ثبت کنید.
            </p>
          </>
        }
      />
      <FeaturesComponent logo={<DsadLogo />} />
      <PrerequisitesComponent
        technicalItems={["آشنایی با یکی از زبان‌های TypeScript یا Java یا #C"]}
      />
      <DsadOutlineComponent />
      <DsadRoadmapComponent />
      <CtaBannerComponent />
    </div>
  );
}
