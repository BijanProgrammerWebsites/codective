import { ReactElement } from "react";

import styles from "./features.module.css";

type Props = {
  logo: ReactElement;
};

export default function FeaturesComponent({ logo }: Props): ReactElement {
  return (
    <section id="features" className={styles.features}>
      <h2>ویژگی‌ها</h2>
      <ul>
        <li>8 هفته فشرده</li>
        <li>هر هفته 2 جلسه تدریس آنلاین</li>
        <li>هر هفته 1 جلسه رفع اشکال</li>
        <li>ضبط و انتشار جلسات برای غایبین</li>
        <li>برنامه‌ی مشخص</li>
        <li>مختصر و مفید</li>
        <li>آموزش کاربردی</li>
        <li>پشتیبانی اختصاصی</li>
        <li className={styles.center}>{logo}</li>
        <li>گروه خصوصی</li>
        <li>مفاهیم عمیق</li>
        <li>بررسی دقیق کدها</li>
        <li>نقشه راه شفاف</li>
        <li>کاملاً پروژه‌محور و تسک‌محور</li>
        <li>منتورینگ حرفه‌ای</li>
        <li>پروژه‌های قابل‌ارائه در رزومه</li>
        <li>کتابخانه‌های معروف</li>
      </ul>
    </section>
  );
}
