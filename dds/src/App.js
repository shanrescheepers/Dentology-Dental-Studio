import { React, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ReceptionistPage } from './pages/ReceptionistPage'
import { DoctorPage } from './pages/DoctorPage'
import PatientPage from './pages/PatientPage';
import SideNav from './components/SideNav';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { useEffect } from 'react';
// import { createReceptionist, deleteReceptionist, updateReceptionist, getReceptionists } from './http/receptionist';
// REËL: As my terminal nie die groen SUCCESFULLY compiled wys nie, maak jy nie jou donerse file of laptop toe nie. Right? Right? RIGHT.

function App() {

  const [data, setData] = useState(false);

  const childToParent = (childdata) => {
    setData(childdata);
  }

  return (
    <BrowserRouter>
      <div className='app-view'>
        <SideNav parentToChild={data} />
        <div className="main">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard childToParent={childToParent} />} />
            <Route path="/receptionists" element={<ReceptionistPage />} />
            <Route path="/dentists" element={<DoctorPage />} />
            <Route path="/patients" element={<PatientPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
