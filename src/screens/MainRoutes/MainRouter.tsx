import { Route, Routes } from 'react-router-dom';
import { RouteName } from '../../libs/types/routes.enum';
import Examine from '../../features/main/Examine';

const MainRouter = () => {
    return (
        <Routes>
            <Route path={RouteName.Main} element={<Examine />} />;
        </Routes>
    );
};

export default MainRouter;
