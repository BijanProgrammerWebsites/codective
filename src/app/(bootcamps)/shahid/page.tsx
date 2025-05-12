import clsx from "clsx";

import ShahidRaisiPortrait from "@/assets/portraits/shahid-raisi.png";

import CtaBannerComponent from "@/components/cta-banner/cta-banner.component";
import FaqItemComponent from "@/components/faq-item/faq-item.component";
import FaqComponent from "@/components/faq/faq.component";
import HeroComponent from "@/components/hero/hero.component";
import LogoImageComponent from "@/components/logo-image/logo-image.component";
import PrerequisitesComponent from "@/components/prerequisites/prerequisites.component";
// import ShahidOutlineComponent from "@/components/shahid-outline/shahid-outline.component";
// import ShahidRoadmapComponent from "@/components/shahid-roadmap/shahid-roadmap.component";
import SimpleFeaturesComponent from "@/components/simple-features/simple-features.component";
import TutorComponent from "@/components/tutor/tutor.component";
import TypescriptDocComponent from "@/components/typescript-doc/typescript-doc.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div id="shahid" className={clsx(styles.page, "light")}>
      <HeroComponent
        subtitle="بوت‌کمپ صلواتی شهید رئیسی"
        subject="طلای گمشده‌ای که دنبالش میگشتی!"
        logo={
          <LogoImageComponent src={ShahidRaisiPortrait.src} alt="شهید رئیسی" />
        }
        description={
          <>
            <p>
              هر چقد تلاش میکنی نمیتونی کار پیدا کنی؟ برای تمام شرکت‌ها رزومه
              فرستادی اما هیچکدوم جواب ندادن؟ نمیدونی مشکل از کجاست؟ تمام راه‌ها
              به بن‌بست رسیده؟
              <br />
              <b>پس جات اینجاست!</b>
            </p>
            <p>
              اینجا در کنار 7 نفر دیگه، یه تیم تشکیل میدی و روی یه پروژه‌ی واقعی
              کار می‌کنی. اینجوری هم
              {` `}
              <b>کار تیمی</b>
              {` `}
              یاد می‌گیری، هم یه
              {` `}
              <b>نمونه‌کار قوی</b>
              {` `}
              داری که بذاری تو رزومه‌ت.
            </p>
            <p>
              تمام روال‌هایی که تو یه شرکت فنی وجود داره، اینجا شبیه‌سازی شده.
              از Sprint و جلسات روزانه و Code Review بگیر تا جلسات یک به یک و
              Retro و Team Building.
            </p>
            <p>
              کلی کارگاه داریم که بهت کمک میکنه بتونی کار پیدا کنی. از
              رزومه‌نویسی و شبکه‌سازی بگیر تا تکنیک‌های مصاحبه و مهارت نرم.
              خودمم همیشه در دسترسم.
            </p>
            <p>
              تعهد میدم تمام تلاشم‌و کنم که بتونی کار پیدا کنی.
              <br />
              اگه خودتم تعهد و انگیزه و پشتکار داری...
              {` `}
              <b>بسم‌الله</b>!
            </p>
          </>
        }
      />
      <TutorComponent />
      <SimpleFeaturesComponent>
        <li>رایگان</li>
        <li>شبیه‌سازی کار واقعی</li>
        <li>کاملاً دورکاری</li>
        <li>جلسات روزانه و هفتگی</li>
        <li>Agile, Scrum, Sprint</li>
        <li>Retrospective</li>
        <li>Team Building</li>
        <li>Coffee Chat</li>
        <li>Soft Skills</li>
        <li>کار تیمی</li>
        <li>منتورینگ</li>
        <li>Code Review</li>
        <li>درک عمیق JavaScript</li>
        <li>درک عمیق React</li>
        <li>Clean Code</li>
        <li>SOLID</li>
        <li>شبیه‌سازی مصاحبه</li>
        <li>تکنیک‌های محصابه فنی</li>
        <li>تکنیک‌های محصابه منابع انسانی</li>
        <li>کارگاه‌های متنوع و متعدد</li>
        <li>رزومه‌نویسی</li>
        <li>نمونه‌کار قوی</li>
        <li>شبکه‌سازی</li>
        <li>LinkedIn</li>
      </SimpleFeaturesComponent>
      <PrerequisitesComponent
        technicalItems={[
          "تسلط به HTML و CSS و JavaScript",
          "تسلط به React",
          "آشنایی با Next.js",
          "دانشجو یا فارغ‌التحصیل دانشگاهی",
        ]}
      />
      {/*<ShahidOutlineComponent />*/}
      {/*<ShahidRoadmapComponent />*/}
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
        <FaqItemComponent question="مزیت اصلی این دوره چیه؟">
          <p>
            مزیت اصلی دوره تمرین‌هاییه که بعد از هر جلسه بهتون داده میشه و با
            داوری خودکار امتیازدهی میشه. بنابراین شما می‌تونید در هر ساعتی از
            شبانه‌روز و حتی بعد از اتمام دوره، تمرین‌ها رو ارسال کنید.
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
        <FaqItemComponent question="با توجه به ایام عید، بهتر نیست کلاس‌ها در روز برگزار بشن؟">
          <p>
            بله بهتر بود. اما به علت مصادف شدن این ایام با ماه مبارک رمضان،
            تدریس در طول روز سخته؛ بنابراین زمان کلاس‌ها به بعد از افطار منتقل
            شده.
          </p>
        </FaqItemComponent>
      </FaqComponent>
    </div>
  );
}
