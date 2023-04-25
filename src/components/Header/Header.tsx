import { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { css, useTheme } from 'styled-components/macro';

import { Box, Container } from '../UI';

export const Header = () => {
  const { pathname, hash } = useLocation();
  const [pageHeading, setPageHeading] = useState('home');
  const theme = useTheme();

  const isHome = pathname === '/';
  const action = hash?.slice(1);

  useEffect(() => {
    const pages = ['/', '/contact'];

    if (hash && action !== '/') {
      setPageHeading(action);
    } else if (pages.includes(pathname) && !isHome && !hash?.includes('/')) {
      setPageHeading(pathname.slice(1));
    } else if (isHome) {
      setPageHeading('home');
    } else {
      setPageHeading('not found');
    }
  }, [action, hash, isHome, pathname]);

  return (
    <Box
      as="header"
      css={css`
        padding: 15px 0;
        background-color: ${theme.colors.primary[400]};
      `}
    >
      <Container>
        <Box
          as="h1"
          css={css`
            text-transform: capitalize;
            margin: 0;
            color: ${theme.colors.light[100]};
            font-size: 1.5rem;
            line-height: 1.3;
            font-weight: 400;
          `}
        >
          <Box
            css={css`
              color: ${theme.colors.light[100]};
            `}
            as={Link}
            to="/"
          >
            Task management
          </Box>{' '}
          &gt; <Box as="span">{pageHeading}</Box>
        </Box>
      </Container>
    </Box>
  );
};
