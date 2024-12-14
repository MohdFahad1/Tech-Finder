import React from 'react';

import { IconProps } from '@/types';

export const SupabaseIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none">
      <rect width="256" height="256" fill="#242938" rx="60" />
      <g clipPath="url(#skillIconsSupabaseDark2)">
        <path
          fill="url(#skillIconsSupabaseDark0)"
          d="M144.757 223.193c-5.061 6.373-15.323 2.881-15.445-5.257l-1.783-119.029h80.035c14.496 0 22.581 16.744 13.567 28.097z"
        />
        <path
          fill="url(#skillIconsSupabaseDark1)"
          fillOpacity=".2"
          d="M144.757 223.193c-5.061 6.373-15.323 2.881-15.445-5.257l-1.783-119.029h80.035c14.496 0 22.581 16.744 13.567 28.097z"
        />
        <path
          fill="#3ECF8E"
          d="M112.207 31.666c5.061-6.375 15.323-2.882 15.445 5.256l.782 119.029H49.4c-14.497 0-22.582-16.744-13.567-28.097z"
        />
      </g>
      <defs>
        <linearGradient
          id="skillIconsSupabaseDark0"
          x1="127.529"
          x2="198.661"
          y1="125.299"
          y2="155.132"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id="skillIconsSupabaseDark1"
          x1="95.993"
          x2="128.433"
          y1="82.12"
          y2="143.187"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <clipPath id="skillIconsSupabaseDark2">
          <path fill="#fff" d="M32 28h192.92v200H32z" />
        </clipPath>
      </defs>
    </g>
  </svg>
);
