import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import BarbersPage from "./pages/BarbersPage";
import DateTimePage from "./pages/DateTimePage";
import CustomerForm from "./pages/CustomerForm";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/barbers" element={<BarbersPage />} />
        <Route path="/datetime" element={<DateTimePage />} />
        <Route path="/customer" element={<CustomerForm />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
