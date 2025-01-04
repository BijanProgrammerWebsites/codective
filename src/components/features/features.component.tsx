import { ReactElement } from "react";

import FeatureComponent from "@/components/features/components/feature/feature.component";

import styles from "./features.module.css";

type Props = {
  logo: ReactElement;
};

export default function FeaturesComponent({ logo }: Props): ReactElement {
  return (
    <section id="features" className={styles.features}>
      <h2>ویژگی‌ها</h2>
      <ul>
        <FeatureComponent>8 هفته فشرده</FeatureComponent>
        <FeatureComponent>هر هفته 2 جلسه تدریس آنلاین</FeatureComponent>
        <FeatureComponent>هر هفته 1 جلسه رفع اشکال</FeatureComponent>
        <FeatureComponent>ضبط و انتشار جلسات برای غایبین</FeatureComponent>
        <FeatureComponent>برنامه‌ی مشخص</FeatureComponent>
        <FeatureComponent>مختصر و مفید</FeatureComponent>
        <FeatureComponent>آموزش کاربردی</FeatureComponent>
        <FeatureComponent>پشتیبانی اختصاصی</FeatureComponent>
        <FeatureComponent className={styles.center}>{logo}</FeatureComponent>
        <FeatureComponent>گروه خصوصی</FeatureComponent>
        <FeatureComponent>مفاهیم عمیق</FeatureComponent>
        <FeatureComponent>بررسی دقیق کدها</FeatureComponent>
        <FeatureComponent>نقشه راه شفاف</FeatureComponent>
        <FeatureComponent>کاملاً پروژه‌محور و تسک‌محور</FeatureComponent>
        <FeatureComponent>منتورینگ حرفه‌ای</FeatureComponent>
        <FeatureComponent>پروژه‌های قابل‌ارائه در رزومه</FeatureComponent>
        <FeatureComponent>کتابخانه‌های معروف</FeatureComponent>
      </ul>
    </section>
  );
}
