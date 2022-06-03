import { useEffect } from 'react';
import './App.css';
import { deleteReceptionist, createReceptionist, updateReceptionist, getReceptionists } from './http/receptionist';
import { ReceptionistPage } from './pages/ReceptionistPage';
import { DoctorPage } from './pages/DoctorPage';
// import { useEffect } from 'react';
// import { createReceptionist, deleteReceptionist, updateReceptionist, getReceptionists } from './http/receptionist';
// REËL: As my terminal nie die groen SUCCESFULLY compiled wys nie, maak jy nie jou donerse file of laptop toe nie. Right? Right? RIGHT.

function App() {

  useEffect(() => {
    deleteReceptionist(4).then(data => console.log(data));
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReceptionistPage />} />
          <Route path="/dentists" element={<DoctorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
