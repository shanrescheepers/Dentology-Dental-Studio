import React, { useEffect, useState, componentDidMount } from 'react';
import '../css/loginPage.css';
import { getReceptionists } from '../http/receptionist';
import { useNavigate } from "react-router-dom";

export function LoginPage() {

    let navigate = useNavigate();
    const [details, setDetails] = useState();
    const [receps, setReceps] = useState({
        receptionists: []
    });

    const [user, setUser] = useState({});

    useEffect(() => {
        getReceptionists().then(response => {
            setReceps({
                receptionists: response.data
            });
        })
    }, [])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDetails(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = () => {
        //localStorage.setItem('email', details.email);
        let confirmedRecep = receps.receptionists.find(recep => recep.email === details.email);

        if (!confirmedRecep) {
            alert("Details incorrect");
        } else {
            if (confirmedRecep.password === details.password) {
                setUser(confirmedRecep);
                navigate("/dashboard", { replace: true });
                localStorage.setItem('name', confirmedRecep.name);
                localStorage.setItem('surname', confirmedRecep.surname);
                localStorage.setItem('rankId', confirmedRecep.rankId);
                localStorage.setItem('loggedIn', true);
            } else {
                alert("Details incorrect");
            }
        }
    }

    return (
        <div className='login'>
            <h1>Login</h1>
            <input onChange={handleChange} name='email' type='email' placeholder="Receptionist Email" className='recep-form-inputs' />
            <input onChange={handleChange} name='password' type='password' placeholder="Password" className='recep-form-inputs' autoComplete="on" />
            <button onClick={() => handleSubmit()}>Login</button>
        </div>
    )
}

export default LoginPage;