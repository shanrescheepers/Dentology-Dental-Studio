
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { createPatient } from '../http/patient';
import '../css/patientPage.css'

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
        <section className='patient-page'>
            <div className='patient-view'>
                <h1>Existing patients</h1>
                <div className='patients-grid'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='add-patient'>

            </div>
        </section>
    );
};

export default PatientPage;