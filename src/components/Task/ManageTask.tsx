import { useContext, useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { css, useTheme } from 'styled-components/macro';

import { TaskContext } from 'src/context/task';
import { readAllTask } from 'src/context/task/action';
import { Task } from 'src/context/task/types';
import { ManageTaskForm } from 'src/features';

import { ScrollToTop } from '../ScrollToTop';
import { Box, Container } from '../UI';

import { ListTask } from './ListTask';

export const ManageTask = () => {
  const { state, dispatch } = useContext(TaskContext);

  const { hash } = useLocation();
  const action = hash?.slice(1);
  const [blockHeading, setBlockHeading] = useState('');
  const [taskList, setTaskList] = useState<Task[]>([]);

  const theme = useTheme();

  useEffect(() => {
    if (action === '') {
      setBlockHeading('Add new task');
    } else if (action === 'edit') {
      setBlockHeading('Edit task');
    } else if (action === 'history') {
      setBlockHeading('history');
    } else {
      setBlockHeading('');
    }
  }, [action]);

  useEffect(() => {
    readAllTask(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (state?.data?.length > 0) {
      setTaskList(state.data);
    }
  }, [state.data]);
  return (
    <>
      {hash && <ScrollToTop />}
      <Box>
        <Container
          css={css`
            padding-top: 30px;
            padding-bottom: 30px;
          `}
        >
          <Box
            as="h2"
            css={css`
              text-transform: capitalize;
              margin: 0 0 25px;
              color: ${theme.colors.dark[400]};
              font-size: 1.5rem;
              line-height: 1.3;
            `}
          >
            {blockHeading}
          </Box>
          <ManageTaskForm
            taskList={taskList}
            setTaskList={setTaskList}
            action={action}
          />
        </Container>
        {action === '' && <ListTask taskList={taskList} />}
      </Box>
    </>
  );
};
