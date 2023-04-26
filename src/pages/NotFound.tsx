import React from 'react';

import { css } from 'styled-components/macro';

import { Box, Container } from 'src/components';

const NotFound = () => {
  return (
    <Box>
      <Container
        css={css`
          padding: 50px 20px;
        `}
      >
        <Box as="h2">Page not found!</Box>
      </Container>
    </Box>
  );
};

export default NotFound;
