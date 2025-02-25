import clsx from "clsx";

import HeroComponent from "@/components/hero/hero.component";
import TutorComponent from "@/components/tutor/tutor.component";
import SimpleFeaturesComponent from "@/components/simple-features/simple-features.component";
import PrerequisitesComponent from "@/components/prerequisites/prerequisites.component";
import DsadOutlineComponent from "@/components/dsad-outline/dsad-outline.component";
import DsadRoadmapComponent from "@/components/dsad-roadmap/dsad-roadmap.component";
import CtaBannerComponent from "@/components/cta-banner/cta-banner.component";
import FaqComponent from "@/components/faq/faq.component";
import FaqItemComponent from "@/components/faq-item/faq-item.component";

import DsadLogo from "@/logo/dsad.logo";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div id="dsad" className={clsx(styles.page, "light")}>
      <HeroComponent
        subtitle="تعطیلات نوروز روز از دست نده!"
        subject="ساختمان داده و طراحی الگوریتم"
        logo={<DsadLogo className={styles.logo} />}
        description={
          <>
            <p>
              این دوره
              {` `}
              <b> از 2 تا 12 فروردین</b>
              {` `}
              تو تعطیلات عید نوروز برگزار میشه؛ یعنی یه
              {` `}
              <strong>فرصت طلایی</strong>
              {` `}
              برای یادگیری بدون دغدغه.
            </p>
            <p>
              هر روز
              {` `}
              <b>کلاس آنلاین</b>
              {` `}
              داریم؛ هر جلسه روی یه مبحث خاص تمرکز می‌کنیم و چندین مثال حل
              می‌کنیم که تو
              {` `}
              <b>مسابقات برنامه‌نویسی</b>
              {` `}و{` `}
              <b> مصاحبه‌ها</b>
              {` `}
              پرسیده میشن.
            </p>
            <p>
              بعد از هر جلسه، بهتون تمرین داده میشه که به صورت خودکار داوری و
              امتیازدهی میشه. بنابراین هر زمان،
              {` `}
              <b>حتی بعد از اتمام دوره</b>،{` `}
              می‌تونید پاسخ خودتون رو ثبت کنید.
            </p>
          </>
        }
      />
      <TutorComponent />
      <SimpleFeaturesComponent>
        <li>10 روز فشرده</li>
        <li>جلسات آنلاین 2 ساعته</li>
        <li>ضبط و آپلود جلسات</li>
        <li>حل چندین مثال در هر جلسه</li>
        <li>تمرین منزل برای هر جلسه</li>
        <li>برنامه‌ی مشخص</li>
        <li>مختصر و مفید</li>
        <li>آموزش کاربردی</li>
        <li>پشتیبانی اختصاصی</li>
        <li>گروه خصوصی</li>
        <li>داوری خودکار پاسخ‌ها</li>
        <li>نقشه راه شفاف</li>
        <li>مناسب برای رزومه</li>
        <li>مناسب برای مسابقات استخدامی</li>
        <li>مناسب برای مصاحبه‌های فنی</li>
      </SimpleFeaturesComponent>
      <PrerequisitesComponent
        technicalItems={[
          "ریاضیات دبیرستان",
          "برنامه‌نویسی نیمه‌پیشرفته (معادل ترم 2 دانشگاه)",
          "برنامه‌نویسی شیءگرا (OOP)",
          "آشنایی با یکی از زبان‌های TypeScript یا Java یا #C",
        ]}
      />
      <DsadOutlineComponent />
      <DsadRoadmapComponent />
      <CtaBannerComponent
        title="تنها در 10 روز!"
        subtitle={
          <>
            <div>از مفاهیم پایه</div>
            <div>تا تکنیک‌های حرفه‌ای</div>
          </>
        }
        price={480_000}
      />
      <FaqComponent>
        <FaqItemComponent question="این دوره برای چه افرادی مناسبه؟">
          <p>
            این دوره برای افرادی که برنامه‌نویسی بلدن و می‌خوان ساختمان داده و
            طراحی الگوریتم یاد بگیرن مناسبه. سطح برنامه‌نویسی شما باید در حدی
            باشه که مفاهیمی مثل آرایه‌ها، حلقه‌ها، توابع و کلاس‌ها رو بلد باشید
            و بتونید به خوبی ازشون استفاده کنید.
          </p>
        </FaqItemComponent>
        <FaqItemComponent question="محتوای دوره به‌صورت تئوریه یا عملی هم هست؟">
          <p>
            تو هر جلسه، مباحث تئوری رو مطرح می‌کنیم و بعد در قالب چندین مثال در
            عمل پیاده‌سازیشون می‌کنیم.
          </p>
        </FaqItemComponent>
        <FaqItemComponent question="چرا گفته شده باید زبان‌های TypeScript یا Java یا #C رو بلد باشم؟">
          <p>
            ما تو دوره قراره از زبان TypeScript برای پیاده‌سازی الگوریتم‌ها
            استفاده کنیم؛ با توجه به فشردگی دوره و زمان محدود، نمی‌تونیم جداگانه
            این زبان رو تدریس کنیم؛ بنابراین باید از قبل باهاش کار کرده باشید.
          </p>
          <p>
            زبان‌های Java و #C سینتکس مشابهی با زبان TypeScript دارن و خیلی از
            مفاهیمی که تو TypeScript وجود داره و قراره تو دوره ازشون استفاده
            کنیم، تو این دو زبان هم هست. بنابراین اگه TypeScript بلد نیستید اما
            یکی از زبان‌های Java یا #C رو بلدید، مشکلی پیش نمیاد.
          </p>
        </FaqItemComponent>
        <FaqItemComponent question="کلاس‌ها چه زمانی برگزار میشن؟">
          <p>از تاریخ 2 تا 12 فروردین، هر روز ساعت 8 تا 10 شب کلاس داریم.</p>
        </FaqItemComponent>
      </FaqComponent>
    </div>
  );
}
