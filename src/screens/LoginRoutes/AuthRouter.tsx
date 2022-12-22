import { Route, Routes } from 'react-router-dom';
import { RoutesEnum } from '../../libs/types/routes.enum';
import Login from '../../features/auth/Login';

const AuthRoute = () => {
    return (
        <Routes>
            <Route path={RoutesEnum.Auth} element={<Login />} />;
        </Routes>
    );
};

export default AuthRoute;
