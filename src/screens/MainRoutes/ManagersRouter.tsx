import { Route, Routes } from 'react-router-dom';
import { RoutesEnum } from '../../libs/types/routes.enum';
import Examine from '../../features/main/Examine';

const ManagersRouter = () => {
    return (
        <Routes>
            <Route path={RoutesEnum.Managers} element={<Examine />} />;
        </Routes>
    );
};

export default ManagersRouter;
