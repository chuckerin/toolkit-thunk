import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import type { RootState } from '../app/store'; // adjust path to your store file
// adjust path to your store file

const PrivateRouter = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <div>{user ? <Outlet /> : <Navigate to='/toolkit-thunk/login' />}</div>
  );
};

export default PrivateRouter;
