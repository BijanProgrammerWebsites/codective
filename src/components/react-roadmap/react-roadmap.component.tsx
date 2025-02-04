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
              <li>
                Task 1: Update README.md and add the .gitignore file to the
                project.
              </li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>TypeScript</li>
              <li>Prettier</li>
              <li>Task 2: Solve 3 algorithm problems using TypeScript.</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 2">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Project: Dream Journal</li>
              <li>Creating Your First React Project</li>
              <li>ESLint</li>
              <li>GitHub Workflows</li>
              <li>JSX</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Components</li>
              <li>Props</li>
              <li>Hook: useState</li>
              <li>Closure</li>
              <li>CSS Module</li>
              <li>
                Task 3: Implement the design by creating several components.
              </li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 3">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Event Handling</li>
              <li>Hook: useEffect</li>
              <li>Hook: useRef</li>
              <li>Hook: useMemo</li>
              <li>Hook: useCallback</li>
              <li>Storage: LocalStorage</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Context</li>
              <li>Library: React-Toastify</li>
              <li>Library: Motion (Framer Motion)</li>
              <li>Library: i18next</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 4">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Project: City Sightseeing</li>
              <li>Routing</li>
              <li>Library: React Router</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Working with APIs</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 5">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Error Handling</li>
              <li>Suspense</li>
              <li>Hook: useTransition</li>
              <li>Hook: useDeferredValue</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Custom Hooks</li>
              <li>Library: TanStack Query (React Query)</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 6">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Project: Movie Box</li>
              <li>Forms</li>
              <li>Library: React Hook Form</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Authentication</li>
              <li>Storage: Sessions</li>
              <li>Storage: Cookies</li>
              <li>Route Guard</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 7">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Form Validation</li>
              <li>Library: Zod</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Library: Zustand</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 8">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Wrap Up</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>DevOps: CI/CD</li>
              <li>DevOps: Docker</li>
              <li>DevOps: Deploy</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
      </CustomAccordionComponent>
    </section>
  );
}
