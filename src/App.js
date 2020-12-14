import React from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";

// componemts
import { Navbar } from './components/Navbar/Navbar';
import TourListComponent from './components/TourList';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourListComponent />
    </React.Fragment>
  );
}

export default App;
