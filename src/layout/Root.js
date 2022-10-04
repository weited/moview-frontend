import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar/NavigationBar';

export default function Root() {
  return (
    <>
      <NavigationBar />
      <div>
        <Outlet />
      </div>
    </>
  );
}
