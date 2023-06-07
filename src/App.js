import './App.css';
import React from "react";
import ShowDetails from './pages/show-details/ShowDetails';
import ShowList from './pages/show-list/ShowList';
import TicketBookingForm from './pages/ticket-booking-form/TicketBookingForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ShowList />} />
        <Route exact path="/booking/:showId" element={<TicketBookingForm/>} />
        <Route exact path="/shows/:showId" element={< ShowDetails />} />
        <Route exact path="/shows" element={<ShowList />} />
      </Routes>
    </Router>
  );
}

export default App;
