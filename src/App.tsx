import { AuthPage } from "./components/AuthPage/AuthPage";
import { Header } from "./components/Header/Header";
import { Routes, Route, Navigate } from 'react-router-dom';
import './styles.css';
import { $auth } from "./context/auth";
import { useStore } from "effector-react";

function App() {
  const isLoggedIn = useStore($auth)

  return (
    <div>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to='/costs' /> : <Navigate to='/login' />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to='/costs' /> : <AuthPage type="login" />} />
          <Route path="/registration" element={isLoggedIn ? <Navigate to='/costs' /> : <AuthPage type="registration" />} />
          <Route path="/costs" element={isLoggedIn ? <h1>costs</h1> : <Navigate to='/login' />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;
