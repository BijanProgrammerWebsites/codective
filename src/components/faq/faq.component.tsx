"use client";

import { ReactElement } from "react";

import CustomAccordionComponent from "@/components/custom-accordion/custom-accordion.component";
import FaqItemComponent from "@/components/faq-item/faq-item.component";

import styles from "./faq.module.css";

type Props = {
  children?:
    | ReactElement<typeof FaqItemComponent>
    | ReactElement<typeof FaqItemComponent>[];
};

export default function FaqComponent({ children }: Props): ReactElement {
  return (
    <section id="faq" className={styles.faq}>
      <h2>سوالات متداول</h2>
      <CustomAccordionComponent>
        {children}
        <FaqItemComponent question="آیا کلاس‌ها به‌صورت آنلاین برگزار میشن یا ضبط‌شده هستن؟">
          <p>
            کلاس‌ها آنلاین برگزار میشن اما محتوای دوره ضبط میشه و در اختیار
            شرکت‌کننده‌ها قرار می‌گیره. بنابراین اگه به هر دلیلی نتونید تو جلسات
            آنلاین شرکت کنید، می‌تونید از محتوای ضبط‌شده استفاده کنید.
          </p>
        </FaqItemComponent>
        <FaqItemComponent question="آیا بعد از پایان دوره هم به محتوا دسترسی دارم؟">
          <p>
            بله از اونجایی که جلسات ضبط میشن و در اختیار شما قرار می‌گیرن،
            می‌تونید اون‌ها رو دانلود کنید و برای همیشه بهشون دسترسی داشته
            باشید.
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
