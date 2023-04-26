import React from 'react';

import { css } from 'styled-components/macro';

import { Task } from 'src/context/task/types';

import { Box, Col, Container, Row } from '../UI';

import { TaskItem } from './TaskItem';

type TProps = {
  taskList: Task[];
};

export const ListTask = ({ taskList }: TProps) => {
  const sorted = [...taskList].sort((a: Task, b: Task) => {
    if (a.lastUpdated && b.lastUpdated) {
      return (
        new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
      );
    }
    return 0;
  });

  return (
    <>
      <Box
        css={css`
          background: ${({ theme }) => theme.colors.primary[400]};
          overflow: hidden;
          border-radius: 25px 25px 0 0;
        `}
      >
        <Container>
          <Box
            css={css`
              text-transform: capitalize;
              margin: 0;
              color: ${({ theme }) => theme.colors.light[100]};
              padding: 20px 0;
            `}
            as="h2"
          >
            Tasks
          </Box>
        </Container>
        <Box
          css={css`
            background: ${({ theme }) => theme.colors.primary[100]};
            padding: 30px 0;
            overflow: hidden;
            border-radius: 25px 25px 0 0;
          `}
        >
          <Container>
            <Row>
              {sorted?.length > 0 &&
                sorted.map((task: Task) => (
                  <Col
                    style={{ display: 'flex' }}
                    sm={6}
                    md={4}
                    lg={3}
                    key={Math.random().toString(36).substr(2, 9)}
                  >
                    <TaskItem task={task} />
                  </Col>
                ))}
            </Row>
            {sorted?.length === 0 && (
              <Box
                css={css`
                  min-height: 300px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  text-align: center;
                  font-size: 1.6rem;
                  line-height: 1.3;
                `}
              >
                You have nothing to do. <br />
                Go get some sleep.
              </Box>
            )}
          </Container>
        </Box>
      </Box>
    </>
  );
};
