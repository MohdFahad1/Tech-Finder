import React from 'react';

import { IconProps } from '@/types';

export const AngularIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none">
      <rect width="256" height="256" fill="#242938" rx="60" />
      <path
        fill="#E23237"
        d="M34.25 61.125L127.325 28l95.525 32.612L207.412 183.7L127.325 228l-78.787-43.725z"
      />
      <path fill="#B52E31" d="M222.85 60.613L127.325 28v200l80.087-44.3z" />
      <path
        fill="#fff"
        d="m127.469 51.375l-58 129l21.644-.438l11.687-29.149h51.875l12.7 29.375l20.637.437zm.143 41.412l19.625 40.982H110.5l17.169-40.982z"
      />
    </g>
  </svg>
);
