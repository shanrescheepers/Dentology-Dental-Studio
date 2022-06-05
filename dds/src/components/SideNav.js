import React from "react";
import { Nav } from 'react-bootstrap';
import { Route } from "react-router";
import { Link } from "react-router-dom";
import '../css/sideNav.css';

export function SideNav() {

    function test() {
        console.log("Hey, jyt my knoppie gedruk");
    }

    return (
        <div className="sidenav">
            <div className="dds-logo"></div>
            <div className="navLinks">
                <ul>

                    <li ><Link to="/reception"><svg className="dash-icon"  ></svg></Link> </li>
                    <br></br>
                    <li><Link to="/receptionists"><svg className="receptionist-icon"></svg></Link></li>
                    <br></br>
                    <li><Link to="/dentists"><svg className="doctor-icon"></svg></Link></li>
                    <li><Link to="/patients"><svg className="patient-icon"></svg></Link></li>
                    <br></br>
                    <li><Link to=""><svg className="signin-signout-icon"></svg></Link></li>
                </ul>


            </div>
        </div >

    )
}
export default SideNav;