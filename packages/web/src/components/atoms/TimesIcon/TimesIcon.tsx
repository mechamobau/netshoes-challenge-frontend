import React from 'react';

type Props = {
  fill?: string;
  width?: string;
  height?: string;
};

const TimesIcon = ({
  fill = '#ffffff',
  width = '1rem',
  height = '1rem'
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    width={width}
    height={height}
  >
    <path
      fill-rule="evenodd"
      fill={fill}
      d="M14.008,11.906 L11.906,14.009 L7.000,9.103 L2.094,14.009 L-0.009,11.906 L4.897,7.000 L-0.009,2.094 L2.094,-0.008 L7.000,4.897 L11.906,-0.008 L14.008,2.094 L9.103,7.000 L14.008,11.906 Z"
    />
  </svg>
);

export default TimesIcon;
