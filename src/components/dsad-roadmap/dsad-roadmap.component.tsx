"use client";

import { ReactElement } from "react";

import CustomAccordionComponent from "@/components/custom-accordion/custom-accordion.component";
import CustomAccordionItemComponent from "@/components/custom-accordion-item/custom-accordion-item.component";
import SessionComponent from "@/components/session/session.component";

import styles from "./dsad-roadmap.module.css";

export default function DsadRoadmapComponent(): ReactElement {
  return (
    <section id="roadmap" className={styles["dsad-roadmap"]}>
      <h2>نقشه راه</h2>
      <CustomAccordionComponent>
        <CustomAccordionItemComponent header="جلسه 0 - سلام، رفیق!">
          <SessionComponent>
            <li>مقدمه</li>
            <li>معرفی دوره</li>
            <li>پیش‌نیازها</li>
            <li>نحوه‌ی ثبت پاسخ تمرین‌ها</li>
            <li>مرور TypeScript</li>
          </SessionComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="جلسه 1 - پیچیدگی الگوریتم‌ها و دست‌گرمی">
          <SessionComponent>
            <li>مرتبه‌ی پیچیدگی (Order)</li>
            <li>Big O Notation</li>
            <li>پیچیدگی فضایی</li>
            <li>پیچیدگی زمانی</li>
            <li>محاسبه با استفاده از Trace</li>
            <li>محاسبه با استفاده از سیگما</li>
            <li>تکنیک Two Pointers</li>
            <li>تکنیک Sliding Window</li>
          </SessionComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="جلسه 2 - الگوریتم‌های بازگشتی">
          <SessionComponent>
            <li>تعریف تابع بازگشتی</li>
            <li>Call Stack</li>
            <li>فاکتوریل</li>
            <li>فیبوناچی</li>
            <li>معکوس کردن آرایه</li>
            <li>تغییر مبنا از 10 به 2</li>
            <li>پیدا کردن ماکسیمم در آرایه</li>
            <li>چاپ تمام حالات خرد کردن اسکناس</li>
            <li>الگوریتم‌های تقسیم و غلبه (Divide-and-conquer)</li>
            <li>برج هانوی</li>
            <li>8 وزیر</li>
          </SessionComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="جلسه 3 - آرایه‌ها">
          <SessionComponent>
            <li>جستجوی خطی (Linear Search)</li>
            <li>جستجوی دودویی (Binary Search)</li>
            <li>آرایه‌ی دوبعدی و ماتریس</li>
            <li>مرتب‌سازی حبابی (Bubble Sort)</li>
            <li>مرتب‌سازی انتخابی (Selection Sort)</li>
            <li>مرتب‌سازی درجی (Insertion Sort)</li>
            <li>مرتب‌سازی ادغام (Merge Sort)</li>
            <li>مرتب‌سازی سریع (Quick Sort)</li>
          </SessionComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="جلسه 4 - ساختمان‌های داده (Data Structures)">
          <SessionComponent>
            <li>صف (Queue)</li>
            <li>صف اولویت</li>
            <li>پشته (Stack)</li>
            <li>Set</li>
            <li>Map</li>
          </SessionComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="جلسه 5 - لیست پیوندی (Linked List)">
          <SessionComponent>
            <li>یک‌پیوندی</li>
            <li>حذف عناصر</li>
            <li>اضافه کردن عناصر</li>
            <li>معکوس کردن</li>
            <li>دوپیوندی</li>
            <li>عوض کردن جای دو عنصر</li>
          </SessionComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="جلسه 6 - درخت (Tree)">
          <SessionComponent>
            <li>تعاریف</li>
            <li>درخت دودویی (Binary Tree)</li>
            <li>پیمایش درخت دودویی</li>
            <li>درخت جستجوی دودویی (Binary Search Tree)</li>
          </SessionComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="جلسه 7 - گراف (Graph)">
          <SessionComponent>
            <li>تعاریف</li>
            <li>گراف بدون جهت</li>
            <li>دور</li>
            <li>گراف همبند</li>
            <li>گراف جهت‌دار</li>
            <li>ماتریس مجاورت (Adjacency Matrix)</li>
            <li>لیست مجاورت (Adjacency List)</li>
            <li>پیمایش گراف</li>
            <li>پیمایش عمقی (DFS)</li>
            <li>پیمایش سطحی (BFS)</li>
          </SessionComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="جلسه 8 - برنامه‌نویسی پویا (Dynamic Programming)">
          <SessionComponent>
            <li>نیازمندی</li>
            <li>Memoization</li>
            <li>Tabulation</li>
            <li>فیبوناچی</li>
            <li>پیمایش جدول</li>
            <li>بررسی توانایی رسیدن هدف</li>
            <li>تمام حالات رسیدن به هدف</li>
            <li>بهینه‌ترین حالت رسیدن به هدف</li>
          </SessionComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="جلسه 9 - الگوریتم‌های حریصانه (Greedy)">
          <SessionComponent>
            <li>شناسایی مسائل حریصانه</li>
            <li>مسئله‌ی لامپ‌های خاموش و روشن</li>
            <li>بیشترین حاصل ضرب</li>
            <li>دنباله‌های ازهم‌گسسته</li>
            <li>مسئله‌ی کوله‌پشتی (Knapsack Problem)</li>
          </SessionComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="جلسه 10 - مسائل معروف دنیای الگوریتم">
          <SessionComponent>
            <li>مسئله‌ی بزرگ‌ترین زیردنباله‌ی مشترک (LCS)</li>
            <li>مسئله‌ی فروشنده‌ی دوره‌گرد (Travelling Salesman)</li>
            <li>مسئله‌ی رنگ‌آمیزی گراف</li>
            <li>نکاتی برای موفقیت در مسابقات برنامه‌نویسی</li>
            <li>نکاتی برای موفقیت در مصاحبه</li>
          </SessionComponent>
        </CustomAccordionItemComponent>
      </CustomAccordionComponent>
    </section>
  );
}
