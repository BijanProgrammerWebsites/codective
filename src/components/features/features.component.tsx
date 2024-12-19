import { ReactElement } from "react";

import AsymmetricListComponent from "@/components/asymmetric-list/asymmetric-list.component";

import styles from "./features.module.css";

export default function FeaturesComponent(): ReactElement {
  return (
    <section id="features" className={styles.features}>
      <h2>ویژگی‌ها</h2>
      <AsymmetricListComponent>
        <li>مدت دوره: 8 هفته</li>
        <li>2 جلسه تدریس آنلاین در هفته</li>
        <li>1 جلسه رفع اشکال در هفته</li>
        <li>ضبط و انتشار جلسات برای غایبین</li>
        <li>برنامه‌ی مشخص</li>
        <li>نقشه‌ی راه شفاف</li>
        <li>کاملاً پروژه‌محور و تسک‌محور</li>
        <li>پشتیبانی اختصاصی</li>
        <li>گروه خصوصی</li>
        <li>منتورینگ حرفه‌ای</li>
        <li>بررسی دقیق کدها</li>
        <li>پروژه‌های قابل‌ارائه در رزومه</li>
      </AsymmetricListComponent>
    </section>
  );
}
