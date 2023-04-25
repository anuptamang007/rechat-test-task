import { FormEvent, useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { css } from 'styled-components/macro';

import { TaskContext } from 'src/context/task';
import { createTask, resetCreatePost } from 'src/context/task/action';
import { Task } from 'src/context/task/types';

import { FieldText, IconEdit, IconPlus } from '../components';
import { Box, Button } from '../components/UI';

type TProps = {
  action: string;
  setTaskList: (taskList: Task[]) => void;
  taskList: Task[];
};

export const ManageTaskForm = ({ action, taskList, setTaskList }: TProps) => {
  const { state, dispatch } = useContext(TaskContext);
  const { loading, createdData, editedData, singleData, error, data } = state;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState({
    title: '',
    description: '',
    status: 'ToDo',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (values.title && values.description) {
      const newData = {
        title: values.title,
        description: values.description,
        status: values.status,
      };

      createTask(dispatch, newData);
    }
  };

  const handleFormReset = () => {
    setValues({
      title: '',
      description: '',
      status: 'ToDo',
    });
  };

  useEffect(() => {
    if (createdData) {
      const newTask = {
        title: createdData.title,
        description: createdData.description,
        status: createdData.status,
      };

      setTaskList([...taskList, newTask]);

      handleFormReset();
      resetCreatePost(dispatch);
    }
  }, [createdData, dispatch, setTaskList, taskList]);

  return (
    <>
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
                  disabled={loading}
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
    </>
  );
};
