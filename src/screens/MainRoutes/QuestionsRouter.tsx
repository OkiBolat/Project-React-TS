import { Route, Routes } from 'react-router-dom';

const QuestionsRouter = () => {
    return (
        <Routes>
            <Route path={'/questions'} element={<div>QuestionsPage</div>} />;
        </Routes>
    );
};

export default QuestionsRouter;
