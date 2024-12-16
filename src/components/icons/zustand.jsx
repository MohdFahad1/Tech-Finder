import React from "react";

export const ZustandIcon = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none">
      <rect width="256" height="256" fill="#f0f0f0" rx="20" />
      <path
        fill="#007ACC"
        d="M128 32c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-42.98-96-96-96z"
      />
      <path
        fill="#fff"
        d="M128 64c35.29 0 64 28.71 64 64s-28.71 64-64 64-64-28.71-64-64 28.71-64 64-64z"
      />
      <path
        fill="#007ACC"
        d="M128 80c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"
      />
    </g>
  </svg>
);
