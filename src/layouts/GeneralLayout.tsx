import { ReactElement, Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { css } from 'styled-components/macro';

import { Box, Header } from 'src/components';
import { Loading } from 'src/components/Loading';

type Iprops = {
  children?: ReactElement;
};

const GeneralLayout = ({ children }: Iprops) => {
  return (
    <>
      <Box
        css={css`
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        `}
      >
        <Header />
        <Box as="main">
          <Suspense fallback={<Loading />}>{children || <Outlet />}</Suspense>
        </Box>
      </Box>
    </>
  );
};

export default GeneralLayout;
