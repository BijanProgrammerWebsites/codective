"use client";

import { PropsWithChildren, ReactElement } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

ScrollTrigger.addEventListener("refresh", function () {
  if (document.body.getAttribute("style") === "") {
    document.body.removeAttribute("style");
  }
});

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = PropsWithChildren;

export default function GsapProvider({ children }: Props): ReactElement {
  return <>{children}</>;
}
