import { Outlet } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';
import { DesktopLayout } from './DesktopLayout';

export const Layout = () => {
  return (
    <DesktopLayout>
      <MobileLayout>
        <Outlet />
      </MobileLayout>
    </DesktopLayout>
  );
};
