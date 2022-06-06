import { React, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { deleteReceptionist, createReceptionist, updateReceptionist, getReceptionists } from './http/receptionist';
import { ReceptionistPage } from './pages/ReceptionistPage'
import { DoctorPage } from './pages/DoctorPage'
import PatientPage from './pages/PatientPage';
import SideNav from './components/SideNav';
import LoginPage from './pages/LoginPage';

// import { useEffect } from 'react';
// import { createReceptionist, deleteReceptionist, updateReceptionist, getReceptionists } from './http/receptionist';
// REËL: As my terminal nie die groen SUCCESFULLY compiled wys nie, maak jy nie jou donerse file of laptop toe nie. Right? Right? RIGHT.

function App() {

  // useEffect(() => {
  //   getReceptionists().then(data => console.log(data));
  // }, [])

  return (
    <BrowserRouter>
      <div className='app-view'>
        <SideNav />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reception" element={<ReceptionistPage />} />
          <Route path="/dentists" element={<DoctorPage />} />
          <Route path="/patients" element={<PatientPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
