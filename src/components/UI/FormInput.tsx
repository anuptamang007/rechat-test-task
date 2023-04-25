import styled from 'styled-components/macro';

import { StyleProps } from './styled';

export const FormInput = styled.input<StyleProps>`
  width: 100%;
  height: 50px;
  padding: 18px 15px 4px;
  background: ${({ theme }) => theme.colors.secondary[400]};
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary[200]};
  border-radius: 4px 4px 0 0;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  display: block;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.dark[400]};

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.primary[400]};
  }

  ${({ as }) => as === 'textarea' && 'height: 150px; resize: none'}
  ${({ as }) => as === 'select' && 'text-transform: capitalize;'}
`;
