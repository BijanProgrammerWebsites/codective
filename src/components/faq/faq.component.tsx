"use client";

import { ReactElement } from "react";

import CustomAccordionComponent from "@/components/custom-accordion/custom-accordion.component";
import FaqItemComponent from "@/components/faq-item/faq-item.component";
import RulesComponent from "@/components/rules/rules.component";

import styles from "./faq.module.css";

type Props = {
  children?:
    | ReactElement<typeof FaqItemComponent>
    | ReactElement<typeof FaqItemComponent>[];
};

export default function FaqComponent({ children }: Props): ReactElement {
  return (
    <section id="faq" className={styles.faq}>
      <h2>قوانین و سوالات متداول</h2>
      <CustomAccordionComponent>
        <FaqItemComponent question="قوانین و مقررات">
          <RulesComponent />
        </FaqItemComponent>
        {children}
        <FaqItemComponent question="کلاس‌ها به‌صورت آنلاین برگزار میشن یا ضبط‌شده هستن؟">
          <p>
            کلاس‌ها آنلاین برگزار میشن اما محتوای دوره ضبط میشه و در اختیار
            شرکت‌کننده‌ها قرار می‌گیره. بنابراین اگه به هر دلیلی نتونید تو جلسات
            آنلاین شرکت کنید، می‌تونید از محتوای ضبط‌شده استفاده کنید.
          </p>
        </FaqItemComponent>
        <FaqItemComponent question="اگه نتونم آنلاین شرکت کنم، شرکت در این دوره فایده‌ای برام داره؟">
          <p>
            یکی از مزایای دوره اینه که به صورت آنلاین میتونید شرکت کنید و هر
            زمان واستون سوال پیش بیاد میتونید بپرسید. مثلاً وسط جلسه یا در جلسات
            بعدی.
          </p>
          <p>
            اما گروه پرسش‌وپاسخ اختصاصی هم داریم و اگه به هر دلیلی نتونید جلسه
            رو آنلاین شرکت کنید، می‌تونید فیلم ضبط‌شده رو ببینید و داخل گروه رفع
            اشکال کنید.
          </p>
        </FaqItemComponent>
        <FaqItemComponent question="بعد از پایان دوره هم به محتوا دسترسی دارم؟">
          <p>
            بله از اونجایی که جلسات ضبط میشن و در اختیار شما قرار می‌گیرن،
            می‌تونید اون‌ها رو دانلود کنید و برای همیشه بهشون دسترسی داشته
            باشید.
          </p>
        </FaqItemComponent>
        <FaqItemComponent question="جلسات کجا آپلود میشن؟">
          <p>
            با توجه به شرایط و تشخیص برگزارکننده، جلسات تو یکی از
            {` `}
            پلتفرم‌های YouTube، تلگرام یا آپارات آپلود میشن.
          </p>
          <p>
            جلسات به صورت خصوصی (Private) منتشر میشن و فقط افرادی می‌تونن
            فیلم‌ها رو مشاهده کنن که بهشون دسترسی داده بشه.
          </p>
        </FaqItemComponent>
        <FaqItemComponent question="اگه انصراف بدم، هزینه بهم برگردونده میشه؟">
          <p>
            خیر، امکان عودت وجه بعد از ثبت‌نام وجود نداره. بنابراین لطفاً قبل از
            ثبت‌نام، از تمام شرایط و قوانین آگاهی کسب کنید و با اطمینان اقدام
            کنید.
          </p>
        </FaqItemComponent>
      </CustomAccordionComponent>
    </section>
  );
}
