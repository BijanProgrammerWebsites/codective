import React, { SVGProps } from "react";

export function TablerCornerDownLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 6v6a3 3 0 0 1-3 3H5l4-4m0 8l-4-4"
      ></path>
    </svg>
  );
}

export default TablerCornerDownLeft;
