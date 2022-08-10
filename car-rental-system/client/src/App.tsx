import React from 'react';
import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPayment from './components/Payment/AddPayment';
import AboutUs from './pages/AboutUs';
import Booking from './pages/Booking';
import Homepage from './pages/Home';
import PaymentView from './components/Payment/Payment';
import ViewCards from './components/CardManage/ViewCards';
import EditCard from './components/CardManage/EditCard';
import Dashboard from './pages/Dashboard';
import AdminPaymentView from './pages/AdminPaymentView';
import AdminStaffPage from './pages/AdminStaffPage';



function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/add-payment" element={<AddPayment />} />
          <Route path="/paymentview/:payment_id" element={<PaymentView />} />
          <Route path="/view-cards" element={<ViewCards />} />
          <Route path="/cards/:id/edit" element={<EditCard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminpayment" element={<AdminPaymentView />} />
          <Route path="/adminstaffpage" element={<AdminStaffPage />} />
          
        
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;