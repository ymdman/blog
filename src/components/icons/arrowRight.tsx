import React from 'react';

type Props = {
  width?: number;
  height?: number;
};

const IconArrowRight: React.FC<Props> = ({ width = 16, height = 16 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={width}
      height={height}
    >
      <path
        fillRule="evenodd"
        d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
      ></path>
    </svg>
  );
};

export default IconArrowRight;