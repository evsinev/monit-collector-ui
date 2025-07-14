import routing from '@/app/router/config';
import AppSuspense from '@/components/app-suspense';
import { Route, Routes } from 'react-router';
import NotFound from '@/pages/error/not-found';
import HostListPage from '@/pages/host-list';

export default function Router() {
  return (
    <Routes>
      <Route
        path={routing.home}
        element={
          <AppSuspense>
            <HostListPage />
          </AppSuspense>
        }
      />
      <Route
        path="*"
        Component={NotFound}
      />
    </Routes>
  );
}
