import { Route, Routes } from 'react-router-dom';
import Login from '../../features/auth/Login';

const ExamineRouter = () => {
    return (
        <Routes>
            <Route path={'/examine'} element={<div>Examine</div>} />;
        </Routes>
    );
};

export default ExamineRouter;
