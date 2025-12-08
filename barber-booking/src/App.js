import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import BarberBookingSystem from './pages/BarberBookingSystem';
import BarbersPage from './pages/BarbersPage';
import ServicesPage from './pages/ServicesPage';
import DateTimePage from './pages/DateTimePage';
import CustomerForm from './pages/CustomerForm';
import ConfirmationPage from './pages/ConfirmationPage';

const appStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL + '/barber-bg.jpg'})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  minHeight: '100vh'
};

function App() {
  return (
    <div style={appStyle}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BarberBookingSystem />} />
        <Route path="/barbers" element={<BarbersPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/datetime" element={<DateTimePage />} />
        <Route path="/customer" element={<CustomerForm />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </div>
  );
}

export default App;
