import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import type { RootState } from '../app/store';

import styles from '../styles/NavBar.module.css';
import { clearUser } from '../features/authSlice';

interface User {
  email: string;
}

const NavBar = () => {
  const navigate = useNavigate();
  // const user = true;
  const user = useSelector(
    (state: RootState) => state.auth.user,
  ) as User | null;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
    navigate('/toolkit-thunk/login');
  };

  return (
    <div className={styles.navbarWrapper}>
      <h1 onClick={() => navigate('/')}>OAK NEWS</h1>
      <p>{user?.email}</p>
      <div className={styles.buttonWrapper}>
        {user?.email && <button onClick={handleLogout}>Logout</button>}
        {!user && (
          <button onClick={() => navigate('/toolkit-thunk/login')}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
