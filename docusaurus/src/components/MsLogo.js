import React from 'react';

export default function MsLogo({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 57 200 100"
      preserveAspectRatio="xMidYMin slice"
    >
      <g data-name="MS-symbol">
        <g clip-path="url(#a)">
          <path
            d="M106.214 106.214H71.996V71.996h34.218z"
            fill="#f25022"
          ></path>
          <path
            d="M143.993 106.214h-34.218V71.996h34.218z"
            fill="#7fba00"
          ></path>
          <path
            d="M106.214 143.993H71.996v-34.218h34.218z"
            fill="#00a4ef"
          ></path>
          <path
            d="M143.993 143.993h-34.218v-34.218h34.218z"
            fill="#ffb900"
          ></path>
        </g>
      </g>
    </svg>
  );
}
