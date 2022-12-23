import { Route, Routes } from 'react-router-dom';
import { RouteName } from '../../libs/types/routes.enum';
import Examine from '../../features/main/Examine';

const UsersRouter = () => {
    return (
        <Routes>
            <Route path={RouteName.Users} element={<Examine />} />;
        </Routes>
    );
};

export default UsersRouter;
