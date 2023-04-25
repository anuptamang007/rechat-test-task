import React from 'react';

import { Link } from 'react-router-dom';
import { css } from 'styled-components/macro';

import { Task } from 'src/context/task/types';

import { IconEdit } from '../Icons';
import { Box, Button } from '../UI';

type TProps = {
  task: Task;
};

export const TaskItem = ({ task }: TProps) => {
  return (
    <Box
      css={css`
        background: ${({ theme }) => theme.colors.light[100]};
        padding: 20px;
        border-radius: 10px;
        box-shadow: 2px 2px 3px 3px rgb(0 0 0 / 20%);
      `}
    >
      <Box as="h3">{task.title}</Box>
      <Box as="p">{task.description}</Box>
      <Box
        css={css`
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        `}
        as="ul"
      >
        <Box as="li">
          <Button
            css={css`
              padding: 10px 20px;
              cursor: default;
              pointer-events: none;
              min-width: 120px;
            `}
            primary
          >
            {task.status}
          </Button>
        </Box>
        <Box as="li">
          <Box
            css={css`
              padding: 0;
              cursor: pointer;
              margin: 0;
              background: none;
              border: none;

              &:hover {
                opacity: 0.7;
              }
            `}
            to={`/#edit?id=${task.id}`}
            as={Link}
          >
            <IconEdit color="primary" width="30px" height="30px" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
