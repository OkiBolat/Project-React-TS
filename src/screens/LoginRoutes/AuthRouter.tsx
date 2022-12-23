import { Route, Routes } from 'react-router-dom';
import { RouteName } from '../../libs/types/routes.enum';
import Login from '../../features/auth/Login';

const AuthRoute = () => {
    return (
        <Routes>
            <Route path={RouteName.Auth} element={<Login />} />;
        </Routes>
    );
};

export default AuthRoute;
