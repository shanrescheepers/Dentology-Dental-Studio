
import React, { useState } from 'react';
import { Card, Button, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
import '../css/patientPage.css';
import { createPatient } from '../http/patient';

export function PatientPage() {

    const [patient, setPatient] = useState({});


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPatient(values => ({ ...values, [name]: value }))
        console.log(patient)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (patient.genderId === "Female") {
            patient.genderId = 1
        } else {
            patient.genderId = 2
        }

        patient.medAidNum = parseInt(patient.medAidNum);
        patient.age = parseInt(patient.age);

        createPatient(patient).then(x => console.log(x));
    }

    return (
        <section>
            <div className='patient-page-main-dash'>
                <div className='patients'>

                    <div className='patient-profiles'>
                        <h1> Existing patients in DDS system</h1>
                        <div className='p1'>
                            <Card className='p1'>
                                <div className='pfp1' />

                                <p className='pp'>Shanre Scheepers</p>
                                <p className='medaid'>
                                    12345678</p>

                                <ListGroup className="list-group-flush">
                                    <ListGroupItem className='gender'>Female</ListGroupItem>
                                    <ListGroupItem className='age'>Age: 26</ListGroupItem>
                                    <ListGroupItem className='cell-no'>0827559178</ListGroupItem>
                                    <ListGroupItem className='cell-no'>shanrescheepers@gmail.com</ListGroupItem>
                                </ListGroup>

                            </Card>
                        </div>

                        <div className='p2'>
                            <Card style={{ width: '18rem' }} className='p2'>
                                <div className='pfp2' />
                                <Card.Body>
                                    <p className='pp'>Jakobus Verster</p>
                                    <p className='medaid'>
                                        7652067</p>

                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem className='gender'>Male</ListGroupItem>
                                        <ListGroupItem className='age'>Age: 19</ListGroupItem>
                                        <ListGroupItem className='cell-no'>0827669176</ListGroupItem>
                                        <ListGroupItem className='cell-no'>franco@arrowhead.com</ListGroupItem>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className='p3'>
                            <Card style={{ width: '18rem' }} className='p3'>
                                <div className='pfp3' />
                                <Card.Body>
                                    <p className='pp'>Muneeba Akbar</p>
                                    <p className='medaid'>
                                        20222123</p>

                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem className='gender'>Female</ListGroupItem>
                                    <ListGroupItem className='age'>Age: 29</ListGroupItem>
                                    <ListGroupItem className='cell-no'>082456890</ListGroupItem>
                                    <ListGroupItem className='cell-no'>muneebakbar@gmail.com</ListGroupItem>
                                </ListGroup>
                            </Card>
                        </div>

                        <div className='p4'>
                            <Card style={{ width: '18rem' }} className='p4'>
                                <div className='pfp4' />
                                <Card.Body>
                                    <p className='pp'>Emil Scheepers</p>
                                    <p className='medaid'>
                                        26083456</p>

                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem className='gender'>Male</ListGroupItem>
                                    <ListGroupItem className='age'>Age: 26</ListGroupItem>
                                    <ListGroupItem className='cell-no'>082456890</ListGroupItem>
                                    <ListGroupItem className='cell-no'>emilscheepers@gmail.com</ListGroupItem>
                                </ListGroup>
                            </Card>
                        </div>


                        <div className='p5'>
                            <Card style={{ width: '18rem' }} className='p5'>
                                <div className='pfp5' />
                                <Card.Body>
                                    <p className='pp'>Tersia Scheepers</p>
                                    <p className='medaid'>
                                        20222123</p>

                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem className='gender'>Female</ListGroupItem>
                                    <ListGroupItem className='age'>Age: 29</ListGroupItem>
                                    <ListGroupItem className='cell-no'>082456890</ListGroupItem>
                                    <ListGroupItem className='cell-no'>muneebakbar@gmail.com</ListGroupItem>
                                </ListGroup>
                            </Card>
                        </div>



                        <div className='p6'>
                            <Card style={{ width: '18rem' }} className='p6'>
                                <div className='pfp6' />
                                <Card.Body>
                                    <p className='pp'>Megan Viljoen</p>
                                    <p className='medaid'>
                                        20222123</p>

                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem className='gender'>Female</ListGroupItem>
                                    <ListGroupItem className='age'>Age: 29</ListGroupItem>
                                    <ListGroupItem className='cell-no'>082456890</ListGroupItem>
                                    <ListGroupItem className='email'>muneebakbar@gmail.com</ListGroupItem>
                                </ListGroup>
                            </Card>
                        </div>
                    </div>



                </div>


            </div>
            <div className='add-patient-panel'>
                <h2 className='add-patient-h2'>+Patient</h2>

                {/* <Form>
                            <Form.Control type="name" placeholder="Patient Name" className='patient-name-input' />
                            <br />
                            <Form.Control type="surname" placeholder="Patient Surname" className='patient-surname-input' />
                            <br />
                            <Form.Control type="varchar" placeholder="Medical Aid Nr" className='medicalaid-input' />
                            <Form.Control type="date" className='date'></Form.Control>

                            <Form.Select className='doctor-dropdown'>
                                <option>Select Doctor</option>
                                <option>Dr. Rox Clarke</option>
                                <option>Dr. Nicole Morgan</option>
                                <option>Dr. Leja Scheepers</option>
                            </Form.Select>
                            <div className='time-input'>
                                <Time />
                            </div>
                            <br></br>
                            <Button variant="primary" type="submit" className='add-new-appointment'>
                                add appointment
                            </Button>
                        </Form> */}

                <Form onSubmit={handleSubmit} className='add-patient-form'>
                    <Form.Control value={patient.name || ""} onChange={handleChange} name="name" type="text" placeholder="Patient Name" className='p-name-input' />
                    <br />
                    <Form.Control value={patient.surname || ""} onChange={handleChange} name="surname" type="text" placeholder="Patient Surname" className='p-surname-input' />
                    <br />
                    <Form.Control value={patient.medAidNum || ""} onChange={handleChange} name="medAidNum" type="number" placeholder="Medical Aid Nr" className='aid-input' />
                    <Form.Control value={patient.email || ""} onChange={handleChange} name="email" type="email" placeholder="Patient Email" className='p-email-input' />
                    <Form.Control value={patient.password || ""} onChange={handleChange} name="password" type="password" placeholder="Patient Password" className='p-pass' />
                    <Form.Control value={patient.age || ""} onChange={handleChange} name="age" type="number" placeholder="Patient Age" className='p-age' />
                    <Form.Control value={patient.genderId || ""} onChange={handleChange} name="genderId" type="text" placeholder="Patient Gender" className='p-gender' />
                    <Form.Control value={patient.phone || ""} onChange={handleChange} name="phone" type="tel" placeholder="Patient Phone Number" className='p-number-input' />

                    <br></br>
                    <Button variant="primary" type="submit" className='add-new-patient'>
                        SUBMIT
                    </Button>
                </Form>
            </div>

        </section >
    );
};

export default PatientPage;