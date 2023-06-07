import './App.css';
import React from "react";
import ShowDetails from './components/ShowDetails';
import ShowList from './components/ShowList';
import TicketBookingForm from './components/TicketBookingForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {

  return (
    <div >
      <Router>
        <Navbar />
        {/* <Alert message="iNotebook Work in Progress" alert={alert} /> */}
        <div className="container">
          <Routes>
            <Route exact path="/booking/:showId" element={<TicketBookingForm/>} />
            <Route exact path="/shows/:showId" element={< ShowDetails/>} />
            <Route exact path="/showlist" element={<ShowList />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
