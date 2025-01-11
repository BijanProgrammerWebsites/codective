import { useRef } from "react";

import gsap from "gsap";
import { ReactRef, useGSAP } from "@gsap/react";

export default function useListAnimation(): [scope: ReactRef] {
  const scope = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLLIElement>("li");

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
    { scope },
  );

  return [scope];
}
