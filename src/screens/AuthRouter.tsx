import { Route, Routes } from 'react-router-dom';
import Login from '../features/auth/Login';

const AuthRoute = () => {

  return <Routes>
    <Route path={'/auth'} element={<Login />} />;
  </Routes>

};

export default AuthRoute;
