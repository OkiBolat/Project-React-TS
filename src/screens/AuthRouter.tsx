import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../features/auth/Login';

const router = createBrowserRouter([{ path: '/', element: <Login /> }]);

const AuthRouter = () => {
    return <RouterProvider router={router} />;
};

export default AuthRouter;
