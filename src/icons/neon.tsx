import React from 'react';

import { IconProps } from '@/types';

export const NeonIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="logosNeonIcon0"
        x1="100%"
        x2="12.069%"
        y1="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#62F755" />
        <stop offset="100%" stopColor="#8FF986" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="logosNeonIcon1"
        x1="100%"
        x2="40.603%"
        y1="100%"
        y2="76.897%"
      >
        <stop offset="0%" stopOpacity=".9" />
        <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      fill="#00E0D9"
      d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861zm44.139-8.825a8.817 8.817 0 0 0-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825z"
    />
    <path
      fill="url(#logosNeonIcon0)"
      d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861zm44.139-8.825a8.817 8.817 0 0 0-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825z"
    />
    <path
      fill="url(#logosNeonIcon1)"
      fillOpacity=".4"
      d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861zm44.139-8.825a8.817 8.817 0 0 0-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825z"
    />
    <path
      fill="#63F655"
      d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825"
    />
  </svg>
);
