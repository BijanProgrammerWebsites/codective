import { ReactElement } from "react";

export default function AmbientFilter(): ReactElement {
  const size = 200;
  const position = (100 - size) / 2;

  return (
    <svg style={{ display: "none" }}>
      <filter
        id="ambient-filter"
        x={`${position}%`}
        y={`${position}%`}
        width={`${size}%`}
        height={`${size}%`}
      >
        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blurred" />
        <feColorMatrix
          type="saturate"
          in="blurred"
          values="4"
          result="saturated"
        />
        <feColorMatrix
          type="matrix"
          in="saturated"
          values="0 0 0 0 1
                  0 0 0 0 0
                  0 0 0 0 0
                  0 0 0 0.2"
        />
        <feComposite in="SourceGraphic" operator="over" />
      </filter>
    </svg>
  );
}
