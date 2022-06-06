import React from "react";
import { Link } from "react-router-dom";
import '../css/sideNav.css';
import dashIcon from '../assets/images/dash-icon.svg'
import receptionistIcon from '../assets/images/user-icon.svg'
import docIcon from '../assets/images/doc-icon.svg'
import patientIcon from '../assets/images/doctor-icon.svg'
import signInSignOutIcon from '../assets/images/signin-signout-icon.svg'

export function SideNav() {

    return (
        <div className="sidenav">
            <div className="dds-logo"></div>
            <div className="nav-links">
                <Link to="/reception" className="dash-icon">
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
                <Link to="" className="signin-signout-icon" >
                    <img src={signInSignOutIcon} />
                </Link>
            </div>
        </div >
    )
}
export default SideNav;