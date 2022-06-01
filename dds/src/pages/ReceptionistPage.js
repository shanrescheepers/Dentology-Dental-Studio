import '../css/ReceptionistPage.css';
import axios from 'axios';
import { React, PropsWithRef } from 'react';
import { Col, Form, Dropdown } from 'react-bootstrap';
import Calendar from '../components/CalendarComponent';
import Toggle from '../components/CustomToggleDropdown';

export function ReceptionistPage() {

    return (
        <section>
            <div className="receptionist-page-main-dash">

                {/* WELCOME BLOCK */}
                <div className="welcome-block">
                    <h1 className='gm'>Good morning, Iman.</h1>
                    <p className='wtdh'>Co-ordinate & organise all scheduled<br /> and new appointments with ease.</p>
                    <h4 className='cc'><br />Have a great day at work!</h4>
                    <div id='illustration'></div>
                </div>

                {/* SEARCH  APPOINTMENT */}
                <div className='search-bar'>
                    <Col xs={5} className='sb'>
                        <Form.Control placeholder="Search appointment" />
                    </Col>
                    <Col className='search'>
                        <button type="button" className="btn btn-search">
                            <svg width="15px" height="15px">
                                <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                            </svg>
                        </button>
                    </Col>
                </div>
                <div className='new-appointment-block'>
                    <h3>Add Appointment</h3>
                    <div className='booking'>
                        {/* <>
                            <Toggle />
                        </> */}
                        {/* <Dropdown className="d-inline mx-2" autoClose="true" true>
                            <Dropdown.Toggle id="dropdown-autoclose-true" autoClose="true">
                                Default Dropdown
                            </Dropdown.Toggle>

                            <Dropdown.Menu autoClose='true'>
                                <Dropdown.Item true>Patient A</Dropdown.Item>
                                <Dropdown.Item >Patient B</Dropdown.Item>
                                <Dropdown.Item >Patient C</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}

                    </div>
                </div>
                {/* RIGHT PROFILE  */}
                <div className='profile-and-appointment-panel'>
                    <div className='profile-block'></div>
                    <div className='receptionist-info'>
                        <p className='receptionist-name'>Iman Brown</p>
                        <p className='receptionist-rank'>Head Dental Receptionist</p>
                    </div>

                    <div className='weekly-appointment-block'>
                        <h2 className='reception-week-overview'>Weekly Appointment Overview</h2>
                        <div className='weekly-overview'>

                            <div className='month'><h4 className='june'>June 2022</h4></div>
                            <div className='card1'>
                                <p className='mo'>Mo</p>
                                <p className='date'>6</p>
                            </div>
                            <div className='card2'>
                                <div className='card-info'>
                                    <p className='tue'>Tue</p>
                                    <p className='date'>7</p>
                                </div>
                            </div>
                            <div className='card3'>
                                <div className='card-info'>
                                    <p className='wed'>We</p>
                                    <p className='date'>8</p>
                                </div>
                            </div>
                            <div className='card4'>
                                <div className='card-info'>
                                    <p className='thu'>Thu</p>
                                    <p className='date'>9</p>
                                </div>
                            </div>
                            <div className='card5'>
                                <div className='card-info'>
                                    <p className='fri'>Fri</p>
                                    <p className='date'>10</p>
                                </div>
                            </div>
                            {/* <div className='card6'></div>
                            <div className='card7'></div> */}
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}
export default ReceptionistPage;