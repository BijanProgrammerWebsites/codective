"use client";

import { ReactElement } from "react";

import CustomAccordionComponent from "@/components/custom-accordion/custom-accordion.component";
import CustomAccordionItemComponent from "@/components/custom-accordion-item/custom-accordion-item.component";
import WeekComponent from "@/components/week/week.component";

import styles from "./react-roadmap.module.css";

export default function ReactRoadmapComponent(): ReactElement {
  return (
    <section id="roadmap" className={styles["react-roadmap"]}>
      <h2>نقشه راه</h2>
      <CustomAccordionComponent>
        <CustomAccordionItemComponent header="هفته 1">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Introduction</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>TypeScript</li>
              <li>Project: Dream Journal</li>
              <li>Creating Your First React Project</li>
              <li>Prettier</li>
              <li>ESLint</li>
              <li>JSX</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>N/A</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 2">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Components</li>
              <li>Props</li>
              <li>Hook: useState</li>
              <li>Hook: useEffect</li>
              <li>Hook: useRef</li>
              <li>Hook: useMemo</li>
              <li>Hook: useCallback</li>
              <li>Storage: LocalStorage</li>
              <li>Event Handling</li>
              <li>CSS Module</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>N/A</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 3">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Context</li>
              <li>Library: React-Toastify</li>
              <li>Library: Motion (Framer Motion)</li>
              <li>Library: i18next</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>N/A</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 4">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Project: City Sightseeing</li>
              <li>Routing</li>
              <li>Library: React Router</li>
              <li>Working with APIs</li>
              <li>Error Handling</li>
              <li>Suspense</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>N/A</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 5">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Hook: useTransition</li>
              <li>Hook: useDeferredValue</li>
              <li>Custom Hooks</li>
              <li>Library: TanStack Query (React Query)</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>N/A</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 6">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Project: Movie Box</li>
              <li>Forms</li>
              <li>Authentication</li>
              <li>Storage: Sessions</li>
              <li>Storage: Cookies</li>
              <li>Library: React Hook Form</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>N/A</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 7">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Route Guard</li>
              <li>Form Validation</li>
              <li>Library: Zod</li>
              <li>Library: Zustand</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>N/A</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 8">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>DevOps: CI/CD</li>
              <li>DevOps: Docker</li>
              <li>DevOps: Deploy</li>
              <li>Wrap Up</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>N/A</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
      </CustomAccordionComponent>
    </section>
  );
}
