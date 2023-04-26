import { FormEvent, useContext, useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { css } from 'styled-components/macro';

import { TaskContext } from 'src/context/task';
import {
  createTask,
  editTask,
  readTaskById,
  resetCreatePost,
  resetEditPost,
} from 'src/context/task/action';
import { Task, TaskHistory } from 'src/context/task/types';
import { toDateTime } from 'src/utilities/getDateTime';

import { FieldText, IconEdit, IconPlus } from '../components';
import { Box, Button, Col, Row } from '../components/UI';

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
  const navigate = useNavigate();

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
        status: 'ToDo',
      };
      if (action === 'edit' && params?.id) {
        editTask(dispatch, {
          ...singleData,
          ...newData,
          status,
        });
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
    if (params?.id) {
      readTaskById(dispatch, params.id);
    } else {
      navigate('/');
    }
  }, [dispatch, navigate, params?.id]);

  useEffect(() => {
    if (createdData) {
      setTaskList([...taskList, createdData]);

      handleFormReset();
      resetCreatePost(dispatch);
    }
  }, [createdData, dispatch, setTaskList, taskList]);

  useEffect(() => {
    if (editedData) {
      resetEditPost(dispatch);
      navigate('/');
    }
  }, [dispatch, editedData, navigate]);

  useEffect(() => {
    if (singleData) {
      const task = {
        title: singleData.title,
        description: singleData.description,
      };

      setStatus(singleData.status);
      setValues(task);
    } else {
      setValues({
        title: '',
        description: '',
      });
      setStatus('ToDo');
    }
  }, [singleData, params?.id]);

  useEffect(() => {
    if (!params?.id) {
      navigate('/');
      handleFormReset();
    }
  }, [params?.id, action, navigate]);

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
        {action.toLocaleUpperCase() === 'EDIT' && singleData && (
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
            {singleData?.history?.length > 1 && (
              <Box
                css={css`
                  padding: 30px 0;
                `}
              >
                <h3>Task History</h3>

                <Box
                  css={css`
                    margin: 0;
                  `}
                >
                  {singleData?.history.slice(-2).map((item: TaskHistory) => (
                    <Box
                      css={css`
                        position: relative;
                        padding: 20px 20px 10px;
                        background: ${({ theme }) =>
                          theme.colors.secondary[100]};
                      `}
                      key={Math.random().toString(36).substr(2, 9)}
                    >
                      <Box
                        css={css`
                          margin-bottom: 5px;
                        `}
                      >
                        <Box
                          css={css`
                            font-size: 16px;
                          `}
                        >
                          <strong>Edited</strong> on{' '}
                          <Box
                            as="span"
                            css={css`
                              font-style: italic;
                              font-weight: 700;
                            `}
                          >
                            {item?.task?.createdAt &&
                              toDateTime(item.task.createdAt)}
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        css={css`
                          font-size: 14px;
                          line-height: 1.5;
                        `}
                      >
                        <Row
                          css={css`
                            padding: 5px 0;
                            border-top: 1px solid
                              ${({ theme }) => theme.colors.dark[100]};
                          `}
                        >
                          <Col xs="2">
                            <Box
                              css={css`
                                padding: 0 10px 0 0;
                                border-right: 1px solid
                                  ${({ theme }) => theme.colors.dark[100]};
                              `}
                            >
                              Title
                            </Box>
                          </Col>
                          <Col xs="10">{item.task.title}</Col>
                        </Row>
                        <Row
                          css={css`
                            padding: 5px 0;
                            border-top: 1px solid
                              ${({ theme }) => theme.colors.dark[100]};
                          `}
                        >
                          <Col xs="2">
                            <Box
                              css={css`
                                padding: 0 10px 0 0;
                                border-right: 1px solid
                                  ${({ theme }) => theme.colors.dark[100]};
                              `}
                            >
                              Description
                            </Box>
                          </Col>
                          <Col xs="10">{item.task.description}</Col>
                        </Row>
                        <Row
                          css={css`
                            padding: 5px 0;
                            border-top: 1px solid
                              ${({ theme }) => theme.colors.dark[100]};
                            border-bottom: 1px solid
                              ${({ theme }) => theme.colors.dark[100]};
                          `}
                        >
                          <Col xs="2">
                            <Box
                              css={css`
                                padding: 0 10px 0 0;
                                border-right: 1px solid
                                  ${({ theme }) => theme.colors.dark[100]};
                              `}
                            >
                              Status
                            </Box>
                          </Col>
                          <Col xs="10">{item.task.status}</Col>
                        </Row>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
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
