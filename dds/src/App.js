import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getReceptionistsFunction } from './http/receptionist';

function App() {

  useEffect(() => {
    getReceptionistsFunction().then(receptionists => {
      console.log(receptionists);
    });
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
