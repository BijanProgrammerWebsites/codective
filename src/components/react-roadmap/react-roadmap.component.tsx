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
              <li>Review Prerequisites</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
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
              <li>Virtual DOM</li>
              <li>The Diffing Algorithm</li>
              <li>Closure</li>
              <li>Hook: useState</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Components</li>
              <li>Props</li>
              <li>Key Attribute</li>
              <li>CSS Module</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 3">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Working with Figma</li>
              <li>Implementing the Design</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Hook: useRef</li>
              <li>
                Task 3: Implement the design by creating several components.
              </li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Event Handling</li>
              <li>Context</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 4">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Hook: useEffect</li>
              <li>Hook: useMemo</li>
              <li>Storage: LocalStorage</li>
              <li>Task 4: Implement the logic.</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Refactor</li>
              <li>Library: React-Toastify</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Deploy Using Vercel</li>
              <li>Library: i18next</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 5">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Project: City Sightseeing</li>
              <li>Routing</li>
              <li>Library: React Router</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Working with APIs</li>
              <li>Improve The Design</li>
              <li>Dynamic Routes</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Implement Product Detail Page (PDP)</li>
              <li>Library: TanStack Query (React Query)</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 6">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>React Query: Defaults</li>
              <li>React Query: Fresh vs Stale</li>
              <li>React Query: Caching</li>
              <li>React Query: Background Re-fetch</li>
              <li>React Query: Loading UI</li>
              <li>React Query: Error Handling</li>
              <li>React Query: Duplicate Queries</li>
              <li>React Query: isFetching vs isPending vs isLoading</li>
              <li>React Query: initialData vs placeholderData</li>
              <li>React Query: staleTime vs gcTime</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Error Handling</li>
              <li>Hook: useTransition</li>
              <li>Project: Movie Box</li>
              <li>Working with TMDB API</li>
              <li>Implement Search/Filter Page</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Rules of Hooks</li>
              <li>Custom Hooks</li>
              <li>Authentication: Concepts</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 7">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Storage: Sessions</li>
              <li>Storage: Cookies</li>
              <li>Security Concerns</li>
              <li>Implement Product Detail Page (PDP)</li>
              <li>Postman</li>
              <li>Implement Sign Up Page UI</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Authentication: Implement</li>
              <li>Forms</li>
              <li>Connect Sign Up Page to API</li>
              <li>Server-side Form Validation</li>
              <li>Library: Floating UI (Popper)</li>
              <li>Route Guard (Protected Routes)</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Library: React Hook Form</li>
              <li>Form Validation</li>
              <li>Library: Zod</li>
            </WeekComponent.SessionComponent>
          </WeekComponent>
        </CustomAccordionItemComponent>
        <CustomAccordionItemComponent header="هفته 8">
          <WeekComponent>
            <WeekComponent.SessionComponent>
              <li>Library: Zustand</li>
            </WeekComponent.SessionComponent>
            <WeekComponent.SessionComponent>
              <li>Wrap Up</li>
              <li>Library: Motion (Framer Motion)</li>
              <li>Hook: useCallback</li>
              <li>Suspense</li>
              <li>Hook: useDeferredValue</li>
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
