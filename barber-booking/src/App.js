import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

// Pages
import HomePage from './pages/HomePage';
import BarberBookingSystem from './pages/BarberBookingSystem';
import BarbersPage from './pages/BarbersPage';
import ServicesPage from './pages/ServicesPage';
import DateTimePage from './pages/DateTimePage';
import CustomerForm from './pages/CustomerForm';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
