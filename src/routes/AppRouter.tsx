import { Suspense, lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

const GeneralLayout = lazy(() => import('../layouts/GeneralLayout'));

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<GeneralLayout />}>
          <Route index element={<Home />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
