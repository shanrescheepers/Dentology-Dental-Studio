import '../css/patient.css';
import React from 'react';
import { Card, Button, ListGroup, ListGroupItem, Form } from 'react-bootstrap';


export function PatientPage() {
    return (
        <section>
            <div className='patient-page-main-dash'>


                <div className='patient-profiles'>
                    <div className='dr-1'>
                        <Card style={{ width: '18rem' }} className='p1'>
                            <Card.Img variant="top" className='ppfp1' />
                            <Card.Body className='card-body'>
                                <Card.Title>Shanre Scheepers</Card.Title>
                                <p className='spes'>
                                    12345678</p>
                                <hr></hr>

                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className='gender'>Female</ListGroupItem>
                                <ListGroupItem className='age'>Age: 26</ListGroupItem>
                                <ListGroupItem className='cell-no'>0827559178</ListGroupItem>
                                <ListGroupItem className='cell-no'>shanrescheepers@gmail.com</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='dr-2'>
                        <Card style={{ width: '18rem' }} className='p2'>
                            <Card.Img variant="top" className='ppfp2' />
                            <Card.Body className='card-body'>
                                <Card.Title>Jakobus Verster</Card.Title>
                                <p className='spes'>
                                    7652067</p>
                                <hr></hr>

                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className='gender'>Male</ListGroupItem>
                                <ListGroupItem className='age'>Age: 19</ListGroupItem>
                                <ListGroupItem className='cell-no'>0827669176</ListGroupItem>
                                <ListGroupItem className='cell-no'>franco@arrowhead.com</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='dr-3'>
                        <Card style={{ width: '18rem' }} className='p3'>
                            <Card.Img variant="top" className='ppfp3' />
                            <Card.Body className='card-body'>
                                <Card.Title>Muneeba Akbar</Card.Title>
                                <p className='spes'>
                                    20222123</p>
                                <hr></hr>

                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className='gender'>Female</ListGroupItem>
                                <ListGroupItem className='age'>Age: 29</ListGroupItem>
                                <ListGroupItem className='cell-no'>082456890</ListGroupItem>
                                <ListGroupItem className='cell-no'>muneebakbar@gmail.com</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='dr-3'>
                        <Card style={{ width: '18rem' }} className='p4'>
                            <Card.Img variant="top" className='ppfp4' />
                            <Card.Body className='card-body'>
                                <Card.Title>Emil Scheepers</Card.Title>
                                <p className='spes'>
                                    26083456</p>
                                <hr></hr>

                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className='gender'>Male</ListGroupItem>
                                <ListGroupItem className='age'>Age: 26</ListGroupItem>
                                <ListGroupItem className='cell-no'>082456890</ListGroupItem>
                                <ListGroupItem className='cell-no'>emilscheepers@gmail.com</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='dr-3'>
                        <Card style={{ width: '18rem' }} className='p5'>
                            <Card.Img variant="top" className='ppfp5' />
                            <Card.Body className='card-body'>
                                <Card.Title>Tersia Scheepers</Card.Title>
                                <p className='spes'>
                                    20222123</p>
                                <hr></hr>

                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className='gender'>Female</ListGroupItem>
                                <ListGroupItem className='age'>Age: 29</ListGroupItem>
                                <ListGroupItem className='cell-no'>082456890</ListGroupItem>
                                <ListGroupItem className='cell-no'>muneebakbar@gmail.com</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='dr-3'>
                        <Card style={{ width: '18rem' }} className='p6'>
                            <Card.Img variant="top" className='ppfp6' />
                            <Card.Body className='card-body'>
                                <Card.Title>Megan Viljoen</Card.Title>
                                <p className='spes'>
                                    20222123</p>
                                <hr></hr>

                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className='gender'>Female</ListGroupItem>
                                <ListGroupItem className='age'>Age: 29</ListGroupItem>
                                <ListGroupItem className='cell-no'>082456890</ListGroupItem>
                                <ListGroupItem className='cell-no'>muneebakbar@gmail.com</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='add-doctor-panel'>
                    <h2>Add A New Patient</h2>

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

                    <Form className='doctor-form'>
                        <Form.Control type="name" placeholder="Patient Name" className='doc-name-input' />
                        <br />
                        <Form.Control type="surname" placeholder="Patient Surname" className='doc-surname-input' />
                        <br />
                        <Form.Control type="varchar" placeholder="Medical Aid Nr" className='spes-input' />
                        <Form.Control type="email" placeholder="Patient Email" className='doc-email-input' />
                        <Form.Control type="text" placeholder="Patient Password" className='doc-pass' />
                        <Form.Control type="text" placeholder="Patient Age" className='doc-age' />
                        <Form.Control type="text" placeholder="Patient Gender" className='doc-gender' />
                        <Form.Control type="varchar" placeholder="Patient Phone Number" className='doc-number-input' />

                        <br></br>
                        <Button variant="primary" type="submit" className='add-new-doc'>
                            add doctor
                        </Button>
                    </Form>
                </div>
            </div>
        </section >
    );
};

export default PatientPage;