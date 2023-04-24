import styled from 'styled-components/macro';

import { AppTheme } from 'src/styles/Theme';

import { StyleProps } from './styled';

type TProps = {
  primary?: boolean;
};

export const Button = styled.button<TProps | StyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  background: ${(props) =>
    props.primary
      ? AppTheme.colors.primary[400]
      : AppTheme.colors.secondary[400]};
  color: ${(props) =>
    props.primary ? AppTheme.colors.light[400] : AppTheme.colors.dark[400]};

  &:hover {
    background: ${(props) =>
      props.primary
        ? AppTheme.colors.primary[100]
        : AppTheme.colors.secondary[100]};
  }
`;
