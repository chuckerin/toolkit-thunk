import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from '../components/NavBar';
import PrivateRouter from './PrivateRouter';
import News from '../pages/News';
import Login from '../pages/Login';

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/toolkit-thunk/' element={<PrivateRouter />}>
            <Route path='/toolkit-thunk/' element={<News />} />
          </Route>
          <Route path='/toolkit-thunk/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
