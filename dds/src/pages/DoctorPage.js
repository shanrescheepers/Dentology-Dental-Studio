import React from 'react';
import { Card, Button, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
import SideNav from '../components/SideNav';


export function DoctorPage() {
    return (
        <section>
            <div className='doctor-page-main-dash'>

                <div className='add-doctor-panel'>
                    <svg className='illustration-doc'></svg>
                    <h3 className='doctor-h2'>Add Doctor</h3>
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
                <div className='doctor-profiles'>
                    <div className='dr-1'>
                        <Card style={{ width: '18rem' }} className='doctor1'>
                            <Card.Img variant="top" className='doctor1-pfp' />
                            <h3>Dr Leja Scheepers</h3>
                            <Card.Body className='card-body'>

                                <p className='spes'>
                                    Restorative Aesthetic & Cosmetic Dentistry</p>
                                <br></br>
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
                        <Card className='doctor2'>
                            <Card.Img variant="top" className='doctor2-pfp' />
                            <Card.Body className='card-body'>
                                <h3>Dr Nicole Morgan</h3>
                                <p className='spes'>
                                    Restorative Dentistry</p>
                                <br></br>
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
                                <h3>Dr Rox Clarke</h3>
                                <p className='spes'>
                                    Dental Assistant</p>
                                <br></br>
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

            </div>
        </section >
    );
};

export default DoctorPage;