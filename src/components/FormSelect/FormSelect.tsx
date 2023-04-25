import { useEffect, useRef, useState } from 'react';

import { css } from 'styled-components/macro';

import { Box } from '../UI';

interface FormSelectProps {
  currentValue: string;
}

const FormSelect = ({ currentValue }: FormSelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectOptions, setSelectOptions] = useState([
    'ToDo',
    'InQA',
    'InProgress',
    'Done',
    'Blocked',
    'Deployed',
  ]);
  const [selectedOption, setSelectedOption] = useState(
    selectOptions.find((option) => option === currentValue) || 'ToDo'
  );

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    switch (selectedOption) {
      case 'ToDo':
        setSelectOptions(['ToDo', 'InProgress']);
        break;
      case 'InQA':
        setSelectOptions(['ToDo', 'InQA', 'Done']);
        break;
      case 'InProgress':
        setSelectOptions(['InQA', 'InProgress', 'Blocked']);
        break;
      case 'Done':
        setSelectOptions(['Done', 'Deployed']);
        break;
      case 'Blocked':
        setSelectOptions(['ToDo', 'Blocked']);
        break;
      case 'Deployed':
        setSelectOptions(['Deployed']);
        break;
      default:
        break;
    }
  }, [selectedOption]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [selectRef]);

  return (
    <Box
      ref={selectRef}
      css={css`
        position: relative;
      `}
      className="form-select"
    >
      <Box
        css={css`
          position: relative;
          width: 100%;
          height: 50px;
          padding: 12px 15px 4px;
          background: ${({ theme }) => theme.colors.secondary[400]};
          border: 0;
          border-bottom: 1px solid ${({ theme }) => theme.colors.secondary[200]};
          border-radius: 4px 4px 0 0;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.2s ease-in-out;
          display: block;
          margin-bottom: 20px;
          cursor: pointer;
          text-align: left;
          color: ${({ theme }) => theme.colors.dark[400]};
        `}
        as="button"
        className="form-select__opener"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Box as="span" className="form-select__label">
          {selectedOption}
        </Box>
        <Box
          css={css`
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
          `}
          as="span"
          className="form-select__opener-arrow"
        >
          {isOpen ? '▲' : '▼'}
        </Box>
      </Box>
      {isOpen && (
        <Box
          css={css`
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            z-index: 10;
            background: ${({ theme }) => theme.colors.light[100]};
            box-shadow: 1px 1px 2px 2px rgb(0 0 0 / 20%);
            border-radius: 5px;
            overflow: hidden;
            margin: 0;
            padding: 0;
          `}
          as="ul"
          className="form-select__drop"
        >
          {selectOptions.map((option: string) => (
            <Box
              css={css`
                padding: 10px 15px;

                &:hover {
                  background: ${({ theme }) => theme.colors.secondary[400]};
                }
              `}
              as="li"
              key={option}
              className={`form-select__option-item ${
                option === selectedOption ? 'selected' : ''
              }`}
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export { FormSelect };
