import styled from 'styled-components/macro';

import { AppTheme } from 'src/styles/Theme';

import { StyleProps } from './styled';

export const Row = styled.div<StyleProps>`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;

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
            flex-direction: ${value?.direction || 'row'};
            align-items: ${value?.alignItems || 'stretch'};
            justify-content: ${value?.justifyContent || 'flex-start'};
            flex-wrap: ${value?.flexWrap || 'wrap'};
          }
        `;
      }
    }
    return styles;
  }}
`;
