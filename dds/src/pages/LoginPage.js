import React, { useEffect, useState, componentDidMount } from 'react';
import '../css/loginPage.scss';
import { getReceptionists } from '../http/receptionist';
import { useNavigate } from "react-router-dom";
import Lottie from 'react-lottie';
import * as animationData from '../lottie/login.json'

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
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className='login'>
            <div className='login__details'>
                <div className='login__details__h1'>
                    <h2>Dentology Dental Studio, for all your dental needs and wants.</h2><br /> <p style={{ 'marginTop': '-20px' }}>Please enter your details below to continue to the workspace!</p>
                </div>


                <input onChange={handleChange} name='email' type='email' placeholder="Receptionist Email" className='login__details__input' />
                <input onChange={handleChange} name='password' type='password' placeholder="Password" className='login__details__input2' autoComplete="on" />
                <button className='login__details__button' onClick={() => handleSubmit()}>Login</button>


            </div>
            <div className='login__lottie' >
                <Lottie className='login__lottie' options={defaultOptions}
                    // height={400}
                    // width={400}
                    style={{ "borderRadius": '30px', "marginRight": "50px" }}
                    isStopped={false}
                    isPaused={false} />
                <h4 style={{ 'textAlign': 'center', 'color': '#fff' }}>BECAUSE A BEAUTIFUL SMILE IS ALWAYS IN STYLE</h4>
            </div>
        </div>
    )
}

export default LoginPage;