import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/sideNav.css';
import dashIcon from '../assets/images/home-grey.svg'
import receptionistIcon from '../assets/images/receptionists-grey.svg'
import docIcon from '../assets/images/dentist-grey.svg'
import patientIcon from '../assets/images/patients-grey.svg'
import signInSignOutIcon from '../assets/images/login-grey.svg'

export function SideNav() {

    const [loggedIn, setLoggedIn] = useState({});

    useEffect(() => {
        setLoggedIn(localStorage.getItem('recep'))
        console.log(loggedIn);
    })

    const logout = () => {

    }

    return (
        <div className="sidenav">
            <div className="dds-logo"></div>
            <div className="nav-links">
                <Link to="/dashboard" className="dash-icon">
                    <img src={dashIcon} />
                </Link>
                <Link to="/receptionists" className="receptionist-icon">
                    <img src={receptionistIcon} />
                </Link>
                <Link to="/dentists" className="doctor-icon" >
                    <img src={docIcon} />
                </Link>
                <Link to="/patients" className="patient-icon" >
                    <img src={patientIcon} />
                </Link>
                <Link to="/login" className="signin-signout-icon" >
                    <img src={signInSignOutIcon} />
                </Link>
            </div>
        </div >
    )
}
export default SideNav;