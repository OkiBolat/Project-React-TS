import { Route, Routes } from 'react-router-dom';
import { RoutesEnum } from '../../libs/types/routes.enum';
import Examine from '../../features/main/Examine';

const UsersRouter = () => {
    return (
        <Routes>
            <Route path={RoutesEnum.Users} element={<Examine />} />;
        </Routes>
    );
};

export default UsersRouter;
