import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import CreateEmail from './pages/CreateEmail/CreateEmail';
import { AuthContext } from './providers/isAuth';


const App = () => {
  const { isAuthenticated, setIsAuthenticated, dataAuth } = useContext(AuthContext);
  
  return (
    <>
      <Header/>
      <main>
            <Routes>
                {!isAuthenticated ? (
                    <>
                        <Route 
                          path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                        <Route 
                          path="/registration" element={<Registration setIsAuthenticated={setIsAuthenticated} />} />
                    </>
                ) : (
                    <>
                        <Route 
                          path="/email/current" 
                          element={<Home 
                          dataAuth={dataAuth} setIsAuthenticated={setIsAuthenticated} />} />
                        <Route 
                          path="/email/current/create" 
                            element={<CreateEmail 
                            dataAuth={dataAuth} />} />
                    </>
                )}
            </Routes>
      </main>
    </>
  );
}

export default App;
