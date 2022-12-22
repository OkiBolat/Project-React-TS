import { Route, Routes } from 'react-router-dom';
import Examine from '../../features/main/Examine';

const ManagersRouter = () => {
    return (
        <Routes>
            <Route path={'/managers'} element={<Examine/>} />;
        </Routes>
    );
};

export default ManagersRouter;
