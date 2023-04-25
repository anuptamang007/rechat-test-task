import styled from 'styled-components/macro';

import { StyleProps } from './styled';

type TProps = {
  primary?: boolean;
};

export const Button = styled.button<TProps | StyleProps>`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  border: 1px solid
    ${(props) =>
      props.primary ? 'transparent' : props.theme.colors.secondary[300]};
  padding: 20px 10px;
  cursor: pointer;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  background: ${(props) =>
    props.primary ? props.theme.colors.primary[400] : 'none'};
  color: ${(props) =>
    props.primary
      ? props.theme.colors.light[100]
      : props.theme.colors.dark[400]};

  &:hover {
    background: ${(props) =>
      props.primary
        ? props.theme.colors.primary[300]
        : props.theme.colors.secondary[100]};
  }
`;
