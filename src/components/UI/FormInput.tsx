import styled from 'styled-components/macro';

import { StyleProps } from './styled';

export const FormInput = styled.input<StyleProps>`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  display: block;
`;
