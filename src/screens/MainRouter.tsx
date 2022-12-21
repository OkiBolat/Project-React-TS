import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Examine from '../features/main/Examine';

const router = createBrowserRouter([{ path: '/', element: <Examine /> }]);

const MainRouter = () => {
    return <RouterProvider router={router} />;
};

export default MainRouter;
