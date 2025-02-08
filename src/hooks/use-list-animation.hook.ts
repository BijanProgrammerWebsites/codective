import { useRef } from "react";

import gsap from "gsap";
import { ReactRef, useGSAP } from "@gsap/react";

type Options = {
  selector?: string;
};

export default function useListAnimation(options?: Options): [scope: ReactRef] {
  const { selector = "li" } = options ?? {};

  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLLIElement>(selector);

      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 50,
            scale: 0.5,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: "random(0, 0.5)",
            ease: "elastic.out(1, 0.7)",
            scrollTrigger: {
              trigger: item,
              start: "bottom bottom",
            },
          },
        );
      });
    },
    { scope, dependencies: [selector] },
  );

  return [scope];
}
