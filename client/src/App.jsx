// src/App.js
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';
import './App.css';
import PageNotFound from './pages/PageNotFound';

const App = () => (
  
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  
);

export default App;
