
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
        <section className='patient-page'>
            <div className='patient-view'>
                <h1>Existing patients</h1>
            </div>
            <div className='add-patient'>

            </div>
        </section>
    );
};

export default PatientPage;