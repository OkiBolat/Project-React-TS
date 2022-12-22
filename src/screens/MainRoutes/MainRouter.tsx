import { Route, Routes } from 'react-router-dom';
import Examine from '../../features/main/Examine';

const MainRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Examine />} />;
        </Routes>
    );
};

export default MainRouter;
