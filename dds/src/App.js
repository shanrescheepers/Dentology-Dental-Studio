import { React, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { deleteReceptionist, createReceptionist, updateReceptionist, getReceptionists } from './http/receptionist';
import { ReceptionistPage } from './pages/ReceptionistPage'
import { DoctorPage } from './pages/DoctorPage'
import PatientPage from './pages/PatientPage';
import LoginForm from './pages/LoginForm';
import SideNav from './components/SideNav';

// import { useEffect } from 'react';
// import { createReceptionist, deleteReceptionist, updateReceptionist, getReceptionists } from './http/receptionist';
// REËL: As my terminal nie die groen SUCCESFULLY compiled wys nie, maak jy nie jou donerse file of laptop toe nie. Right? Right? RIGHT.

function App() {

  // useEffect(() => {
  //   getReceptionists().then(data => console.log(data));
  // }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <SideNav />
        <Routes>
          {/* <Route path="login" element={<LoginForm />} /> */}
          <Route path="/reception" element={<ReceptionistPage />} />
          <Route path="/dentists" element={<DoctorPage />} />
          <Route path="/patients" element={<PatientPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
