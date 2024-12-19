import React, { SVGProps } from "react";

export function NextTransparentLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="uuid-10f22374-ffce-4bd1-8581-807aa25a2d8f"
      width="1em"
      height="1em"
      viewBox="0 0 14.75 14.75"
      {...props}
    >
      <defs>
        <clipPath id="uuid-b6db9c25-565b-426f-9e22-986f9c416a74">
          <circle
            id="uuid-7f632f98-6df8-490b-bf99-abf16e684ed8"
            cx="7.38"
            cy="7.38"
            r="7.37"
            fill="none"
            strokeWidth="0"
          />
        </clipPath>
        <linearGradient
          id="uuid-234c14a3-4365-4c0c-863e-ee2297020d34"
          x1="10.01"
          y1="6.75"
          x2="10.01"
          y2=".75"
          gradientTransform="translate(0 11.13) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset=".61" stopColor="#fff" stopOpacity=".57" />
          <stop offset=".8" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="uuid-993dfd32-c207-4921-9be5-6a7e0b1fa936"
          x1="7.14"
          y1=".88"
          x2="10.76"
          y2="-3.46"
          gradientTransform="translate(0 11.13) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g id="uuid-dffacb49-3012-4215-8a5c-6cbf3ce29c4f">
        <g id="uuid-ee10a760-9565-49a7-a951-3cbb4b83d3cb">
          <g clipPath="url(#uuid-b6db9c25-565b-426f-9e22-986f9c416a74)">
            <path
              d="M10.01,10.38v-6"
              fill="#000"
              stroke="url(#uuid-234c14a3-4365-4c0c-863e-ee2297020d34)"
              strokeLinejoin="round"
            />
            <path
              d="M5.37,4.38h0s-1.25,0-1.25,0v6h1.25v-4.03l6.37,7.74c.35-.23.68-.48.99-.76L5.37,4.38h0Z"
              fill="url(#uuid-993dfd32-c207-4921-9be5-6a7e0b1fa936)"
              fillRule="evenodd"
              strokeWidth="0"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default NextTransparentLogo;
