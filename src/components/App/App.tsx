import { Suspense, lazy } from 'react';

import { ScrollToTop } from '..';

const AppRouter = lazy(() => import('../../routes/AppRouter'));

const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollToTop />
        <AppRouter />
      </Suspense>
    </>
  );
};

export { App };
