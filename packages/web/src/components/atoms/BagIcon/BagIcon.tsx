import React from 'react';

type Props = {
  fill?: string;
  width?: string;
  height?: string;
};

const BagIcon = ({
  fill = '#ffffff',
  width = '1rem',
  height = '1rem'
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    width={width}
    height={height}
  >
    <path
      fill-rule="evenodd"
      fill={fill}
      d="M32.941,17.431 L30.824,35.935 C30.563,38.216 28.585,40.004 26.397,40.004 L6.592,40.004 C4.405,40.004 2.427,38.216 2.166,35.935 L0.048,17.431 C-0.310,14.304 1.577,11.668 4.276,11.668 L8.362,11.668 C8.360,11.528 8.354,11.405 8.354,11.251 C8.354,5.958 9.780,-0.000 16.504,-0.000 C23.227,-0.000 24.653,5.958 24.653,11.251 C24.517,11.413 24.397,11.544 24.282,11.668 L28.713,11.668 C31.413,11.668 33.299,14.304 32.941,17.431 ZM21.801,11.251 C21.801,7.811 21.801,3.334 16.504,3.334 C11.206,3.334 11.206,7.811 11.206,11.251 C11.206,11.403 11.201,11.534 11.196,11.668 L21.854,11.668 C21.866,11.495 21.858,11.343 21.801,11.251 ZM26.905,14.169 L9.354,14.169 C9.172,14.310 8.979,14.351 8.810,14.169 L6.098,14.169 C3.800,14.169 2.194,16.339 2.499,18.914 L4.301,34.153 C4.524,36.031 6.208,37.504 8.071,37.504 L24.933,37.504 C26.796,37.504 28.480,36.031 28.702,34.153 L30.505,18.914 C30.810,16.339 29.204,14.169 26.905,14.169 ZM21.801,20.836 C20.676,20.836 19.763,19.903 19.763,18.752 C19.763,17.601 20.676,16.669 21.801,16.669 C22.926,16.669 23.839,17.601 23.839,18.752 C23.839,19.903 22.926,20.836 21.801,20.836 ZM11.206,20.836 C10.081,20.836 9.169,19.903 9.169,18.752 C9.169,17.601 10.081,16.669 11.206,16.669 C12.331,16.669 13.244,17.601 13.244,18.752 C13.244,19.903 12.331,20.836 11.206,20.836 Z"
    />
  </svg>
);

export default BagIcon;
