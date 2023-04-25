import { useEffect, useRef, useState } from 'react';

import { css } from 'styled-components/macro';

import { FormSelect } from '../FormSelect';
import { Box, FormInput } from '../UI';

type TProps = {
  type?: string;
  title: string;
  value?: string;
  name?: string;
  as?: string;
  setStatus?: (status: any) => void;
  hasError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FieldText = ({
  type = 'text',
  title = 'title',
  name,
  value,
  as,
  hasError,
  setStatus,
  onChange,
}: TProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  setTimeout(() => {
    if (inputRef?.current?.value) {
      setIsFocused(true);
    }
  }, 500);

  useEffect(() => {
    const input = inputRef.current;

    if (input) {
      if (input.value) setIsFocused(true);

      const handleFocus = () => setIsFocused(true);
      const handleBlur = () =>
        input.value ? setIsFocused(true) : setIsFocused(false);

      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);

      return () => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
      };
    }
    return () => {};
  }, [inputRef]);

  return (
    <Box
      css={css`
        position: relative;
      `}
    >
      {/* eslint-disable-next-line no-nested-ternary */}
      {as === 'textarea' ? (
        <FormInput
          as="textarea"
          title={title}
          name={name}
          value={value}
          ref={inputRef}
          type={type}
          onChange={onChange}
        />
      ) : as === 'select' ? (
        <FormSelect setStatus={setStatus} currentValue={value} />
      ) : (
        <FormInput
          title={title}
          name={name}
          value={value}
          ref={inputRef}
          type={type}
          onChange={onChange}
        />
      )}

      {as !== 'select' && (
        <>
          <Box
            css={css`
              position: absolute;
              top: ${isFocused ? '6px' : '20px'};
              left: 15px;
              z-index: 1;
              pointer-events: none;
              color: ${({ theme }) => theme.colors.secondary[300]};
              text-transform: capitalize;
              font-size: ${isFocused ? '0.75rem' : '1rem'};
              line-height: 1;
              transition: all 0.2s ease-in-out;
            `}
          >
            {title}
          </Box>
          {hasError && (
            <Box
              css={css`
                position: relative;
                top: -15px;
                color: ${({ theme }) => theme.colors.danger[100]};
              `}
            >
              <Box
                css={css`
                  text-transform: capitalize;
                `}
                as="span"
              >
                {title}
              </Box>{' '}
              is required!
            </Box>
          )}
        </>
      )}
    </Box>
  );
};
