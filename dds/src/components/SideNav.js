import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/sideNav.css';
import dashIcon from '../assets/images/home-grey.svg'
import receptionistIcon from '../assets/images/receptionists-grey.svg'
import docIcon from '../assets/images/dentist-grey.svg'
import patientIcon from '../assets/images/patients-grey.svg'
import signInSignOutIcon from '../assets/images/login-grey.svg'
import { useNavigate } from "react-router-dom";

export function SideNav({ parentToChild }) {

    let navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const [rank, setRank] = useState(0);

    useEffect(() => {
        setLoggedIn(parentToChild.loggedIn);
        setRank(parentToChild.rank);
    })

    const logout = () => {
        navigate("/login", { replace: true });
        localStorage.clear();
        window.location.reload()
    }

    const getPermission = (rankId) => {
        if (rankId === '1') {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="sidenav">
            <div className="dds-logo"></div>
            {loggedIn ?
                <div className="nav-links">
                    <Link to="/dashboard" className="dash-icon">
                        <img src={dashIcon} />
                    </Link>
                    {getPermission(rank) ?
                        <Link to="/receptionists" className="receptionist-icon">
                            <img src={receptionistIcon} />
                        </Link>
                        : <span></span>}
                    {getPermission(rank) ?
                        <Link to="/dentists" className="doctor-icon" >
                            <img src={docIcon} />
                        </Link>
                        : <span></span>}
                    <Link to="/patients" className="patient-icon" >
                        <img src={patientIcon} />
                    </Link>
                    <Link onClick={() => logout()} to="/login" className="signin-signout-icon" >
                        <img src={signInSignOutIcon} />
                    </Link>
                </div>
                : <span></span>
            }
        </div >
    )
}
export default SideNav;