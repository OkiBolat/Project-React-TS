import { Route, Routes } from 'react-router-dom';

const ManagersRouter = () => {
    return (
        <Routes>
            <Route path={'/managers'} element={<div>ManagersPage</div>} />;
        </Routes>
    );
};

export default ManagersRouter;
