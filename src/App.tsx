import React from 'react';
import './App.scss';
import Header from './components/Header';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';

function App() {
    
//   const [authenticated, setAuthenticated] = useState(false)
//   useEffect(() => {
//     const unsubscribe = auth.watch(jwt => {
//       setAuthenticated(!!jwt)
//     })
//     return () => {
//       unsubscribe()
//     }
//   }, [])

    return (
        <div className='App'>
            <Header isAuth={false} />
            <AuthPage />
            <MainPage />
        </div>
    );
}

export default App;
