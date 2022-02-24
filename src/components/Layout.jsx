import { Outlet } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';

export const Layout = () => {
  return (
    <MobileLayout>
      <Outlet />
    </MobileLayout>
  );
};
