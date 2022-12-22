import { Route, Routes } from 'react-router-dom';
import Examine from '../../features/main/Examine';

const ExamineRouter = () => {
    return (
        <Routes>
            <Route path={'/examine'} element={<Examine/>} />;
        </Routes>
    );
};

export default ExamineRouter;
