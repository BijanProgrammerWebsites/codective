import { ReactElement } from "react";

import OutlineComponent from "@/components/outline/outline.component";

export default function DsadOutlineComponent(): ReactElement {
  return (
    <OutlineComponent>
      <OutlineComponent.WillLearn>
        <li>Git & GitHub</li>
        <li>TypeScript</li>
        <li>JSX</li>
        <li>Components</li>
        <li>Props</li>
        <li>Hooks</li>
        <li>Custom Hooks</li>
        <li>Event Handling</li>
        <li>Routing</li>
        <li>Forms</li>
        <li>Context</li>
        <li>Working with APIs</li>
        <li>Error Handling</li>
        <li>Suspense</li>
        <li>Authentication</li>
        <li>Internationalization</li>
        <li>CSS Modules</li>
        <li>Design Patterns</li>
        <li>Best Practices (DRY, KISS, YAGNI)</li>
        <li>Clean Code (Prettier, ESLint)</li>
        <li>LocalStorage, Sessions, Cookies</li>
        <li>Popular libraries</li>
        <li>React Router</li>
        <li>TanStack Query (React Query)</li>
        <li>React Hook Form</li>
        <li>Zod</li>
        <li>Zustand</li>
        <li>i18next</li>
        <li>React-Toastify</li>
        <li>Motion (Framer Motion)</li>
        <li>CI/CD, Docker, Deploy</li>
      </OutlineComponent.WillLearn>
      <OutlineComponent.WillNotLearn>
        <li>React 19</li>
        <li>Server Components</li>
        <li>Server Functions</li>
      </OutlineComponent.WillNotLearn>
    </OutlineComponent>
  );
}
