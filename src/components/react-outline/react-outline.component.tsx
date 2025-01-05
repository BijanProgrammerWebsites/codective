import { ReactElement } from "react";

import OutlineComponent from "@/components/outline/outline.component";

const willLearnItems = [
  "Git & GitHub",
  "TypeScript",
  "JSX",
  "Components",
  "Props",
  "Hooks",
  "Custom Hooks",
  "Event Handling",
  "Routing",
  "Forms",
  "Context",
  "Working with APIs",
  "Error Handling",
  "Suspense",
  "Authentication",
  "Internationalization",
  "CSS Modules",
  "Design Patterns",
  "Best Practices (DRY, KISS, YAGNI)",
  "Clean Code (Prettier, ESLint)",
  "LocalStorage, Sessions, Cookies",
  "Popular libraries",
  "React Router",
  "TanStack Query (React Query)",
  "React Hook Form",
  "Zod",
  "Zustand",
  "i18next",
  "React-Toastify",
  "Motion (Framer Motion)",
  "CI/CD, Docker, Deploy",
];

const willNotLearnItems = ["React 19", "Server Components", "Server Functions"];

export default function ReactOutlineComponent(): ReactElement {
  return (
    <OutlineComponent>
      <OutlineComponent.WillLearn>
        {willLearnItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </OutlineComponent.WillLearn>
      <OutlineComponent.WillNotLearn>
        {willNotLearnItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </OutlineComponent.WillNotLearn>
    </OutlineComponent>
  );
}
