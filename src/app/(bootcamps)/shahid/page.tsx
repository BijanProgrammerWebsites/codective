import clsx from "clsx";

import ShahidRaisiPortrait from "@/assets/portraits/shahid-raisi.png";

import CtaPricelessBannerComponent from "@/components/cta-priceless-banner/cta-priceless-banner.component";
import FaqItemComponent from "@/components/faq-item/faq-item.component";
import FaqComponent from "@/components/faq/faq.component";
import HeroComponent from "@/components/hero/hero.component";
import LogoImageComponent from "@/components/logo-image/logo-image.component";
import PrerequisitesComponent from "@/components/prerequisites/prerequisites.component";
import ShahidRulesComponent from "@/components/shahid-rules/shahid-rules.component";
import SimpleFeaturesComponent from "@/components/simple-features/simple-features.component";
import TutorComponent from "@/components/tutor/tutor.component";

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
              هرچی تلاش میکنی نمیتونی کار پیدا کنی؟ برای تمام شرکت‌ها رزومه
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
        <li>Tip of the Day</li>
        <li>شبیه‌سازی مصاحبه</li>
        <li>تکنیک‌های مصاحبه فنی</li>
        <li>تکنیک‌های مصاحبه منابع انسانی</li>
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
      <CtaPricelessBannerComponent
        title="کاملاً رایگان!"
        subtitle="از آموزش تا استخدام"
        link="https://survey.porsline.ir/s/IVjBStc4"
      />
      <FaqComponent rules={<ShahidRulesComponent />} trimEnd>
        <FaqItemComponent question="این بوت‌کمپ برای چه افرادی مناسبه؟">
          <p>
            این دوره برای افرادی مناسبه که تسلط خوبی روی مفاهیم اصلی و React
            دارن اما نمیتونن کار پیدا کنن. علت این مشکل می‌تونه رزومه‌ی نامناسب،
            نداشتن نمونه‌کار قوی، عدم شبکه‌سازی و مسائلی از این قبیل باشه.
          </p>
        </FaqItemComponent>
        <FaqItemComponent question="چند روز برای بوت‌کمپ در نظر گرفته شده؟">
          <p>
            در ابتدا شما باید تعهد بدید حداقل 40 روز تو این بوت‌کمپ شرکت کنید و
            تسک‌هایی که بهتون تخصیص داده میشه رو انجام بدید. همچنین باید تو تمام
            جلسات و کارگاه‌ها شرکت کنید و حضور فعالی داشته باشید.
          </p>
          <p>
            بعد از این 40 روز، اختیار با خودتونه که ادامه بدید یا بوت‌کمپ رو ترک
            کنید.
          </p>
        </FaqItemComponent>
        <FaqItemComponent question="چند ساعت در روز باید وقت بذارم؟">
          <p>مثل شغل عادی باید از ساعت 8 تا 16 در دسترس و مشغول کار باشید.</p>
        </FaqItemComponent>
        <FaqItemComponent question="اگه زودتر از موعد مقرر دوره رو ترک کنم، چی میشه؟">
          <p>
            اگه به هر دلیلی وظایف خودتون رو انجام ندید یا دوره رو زودتر از 40
            روز ترک کنید، تمام پولی که به عنوان وثیقه در اختیار من گذاشتید ضبط
            میشه و من میتونم هر طور که خواستم اون پول رو خرج کنم.
          </p>
        </FaqItemComponent>
      </FaqComponent>
    </div>
  );
}
