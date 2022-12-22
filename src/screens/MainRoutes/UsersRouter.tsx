import { Route, Routes } from 'react-router-dom';

const UsersRouter = () => {
    return (
        <Routes>
            <Route path={'/users'} element={<div>UsersPage</div>} />;
        </Routes>
    );
};

export default UsersRouter;
