import { FormEvent, useState } from 'react';

import { css } from 'styled-components/macro';

import { FieldText, IconEdit, IconPlus } from '../components';
import { Box, Button } from '../components/UI';

type TProps = {
  action: string;
};

export const ManageTaskForm = ({ action }: TProps) => {
  const taskStatus = 'Blocked'; // test value for development only

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState({
    title: action === '' ? '' : 'Task title',
    description: action === '' ? '' : 'Task description',
    status: action === '' ? 'ToDo' : taskStatus,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleFormReset = () => {
    setValues({
      title: '',
      description: '',
      status: 'ToDo',
    });
  };

  return (
    <Box as="form" onSubmit={handleFormSubmit} onReset={handleFormReset}>
      <FieldText
        onChange={handleInputChange}
        value={values.title}
        name="title"
        title="title"
        hasError={isSubmitted && !values.title}
      />
      <FieldText
        as="textarea"
        onChange={handleInputChange}
        value={values.description}
        name="description"
        title="description"
        hasError={isSubmitted && !values.description}
      />
      {action.toLocaleUpperCase() === 'EDIT' && (
        <>
          <FieldText
            as="select"
            onChange={handleInputChange}
            value={values.status}
            name="status"
            title="status"
          />
          <Box
            css={css`
              display: flex;
              gap: 16px;
              list-style: none;
              margin: 0;
              padding: 0;
            `}
            as="ul"
          >
            <Box
              css={css`
                flex-grow: 1;
                display: flex;
              `}
              as="li"
            >
              <Button
                css={css`
                  display: flex;
                  width: 100%;
                `}
                type="submit"
                primary
              >
                <IconEdit /> Edit
              </Button>
            </Box>
            <Box
              css={css`
                flex-grow: 1;
                display: flex;
              `}
              as="li"
            >
              <Button
                css={css`
                  display: flex;
                  width: 100%;
                `}
                type="reset"
                secondary
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </>
      )}
      {action === '' && (
        <Button
          css={css`
            display: flex;
            width: 100%;
          `}
          type="submit"
          primary
        >
          <IconPlus /> Add
        </Button>
      )}
    </Box>
  );
};
