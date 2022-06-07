import axios from 'axios';
import { React } from 'react';
import { Col, Row, Form, Table, Button } from 'react-bootstrap';
import Calendar from '../components/CalendarComponent';
import Toggle from '../components/CustomToggleDropdown';
import Time from '../components/Time';
import { DatePicker } from 'react-datepicker';
import { useState } from "react";
import DatePickerCalendar from '../components/DatePicker';

export function ReceptionistPage() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <section>
            <div className="receptionist-page-main-dash">

                {/* WELCOME BLOCK */}
                <div className="welcome-block">
                    <h2 className='gm'>Good morning,Iman.</h2>

                    <h4 className='cc'><br />Have a great day at work!</h4>
                    <div id='illustration'></div>
                </div>

                <div className='new-appointment-block'>

                    <div className='booking'>

                        {/* <>
    <Toggle />
</> */}
                        <Form className='new-aptt'>
                            <Col className='add-apt-inner'>
                                <Row>
                                    <Form.Select type="name" placeholder="Patient Name" className='patient-dropdown' >
                                        <option>Select Patient</option>
                                        <option>Dr. Rox Clarke</option>
                                        <option>Dr. Nicole Morgan</option>
                                        <option>Dr. Leja Scheepers</option>
                                    </Form.Select>
                                </Row>
                                <Row>
                                    <Form.Control type="date" className='date'></Form.Control>
                                </Row>
                            </Col>

                            <Col>
                                <Row>
                                    <Form.Select className='doctor-dropdown'>
                                        <option>Select Doctor</option>
                                        <option>Dr. Rox Clarke</option>
                                        <option>Dr. Nicole Morgan</option>
                                        <option>Dr. Leja Scheepers</option>
                                    </Form.Select>
                                </Row>
                                <Row>
                                    <div className='time-input'>
                                        <Time />
                                    </div>
                                </Row>
                            </Col>
                            <Button variant="primary" type="submit" className='add-new-appointment'>
                                add appointment
                            </Button>
                        </Form>

                    </div>
                </div>
                {/* SEARCH  APPOINTMENT */}


                {/* RIGHT PROFILE  */}
                <div className='profile-and-appointment-panel'>
                    <div className='profile-block'></div>
                    <div className='receptionist-info'>
                        <p className='receptionist-name'>Iman Brown</p>
                        <p className='receptionist-rank'>Head Dental Receptionist</p>
                        <p className='status'>Status Active</p>

                    </div>
                    <svg className='active'></svg>
                    <div className='weekly-appointment-block'>
                        <h2 className='reception-week-overview'>Your Calendar</h2>
                        <DatePickerCalendar />

                        {/* <div className='weekly-overview'>


                            <div className='card1'>
                                <p className='mo'>Mo</p>
                                <p className='date'>6</p>
                            </div>
                            <div className='card2'>
                                <div className='card-info'>
                                    <p className='tue'>Tue</p>
                                    <p className='date'>7</p>
                                </div>
                            </div> */}
                        {/* <div className='card3'>
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
                            </div> */}
                        {/* <div className='card6'></div>
                            <div className='card7'></div> */}
                        {/* </div> */}

                    </div>
                    <div className='next-appointment-block'>

                    </div>
                </div>
                <div className='scheduled-appointments'>
                    <div className='patient-table' striped bordered hover>

                        <div class="table-wrapper">
                            <div class="table-title">
                                <div class="row">
                                    <div class="col-sm-8"><span className='scheduled'><h2>SCHEDULED PATIENTS<b>FOR TODAY</b></h2></span></div>
                                    <hr className='scheduled-hr'></hr>
                                </div>
                            </div>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Surname</th>
                                        <th>Doctor</th>
                                        <th>Phone</th>
                                        <th>Time</th>
                                        <th>Reason</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='patient-name'>Shanre</td>
                                        <td className='patient-surname'>Scheepers</td>
                                        <td className='doctor-name'>Dr. Nicole Morgan</td>
                                        <td className='phone'>0827559178 </td>
                                        <td className='time'>09:15</td>
                                        <td className='reason'>Active Aligners</td>
                                        <td>
                                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                                            <i ><a class="edit" title="edit" className='edit'></a></i>
                                            <i ><a class="delete" title="Delete" className='delete'></a></i>
                                            <i ><a class="approved" title="approved" className='approved'></a></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='patient-name'>Jakobus</td>
                                        <td className='patient-surname'>Verster</td>
                                        <td className='doctor-name'>Dr. Leja Scheepers</td>
                                        <td className='phone'>0827559176 </td>
                                        <td className='time'>09:15</td>
                                        <td className='reason'>Root Canal</td>
                                        <td>
                                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                                            <i ><a class="edit" title="edit" className='edit'></a></i>
                                            <i ><a class="delete" title="Delete" className='delete'></a></i>
                                            <i ><a class="approved" title="approved" className='approved'></a></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='patient-name'>Muneeba</td>
                                        <td className='patient-surname'>Akbar</td>
                                        <td className='doctor-name'>Dr. Rox Clarke</td>
                                        <td className='phone'>082456890 </td>
                                        <td className='time'>10:15</td>
                                        <td className='reason'>Zoom Teeth Whitening</td>
                                        <td>
                                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                                            <i ><a class="edit" title="edit" className='edit'></a></i>
                                            <i ><a class="delete" title="Delete" className='delete'></a></i>
                                            <i ><a class="approved" title="approved" className='approved'></a></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='patient-name'>Emil</td>
                                        <td className='patient-surname'>Scheepers</td>
                                        <td className='doctor-name'>Dr. Rox Clarke</td>
                                        <td className='phone'>0827559176 </td>
                                        <td className='time'>11:15</td>
                                        <td className='reason'>Mouth Guard Fit</td>
                                        <td>
                                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                                            <i ><a class="edit" title="edit" className='edit'></a></i>
                                            <i ><a class="delete" title="Delete" className='delete'></a></i>
                                            <i ><a class="approved" title="approved" className='approved'></a></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='patient-name'>Tersia</td>
                                        <td className='patient-surname'>Scheepers</td>
                                        <td className='doctor-name'>Dr. Leja Scheepers</td>
                                        <td className='phone'>0824992982 </td>
                                        <td className='time'>11:15</td>
                                        <td className='reason'>Denture & Root Canal</td>
                                        <td>
                                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                                            <i ><a class="edit" title="edit" className='edit'></a></i>
                                            <i ><a class="delete" title="Delete" className='delete'></a></i>
                                            <i ><a class="approved" title="approved" className='approved'></a></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='patient-name'>Megan</td>
                                        <td className='patient-surname'>Viljoen</td>
                                        <td className='doctor-name'>Dr. Nicole Morgan</td>
                                        <td className='phone'>0824496706 </td>
                                        <td className='time'>12:15</td>
                                        <td className='reason'>Root Canal</td>
                                        <td>
                                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                                            <i ><a class="edit" title="edit" className='edit'></a></i>
                                            <i ><a class="delete" title="Delete" className='delete'></a></i>
                                            <i ><a class="approved" title="approved" className='approved'></a></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='patient-name'>Megan</td>
                                        <td className='patient-surname'>Viljoen</td>
                                        <td className='doctor-name'>Dr. Nicole Morgan</td>
                                        <td className='phone'>0824496706 </td>
                                        <td className='time'>12:15</td>
                                        <td className='reason'>Root Canal</td>
                                        <td>
                                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                                            <i ><a class="edit" title="edit" className='edit'></a></i>
                                            <i ><a class="delete" title="Delete" className='delete'></a></i>
                                            <i ><a class="approved" title="approved" className='approved'></a></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                    {/* <div className='search-bar'>
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
                    </div> */}
                </div>
            </div >

        </section >
    );
}
export default ReceptionistPage;