import styled from 'styled-components/macro';

import { AppTheme } from 'src/styles/Theme';

export const Loading = styled.div`
  width: 50px;
  height: 50px;
  margin: 100px auto;
  border: 3px solid ${AppTheme.colors.primary[300]};
  border-top: 0;
  border-radius: 100%;
  animation: spin 0.7s infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
