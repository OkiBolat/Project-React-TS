import { Route, Routes } from 'react-router-dom';
import { RoutesEnum } from '../../libs/types/routes.enum';
import Examine from '../../features/main/Examine';

const MainRouter = () => {
    return (
        <Routes>
            <Route path={RoutesEnum.Main} element={<Examine />} />;
        </Routes>
    );
};

export default MainRouter;
