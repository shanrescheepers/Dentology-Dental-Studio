
import React, { useEffect, useState } from 'react';
import { createPatient, getPatients, deletePatient, updatePatient } from '../http/patient';
import { Modal, Button } from 'react-bootstrap';
import '../css/patientPage.css';
import patientProfilePicturePlaceholder from '../assets/images/female1.jpeg';
import deleteIcon from '../assets/images/dlt-icon.svg'
import editIcon from '../assets/images/edit-icon.svg'
import historyIcon from '../assets/images/patient-history-icon.svg'

export function PatientPage() {
    const [showDelete, setShowDelete] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);

    const [patient, setPatient] = useState({});
    const [patients, setPatients] = useState([]);


    const [patientId, setPatientId] = useState(0);
    const [updatePatientData, setUpdatePatientData] = useState({});

    const handleDeleteClose = () => {
        deletePatient(patientId).then(() => {
            getPatients().then(response => {
                setPatients(response.data);
                setShowDelete(false);
                alert('Patient deleted!');
            })
        })
    }

    const handleUpdateClose = () => {
        patient.genderId = parseInt(patient.genderId);
        patient.medAidNum = parseInt(patient.medAidNum);
        patient.age = parseInt(patient.age);
        patient.patientId = parseInt(patient.patientId);

        if (validateUpdateForm()) {
            updatePatient(updatePatientData).then(() => {
                // kry nuwe patients van server af nadat patient geupdate is
                getPatients().then(response => {
                    setPatients(response.data);
                });

                alert('Patient updated!');
            })

            setShowUpdate(false);
        }
    }
    // LETTERLIK UIT NAME UIT GEHARDLOOP. patientId oorspronklik clash want dit is al geroep in die state. LOL. so nou is dit maar net 'id'
    const handleDeleteShow = (id) => {
        setPatientId(id);
        setShowDelete(true);
    };

    const handleUpdateShow = (updatePatientInfo) => {
        setUpdatePatientData(updatePatientInfo);
        setShowUpdate(true);
    };

    const validateAddForm = () => {
        var regPhone = /^\d{10}$/;
        var regAge = /^\d{1,}$/;
        var regEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/g;

        if (patient.name === "" || patient.name === undefined) {
            alert("Name cannot be empty");
            return false;
        }

        if (patient.surname === "" || patient.surname === undefined) {
            alert("Surname cannot be empty");
            return false;
        }

        if (patient.phone === "" || patient.phone === undefined) {
            alert("Phone cannot be empty");
            return false;
        }

        if (!regPhone.test(patient.phone)) {
            alert("Invalid phone number");
            return false;
        }

        if (patient.age === "" || patient.age === undefined) {
            alert("Age cannot be empty");
            return false;
        }

        if (!regAge.test(patient.age)) {
            alert("Invalid age");
            return false;
        }

        if (patient.genderId !== 1 && patient.genderId !== 2) {
            alert("Gender cannot be empty");
            return false;
        }

        if (patient.medAidNum === "" || patient.medAidNum === undefined) {
            alert("Medical Aid Number cannot be empty");
            return false;
        }

        if (patient.email === "" || patient.email === undefined) {
            alert("Email cannot be empty");
            return false;
        }

        if (!regEmail.test(patient.email)) {
            alert("Invalid email");
            return false;
        }

        return true;
    }

    const validateUpdateForm = () => {
        var regPhone = /^\d{10}$/;
        var regAge = /^\d{1,}$/;
        var regEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/g;

        if (updatePatientData.name === "" || updatePatientData.name === undefined) {
            alert("Name cannot be empty");
            return false;
        }

        if (updatePatientData.surname === "" || updatePatientData.surname === undefined) {
            alert("Surname cannot be empty");
            return false;
        }

        if (updatePatientData.phone === "" || updatePatientData.phone === undefined) {
            alert("Phone cannot be empty");
            return false;
        }

        if (!regPhone.test(updatePatientData.phone)) {
            alert("Invalid phone number");
            return false;
        }

        if (updatePatientData.age === "" || updatePatientData.age === undefined) {
            alert("Age cannot be empty");
            return false;
        }

        if (!regAge.test(updatePatientData.age)) {
            alert("Invalid age");
            return false;
        }

        if (updatePatientData.medAidNum === "" || updatePatientData.medAidNum === undefined) {
            alert("Medical Aid Number cannot be empty");
            return false;
        }

        if (updatePatientData.email === "" || updatePatientData.email === undefined) {
            alert("Email cannot be empty");
            return false;
        }

        if (!regEmail.test(updatePatientData.email)) {
            alert("Invalid email");
            return false;
        }

        return true;
    }

    useEffect(() => {
        // hier is patients wat terugkom
        getPatients().then(response => {
            setPatients(response.data);
        });
    }, [])


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPatient(values => ({ ...values, [name]: value }))
    }

    const handleUpdatePatientChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUpdatePatientData(values => ({ ...values, [name]: value }))
    }

    const getGender = (number) => {
        if (number === "1") {
            return "Female"
        } else {
            return "Male"
        }
    }

    //integrity constraint// 
    // op patient table en al die ander tables, gaan daar active kolomme moet wees. set activee na true/falase nie. Jy delete noit data nie en in die geval van n med prac, as n ander dr data sou nodig he vir dinge. POPI act?? fok dit obvs. History van past en present patients with ids. Dead and or alive
    const handleSubmit = (event) => {
        event.preventDefault();

        patient.genderId = parseInt(patient.genderId);

        patient.medAidNum = parseInt(patient.medAidNum);
        patient.age = parseInt(patient.age);

        if (validateAddForm()) {
            createPatient(patient).then(() => {
                alert("Patient created!");

                // Refer asb na doctor se set state wat geclear word na submit
                setPatient({});
                getPatients().then(response => {
                    setPatients(response.data);
                })
            });
            // Moet eers patient create voor waardes weg gevat word
            document.forms.addPatientForm.name.value = '';
            document.forms.addPatientForm.surname.value = '';
            document.forms.addPatientForm.phone.value = '';
            document.forms.addPatientForm.email.value = '';
            document.forms.addPatientForm.medAidNum.value = '';
            document.forms.addPatientForm.genderId.value = 'DEFAULT';
            document.forms.addPatientForm.age.value = '';

        }
    }


    return (
        <section className='patient-page'>
            <div className='patient-view'>
                <h1 className='title'>Existing patients</h1>
                <div className='patients-grid'>
                    {patients.map((data, idx) => (
                        // key word terug gestuur na die API toe, die key, verwys na die patient ID se nr. As DELETE gebruik word, is die specification makliker om die 'key idx' te delete.
                        <div key={data.patientId} className='patient-card'>
                            <img src={patientProfilePicturePlaceholder} alt="patient profile" className='patient-profile-picture' />
                            <h6 className='h6-patients'>{data.name} {data.surname}</h6>
                            <span className='card-text-patients'>{data.medAidNum}</span>
                            <span className='card-text-patients'>{getGender(data.genderId)}</span>
                            <span className='card-text-patients'>{data.age}</span>
                            <span className='card-text-patients'>{data.phone}</span>
                            <span className='card-text-patients'>{data.email}</span>
                            <div className='button-group'>
                                <img className='icon-button' onClick={() => handleUpdateShow(data)} src={editIcon} alt="icon" />
                                {/* Dis hoe ons onclick gebruik in react. React render die apge on load dit trigger die gewone manier van onClick (onClick="method()") */}
                                {/* https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render */}
                                <img className='icon-button' onClick={() => handleDeleteShow(data.patientId)} src={deleteIcon} alt="dlt-icon" />
                                <img className='icon-button' src={historyIcon} alt="icon" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='add-patient'>
                <h3 className='plus-title'>+Patient</h3>
                <span className='plus-patient-span'>Add a new patient to DDS</span>
                <form name='addPatientForm' className='form-grid' onSubmit={handleSubmit}>
                    <input onChange={handleChange} name='name' type='text' placeholder="Patient Name" className='patient-form-inputs' />
                    <input onChange={handleChange} name='surname' type='text' placeholder="Patient Surname" className='patient-form-inputs' />
                    <input onChange={handleChange} name='age' type='text' placeholder="Patient Age" className='patient-form-inputs' />
                    <select defaultValue={"DEFAULT"} onChange={handleChange} name='genderId' type='text' className='patient-form-inputs' >
                        <option value="DEFAULT" disabled >Gender</option>
                        <option value="1">Female</option>
                        <option value="2">Male</option>
                    </select>
                    <input onChange={handleChange} name='email' type='email' placeholder="Patient Email" className='patient-form-inputs' />
                    <input onChange={handleChange} name='phone' type='text' placeholder="Cell Number" className='patient-form-inputs' />
                    <input onChange={handleChange} name='medAidNum' type='text' placeholder="Medical Aid Number" className='patient-form-inputs' />

                    <button onClick={handleSubmit} type='submit' className='patient-form-inputs-add-btn'>Add Patient</button>
                </form>
            </div>


            <Modal show={showDelete} onHide={() => setShowDelete(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Patient?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you would like to delete this patient?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDelete(false)}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleDeleteClose}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showUpdate} onHide={() => setShowUpdate(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update {updatePatientData.name} {updatePatientData.surname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='form-grid'>
                        <input defaultValue={updatePatientData.name} onChange={handleUpdatePatientChange} name='name' type='text' placeholder={"Patient Name"} className='patient-form-inputs' />
                        <input defaultValue={updatePatientData.surname} onChange={handleUpdatePatientChange} name='surname' type='text' placeholder="Patient Surname" className='patient-form-inputs' />
                        <input defaultValue={updatePatientData.age} onChange={handleUpdatePatientChange} name='age' type='text' placeholder="Patient Age" className='patient-form-inputs' />
                        <select defaultValue={updatePatientData.genderId} onChange={handleUpdatePatientChange} name='genderId' type='text' className='patient-form-inputs' >
                            <option value="DEFAULT" disabled >Gender</option>
                            <option value="1">Female</option>
                            <option value="2">Male</option>
                        </select>
                        <input defaultValue={updatePatientData.email} onChange={handleUpdatePatientChange} name='email' type='email' placeholder="Patient Email" className='patient-form-inputs' />
                        <input defaultValue={updatePatientData.phone} onChange={handleUpdatePatientChange} name='phone' type='text' placeholder="Cell Number" className='patient-form-inputs' />
                        <input defaultValue={updatePatientData.medAidNum} onChange={handleUpdatePatientChange} name='medAidNum' type='text' placeholder="Medical Aid Number" className='patient-form-inputs' />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowUpdate(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleUpdateClose}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default PatientPage;