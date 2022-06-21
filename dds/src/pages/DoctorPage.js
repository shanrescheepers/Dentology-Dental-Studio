import React, { useEffect, useState } from 'react';
import { createDoctor, deleteDoctor, getDoctors, updateDoctor } from '../http/doctor';
import { Modal, Button } from 'react-bootstrap';
import '../css/doctorPage.css';
import patientProfilePicturePlaceholder from '../assets/images/female1.jpeg';
import deleteIcon from '../assets/images/dlt-icon.svg'
import editIcon from '../assets/images/edit-icon.svg'



export function DoctorPage() {
    const [showDelete, setShowDelete] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);

    const [doctor, setDoctor] = useState({});
    const [doctors, setDoctors] = useState([]);


    const [doctorId, setDoctorId] = useState(0);
    const [updateDoctorData, setUpdateDoctorData] = useState({});

    const handleDeleteClose = () => {
        deleteDoctor(doctorId).then(() => {
            getDoctors().then(response => {
                setDoctors(response.data);
                setShowDelete(false);
                alert('Doctor deleted!');
            })
        })
    }

    const handleUpdateClose = () => {
        doctor.genderId = parseInt(doctor.genderId);
        doctor.spesId = parseInt(doctor.spesId);
        doctor.age = parseInt(doctor.age);
        doctor.doctorId = parseInt(doctor.doctorId);

        if (validateUpdateForm()) {
            updateDoctor(updateDoctorData).then(() => {
                // kry nuwe patients van server af nadat patient geupdate is
                getDoctors().then(response => {
                    setDoctors(response.data);
                });

                alert('Doctor updated!');
            })

            setShowUpdate(false);
        }
    }
    // LETTERLIK UIT NAME UIT GEHARDLOOP. patientId oorspronklik clash want dit is al geroep in die state. LOL. so nou is dit maar net 'id'
    const handleDeleteShow = (id) => {
        setDoctorId(id);
        setShowDelete(true);
    };

    const handleUpdateShow = (updateDoctorInfo) => {
        setUpdateDoctorData(updateDoctorInfo);
        setShowUpdate(true);
    };

    const validateAddForm = () => {
        var regPhone = /^\d{10}$/;
        var regAge = /^\d{1,}$/;
        var regEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/g;
        // doctor is n staaaaaate

        if (doctor.name === "" || doctor.name === undefined) {
            alert("Name cannot be empty");
            return false;
        }

        if (doctor.surname === "" || doctor.surname === undefined) {
            alert("Surname cannot be empty");
            return false;
        }

        if (doctor.phone === "" || doctor.phone === undefined) {
            alert("Phone cannot be empty");
            return false;
        }

        if (!regPhone.test(doctor.phone)) {
            alert("Invalid phone number");
            return false;
        }

        if (doctor.age === "" || doctor.age === undefined) {
            alert("Age cannot be empty");
            return false;
        }

        if (!regAge.test(doctor.age)) {
            alert("Invalid age");
            return false;
        }

        if (doctor.genderId !== 1 && doctor.genderId !== 2) {
            alert("Gender cannot be empty");
            return false;
        }

        if (doctor.spesId !== 1 && doctor.spesId !== 2 && doctor.spesId !== 3) {
            alert("Specialisation cannot be empty");
            return false;
        }

        if (doctor.email === "" || doctor.email === undefined) {
            alert("Email cannot be empty");
            return false;
        }

        if (!regEmail.test(doctor.email)) {
            alert("Invalid email");
            return false;
        }

        return true;
    }

    const validateUpdateForm = () => {
        var regPhone = /^\d{10}$/;
        var regAge = /^\d{1,}$/;
        var regEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/g;

        if (updateDoctorData.name === "" || updateDoctorData.name === undefined) {
            alert("Name cannot be empty");
            return false;
        }

        if (updateDoctorData.surname === "" || updateDoctorData.surname === undefined) {
            alert("Surname cannot be empty");
            return false;
        }

        if (updateDoctorData.phone === "" || updateDoctorData.phone === undefined) {
            alert("Phone cannot be empty");
            return false;
        }

        if (!regPhone.test(updateDoctorData.phone)) {
            alert("Invalid phone number");
            return false;
        }

        if (updateDoctorData.age === "" || updateDoctorData.age === undefined) {
            alert("Age cannot be empty");
            return false;
        }

        if (!regAge.test(updateDoctorData.age)) {
            alert("Invalid age");
            return false;
        }

        if (updateDoctorData.email === "" || updateDoctorData.email === undefined) {
            alert("Email cannot be empty");
            return false;
        }

        if (!regEmail.test(updateDoctorData.email)) {
            alert("Invalid email");
            return false;
        }

        return true;
    }

    useEffect(() => {
        // hier is patients wat terugkom
        getDoctors().then(response => {
            setDoctors(response.data);
        });
    }, [])


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDoctor(values => ({ ...values, [name]: value }))
    }

    const handleUpdateDoctorChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUpdateDoctorData(values => ({ ...values, [name]: value }))
    }

    const getGender = (number) => {
        if (number === "1") {
            return "Female"
        } else {
            return "Male"
        }
    }

    const getSpes = (number) => {
        if (number === "1") {
            return "Restorative Dentistry"
        } else if (number === "2") {
            return "Oral Hygienist"
        } else {
            return "Cosmetic Dentistry";
        }
    }

    //integrity constraint// 
    // op patient table en al die ander tables, gaan daar active kolomme moet wees. set activee na true/falase nie. Jy delete noit data nie en in die geval van n med prac, as n ander dr data sou nodig he vir dinge. POPI act?? fok dit obvs. History van past en present patients with ids. Dead and or alive
    const handleSubmit = (event) => {
        event.preventDefault();

        doctor.genderId = parseInt(doctor.genderId);

        doctor.spesId = parseInt(doctor.spesId);
        doctor.age = parseInt(doctor.age);

        if (validateAddForm()) {
            createDoctor(doctor).then(() => {
                alert("Doctor created!");

                // FORM WIU NUE CLEAR NA SUBMIT NIE:
                // doctor state na clear doctor state na submit. doctor->setDoc, fok
                setDoctor({});

                getDoctors().then(response => {
                    setDoctors(response.data);
                })
            });
            // Moet eers patient create voor waardes weg gevat word
            // hier word form values geset
            // form is leeg
            document.forms.addDoctorForm.name.value = '';
            document.forms.addDoctorForm.surname.value = '';
            document.forms.addDoctorForm.phone.value = '';
            document.forms.addDoctorForm.email.value = '';
            document.forms.addDoctorForm.spesId.value = 'DEFAULT';
            document.forms.addDoctorForm.genderId.value = 'DEFAULT';
            document.forms.addDoctorForm.age.value = '';

        }
    }

    return (
        <section className='doctor-page'>
            <div className='doctor-view'>
                <h1 className='title'>Existing doctors</h1>
                <div className='doctors-grid'>
                    {doctors.map((data, idx) => (
                        // key word terug gestuur na die API toe, die key, verwys na die patient ID se nr. As DELETE gebruik word, is die specification makliker om die 'key idx' te delete.
                        <div key={data.doctorId} className='doctor-card'>
                            <img src={patientProfilePicturePlaceholder} alt="doctor profile" className='doctor-profile-picture' />
                            <h6 className='h6-doctors'>{data.name} {data.surname}</h6>
                            <span className='card-text-doctors'>{getSpes(data.spesId)}</span>
                            <span className='card-text-doctors'>{getGender(data.genderId)}</span>
                            <span className='card-text-doctors'>{data.age}</span>
                            <span className='card-text-doctors'>{data.phone}</span>
                            <span className='card-text-doctors'>{data.email}</span>
                            <div className='button-group'>
                                <img className='icon-button' onClick={() => handleUpdateShow(data)} src={editIcon} alt="icon" />
                                {/* Dis hoe ons onclick gebruik in react. React render die apge on load dit trigger die gewone manier van onClick (onClick="method()") */}
                                {/* https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render */}
                                <img className='icon-button' onClick={() => handleDeleteShow(data.doctorId)} src={deleteIcon} alt="dlt-icon" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='add-doctor'>
                <h3 className='plus-title'>+Doctor</h3>
                <span className='plus-doctor-span'>Add a new doctor to DDS</span>
                <form name='addDoctorForm' className='form-grid' onSubmit={handleSubmit}>
                    <input onChange={handleChange} name='name' type='text' placeholder="Doctor Name" className='doctor-form-inputs' />
                    <input onChange={handleChange} name='surname' type='text' placeholder="Doctor Surname" className='doctor-form-inputs' />
                    <input onChange={handleChange} name='age' type='text' placeholder="Doctor Age" className='doctor-form-inputs' />
                    <select defaultValue={"DEFAULT"} onChange={handleChange} name='genderId' type='text' className='doctor-form-inputs' >
                        <option value="DEFAULT" disabled >Gender</option>
                        <option value="1">Female</option>
                        <option value="2">Male</option>
                    </select>
                    <input onChange={handleChange} name='email' type='email' placeholder="Doctor Email" className='doctor-form-inputs' />
                    <input onChange={handleChange} name='phone' type='text' placeholder="Cell Number" className='doctor-form-inputs' />
                    <select defaultValue={"DEFAULT"} onChange={handleChange} name='spesId' type='text' className='doctor-form-inputs' >
                        <option value="DEFAULT" disabled >Specialisation</option>
                        <option value="1">Restorative Dentistry</option>
                        <option value="2">Oral Hygienist</option>
                        <option value="3">Cosmetic Dentistry</option>
                    </select>

                    <button onClick={handleSubmit} type='submit' className='doctor-form-inputs-add-btn'>Add Doctor</button>
                </form>
            </div>


            <Modal show={showDelete} onHide={() => setShowDelete(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Doctor?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you would like to delete this doctor?</Modal.Body>
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
                    <Modal.Title>Update {updateDoctorData.name} {updateDoctorData.surname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='form-grid'>
                        <input defaultValue={updateDoctorData.name} onChange={handleUpdateDoctorChange} name='name' type='text' placeholder={"Doctor Name"} className='doctor-form-inputs' />
                        <input defaultValue={updateDoctorData.surname} onChange={handleUpdateDoctorChange} name='surname' type='text' placeholder="Doctor Surname" className='doctor-form-inputs' />
                        <input defaultValue={updateDoctorData.age} onChange={handleUpdateDoctorChange} name='age' type='text' placeholder="Doctor Age" className='doctor-form-inputs' />
                        <select defaultValue={updateDoctorData.genderId} onChange={handleUpdateDoctorChange} name='genderId' type='text' className='doctor-form-inputs' >
                            <option value="DEFAULT" disabled >Gender</option>
                            <option value="1">Female</option>
                            <option value="2">Male</option>
                        </select>
                        <input defaultValue={updateDoctorData.email} onChange={handleUpdateDoctorChange} name='email' type='email' placeholder="Doctor Email" className='doctor-form-inputs' />
                        <input defaultValue={updateDoctorData.phone} onChange={handleUpdateDoctorChange} name='phone' type='text' placeholder="Cell Number" className='doctor-form-inputs' />
                        <select defaultValue={"DEFAULT"} onChange={handleUpdateDoctorChange} name='spesId' type='text' className='doctor-form-inputs' >
                            <option value="DEFAULT" disabled >Specialisation</option>
                            <option value="1">Restorative Dentistry</option>
                            <option value="2">Oral Hygienist</option>
                            <option value="3">Cosmetic Dentistry</option>
                        </select>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowUpdate(false)}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleUpdateClose}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default DoctorPage;