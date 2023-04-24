import styled from 'styled-components/macro';

import { AppTheme } from 'src/styles/Theme';

import { StyleProps } from './styled';

export const Col = styled.div<StyleProps>`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;

  ${(props) => {
    let styles = '';

    for (const [key, value] of Object.entries(props)) {
      if (
        key === 'xs' ||
        key === 'sm' ||
        key === 'md' ||
        key === 'lg' ||
        key === 'xl'
      ) {
        styles += `
          ${AppTheme.mediaQuery[key]} {
            flex: 0 0 ${((value as number) / 12) * 100}%;
            max-width: ${((value as number) / 12) * 100}%;
          }
        `;
      }
    }
    return styles;
  }}
`;
