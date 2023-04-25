import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { css, useTheme } from 'styled-components/macro';

import { ManageTaskForm } from 'src/features';

import { Box } from '../UI';

export const ManageTask = () => {
  const { hash } = useLocation();
  const action = hash?.slice(1);
  const [blockHeading, setBlockHeading] = useState('');

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
  return (
    <Box
      css={css`
        padding: 30px 0;
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
      <ManageTaskForm action={action} />
    </Box>
  );
};
