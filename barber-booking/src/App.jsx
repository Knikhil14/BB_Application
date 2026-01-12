import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import BarbersPage from "./pages/BarbersPage";
import DateTimePage from "./pages/DateTimePage";
import CustomerForm from "./pages/CustomerForm";
import ConfirmationPage from "./pages/ConfirmationPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-bg">
        <div className="overlay"></div>   {/* blur layer */}
                   
        <NavBar />  {/* stays fixed at top, NOT inside centering box */}
        <div className="content-wrapper">

          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/barbers" element={<BarbersPage />} />
              <Route path="/booking" element={<DateTimePage />} />
              <Route path="/customer" element={<CustomerForm />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
            </Routes>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;


import HomePage from "./pages/HomePage";

function App() {
  return (
    <div style={{ padding: "40px", color: "white" }}>
      <HomePage />
    </div>
  );
}

export default App;
