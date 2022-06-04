import React from "react";
import { Nav } from 'react-bootstrap';
import { Route } from "react-router";
import '../css/sideNav.css';

export function SideNav() {
    return (
        <div className="sidenav">
            <div className="dds-logo"></div>
            <div className="navLinks">
                <ul>

                    <li ><svg className="dash-icon"  ></svg><Nav.Link href="/reception"></Nav.Link> </li>
                    <br></br>
                    <li><svg className="receptionist-icon"></svg><Nav.Link href="/reception"></Nav.Link></li>
                    <br></br>
                    <li><svg className="doctor-icon"></svg><Nav.Link href="/dentists"></Nav.Link></li>
                    <li><svg className="patient-icon"></svg><Nav.Link href="/patients"></Nav.Link></li>
                    <li><svg className="crud-icon"></svg><Nav.Link href="add-page"></Nav.Link></li>
                    <li><svg className="signin-signout-icon"></svg><Nav.Link href=""></Nav.Link></li>
                </ul>


            </div>
        </div>

    )
}
export default SideNav;