
import React, { useEffect, useState } from 'react';
import { createPatient, getPatients, deletePatient } from '../http/patient';
import '../css/patientPage.css';
import patientProfilePicturePlaceholder from '../assets/images/female1.jpeg';
import deleteIcon from '../assets/images/dlt-icon.svg'
import editIcon from '../assets/images/edit-icon.svg'
import historyIcon from '../assets/images/patient-history-icon.svg'

export function PatientPage() {

    const [patient, setPatient] = useState({});
    const [patients, setPatients] = useState([]);

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
        console.log(patient)
    }

    const getGender = (number) => {
        if (number === "1") {
            return "Female"
        } else {
            return "Male"
        }
    }

    const deleteChosenPatient = (patientId) => {
        deletePatient(patientId).then(() => {
            getPatients().then(response => {
                setPatients(response.data);
            })
        })

    }
    //integrity constraint// 
    // op patient table en al die ander tables, gaan daar active kolomme moet wees. set activee na true/falase nie. Jy delete noit data nie en in die geval van n med prac, as n ander dr data sou nodig he vir dinge. POPI act?? fok dit obvs. History van past en present patients with ids. Dead and or alive
    const handleSubmit = (event) => {
        event.preventDefault();

        if (patient.genderId === "Female") {
            patient.genderId = 1
        } else {
            patient.genderId = 2
        }

        patient.medAidNum = parseInt(patient.medAidNum);
        patient.age = parseInt(patient.age);

        createPatient(patient).then(() => {
            getPatients().then(response => {
                setPatients(response.data).then(x => console.log(x));
            })
        });
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
                            <span className='card-text-patients'>{data.patientId}</span>
                            <div className='button-group'>
                                <img className='icon-button' src={editIcon} alt="icon" />
                                {/* Dis hoe ons onclick gebruik in react. React render die apge on load dit trigger die gewone manier van onClick (onClick="method()") */}
                                {/* https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render */}
                                <img className='icon-button' onClick={() => deleteChosenPatient(data.patientId)} src={deleteIcon} alt="dlt-icon" />
                                <img className='icon-button' src={historyIcon} alt="icon" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='add-patient'>
                <h3 className='plus-title'>+Patient</h3>
                <span className='plus-patient-span'>Add a new patient to DDS</span>
                <form className='form-grid' onSubmit={handleSubmit}>
                    <input onChange={handleChange} name='name' type='text' placeholder="Patient Name" className='patient-form-inputs' />
                    <input onChange={handleChange} name='surname' type='text' placeholder="Patient Surname" className='patient-form-inputs' />
                    <input onChange={handleChange} name='age' type='text' placeholder="Patient Age" className='patient-form-inputs' />
                    <select defaultValue={"DEFAULT"} onChange={handleChange} name='genderId' type='text' className='patient-form-inputs' >
                        <option value="DEFAULT" disabled >Gender</option>
                        <option value="1">Female</option>
                        <option value="2">Male</option>
                    </select>
                    <input onChange={handleChange} name='email' type='email' placeholder="Patient Email" className='patient-form-inputs' />
                    <input onChange={handleChange} name='password' type='text' placeholder="Patient Password" className='patient-form-inputs' />
                    <input onChange={handleChange} name='phone' type='text' placeholder="Cell Number" className='patient-form-inputs' />
                    <input onChange={handleChange} name='medAidNum' type='text' placeholder="Medical Aid Number" className='patient-form-inputs' />

                    <button onClick={handleSubmit} type='submit' className='patient-form-inputs-add-btn'>Add Patient</button>
                </form>
            </div>
        </section>
    );
};

export default PatientPage;