import { Route, Routes } from 'react-router-dom';
import Examine from '../../features/main/Examine';

const UsersRouter = () => {
    return (
        <Routes>
            <Route path={'/users'} element={<Examine/>} />;
        </Routes>
    );
};

export default UsersRouter;
