import React from 'react';

import { css } from 'styled-components/macro';

import { Box } from '../UI';

type Tprops = {
  width?: string;
  height?: string;
  color?: string;
};

export const IconPlus = ({ width, height, color }: Tprops) => {
  return (
    <Box
      css={css`
        width: ${width || '20px'};
        height: ${height || '20px'};
      `}
    >
      <svg
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        fill={color || 'currentColor'}
      >
        <polygon points="448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288 " />
      </svg>
    </Box>
  );
};

export const IconEdit = ({ width, height, color }: Tprops) => {
  return (
    <Box
      css={css`
        width: ${width || '20px'};
        height: ${height || '20px'};
      `}
    >
      <svg
        version="1.1"
        viewBox="0 0 576 512"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        fill={color || 'currentColor'}
      >
        <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
      </svg>
    </Box>
  );
};

export const IconCaret = ({ width, height, color }: Tprops) => {
  return (
    <Box
      css={css`
        width: ${width || '20px'};
        height: ${height || '20px'};
      `}
    >
      <svg
        version="1.1"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        fill={color || 'currentColor'}
      >
        <path d="M4 8 H28 L16 26 z" />
      </svg>
    </Box>
  );
};
