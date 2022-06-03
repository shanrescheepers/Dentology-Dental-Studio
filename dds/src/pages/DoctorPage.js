import '../css/doctor.css';
import React from 'react';
import { Card, Button, ListGroup, ListGroupItem, Form } from 'react-bootstrap';


export function DoctorPage() {
    return (
        <section>
            <div className='doctor-page-main-dash'>


                <div className='doctor-profiles'>
                    <div className='dr-1'>
                        <Card style={{ width: '18rem' }} className='doctor1'>
                            <Card.Img variant="top" className='doctor1-pfp' />
                            <Card.Body className='card-body'>
                                <Card.Title>Dr Leja Scheepers</Card.Title>
                                <p className='spes'>
                                    Restorative Aesthetic & Cosmetic Dentistry</p>
                                <hr></hr>
                                <Card.Text>
                                    "Changing a smile can change a life!"
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className='gender'>Female</ListGroupItem>
                                <ListGroupItem className='age'>Age: 34</ListGroupItem>
                                <ListGroupItem className='cell-no'>0828026312</ListGroupItem>
                                <ListGroupItem className='cell-no'>leja@dds.com</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='dr-2'>
                        <Card style={{ width: '18rem' }} className='doctor2'>
                            <Card.Img variant="top" className='doctor2-pfp' />
                            <Card.Body className='card-body'>
                                <Card.Title>Dr Nicole Morgan</Card.Title>
                                <p className='spes'>
                                    Restorative Dentistry</p>
                                <hr></hr>
                                <Card.Text>
                                    "Bringing confidence to people one smile at a time.<br />Changing how people experience dentistry"
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className='gender'>Female</ListGroupItem>
                                <ListGroupItem className='age'>Age: 32</ListGroupItem>
                                <ListGroupItem className='cell-no'>083298364</ListGroupItem>
                                <ListGroupItem className='cell-no'>nicole@dds.com</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='dr-3'>
                        <Card style={{ width: '18rem' }} className='doctor3'>
                            <Card.Img variant="top" className='doctor3-pfp' />
                            <Card.Body className='card-body'>
                                <Card.Title>Dr Rox Clarke</Card.Title>
                                <p className='spes'>
                                    Dental Assistant</p>
                                <hr></hr>
                                <Card.Text>
                                    "Dentistry found me, in return I love helping<br></br> people find their inner beauty with their smile"
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className='gender'>Female</ListGroupItem>
                                <ListGroupItem className='age'>Age: 34</ListGroupItem>
                                <ListGroupItem className='cell-no'>0827889787</ListGroupItem>
                                <ListGroupItem className='cell-no'>rox@dds.com</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='add-doctor-panel'>
                    <svg className='illustration-doc'></svg>
                    <h2>Add a Doctor</h2>
                    <Form className='doctor-form'>
                        <Form.Control type="name" placeholder="Doctor Name" className='doc-name-input' />
                        <br />
                        <Form.Control type="surname" placeholder="Doctor Surname" className='doc-surname-input' />
                        <br />
                        <Form.Control type="varchar" placeholder="Specialisation" className='spes-input' />
                        <Form.Control type="email" placeholder="Doctor Email" className='doc-email-input' />
                        <Form.Control type="text" placeholder="Doctor Password" className='doc-pass' />
                        <Form.Control type="text" placeholder="Doctor Age" className='doc-age' />
                        <Form.Control type="text" placeholder="Doctor Gender" className='doc-gender' />
                        <Form.Control type="varchar" placeholder="Doctor Phone Number" className='doc-number-input' />

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

export default DoctorPage;