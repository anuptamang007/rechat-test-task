import { FormEvent, useContext, useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { css } from 'styled-components/macro';

import { TaskContext } from 'src/context/task';
import {
  createTask,
  editTask,
  readTaskById,
  resetCreatePost,
  resetEditPost,
} from 'src/context/task/action';
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
  const { loading, createdData, editedData, singleData } = state;
  const { state: params } = useLocation();
  const [status, setStatus] = useState('ToDo');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState({
    title: '',
    description: '',
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
        status,
      };
      if (action === 'edit') {
        editTask(dispatch, { ...newData, id: params?.id });
      } else {
        createTask(dispatch, newData);
      }
    }
  };

  const handleFormReset = () => {
    setIsSubmitted(false);
    setValues({
      title: '',
      description: '',
    });
  };

  useEffect(() => {
    readTaskById(dispatch, params?.id);
  }, [dispatch, params?.id]);

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

  useEffect(() => {
    if (editedData) {
      const newTask = {
        title: editedData.title,
        description: editedData.description,
        status: editedData.status,
      };

      const newTaskList = taskList.map((task: Task) => {
        if (task.id === params?.id) {
          return newTask;
        }
        return task;
      });

      setTaskList(newTaskList);
      resetEditPost(dispatch);
      setIsSubmitted(false);
    }
  }, [editedData, dispatch, params?.id, setTaskList, taskList]);

  useEffect(() => {
    if (singleData) {
      const task = {
        title: singleData.title,
        description: singleData.description,
        status: singleData.status,
      };

      setValues(task);
    } else {
      setValues({
        title: '',
        description: '',
      });
    }
  }, [singleData]);

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
              value={status}
              as="select"
              setStatus={setStatus}
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
