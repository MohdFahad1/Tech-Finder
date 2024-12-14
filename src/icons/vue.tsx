import React from 'react';

import { IconProps } from '@/types';

export const VueIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none">
      <rect width="256" height="256" fill="#242938" rx="60" />
      <path
        fill="#41B883"
        d="M182 50h36l-90 155.25L38 50h68.85L128 86l20.7-36z"
      />
      <path
        fill="#41B883"
        d="m38 50l90 155.25L218 50h-36l-54 93.15L73.55 50z"
      />
      <path
        fill="#fff"
        d="M73.55 50L128 143.6L182 50h-33.3L128 86l-21.15-36z"
      />
    </g>
  </svg>
);
