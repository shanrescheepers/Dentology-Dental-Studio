
import React, { useEffect, useState } from 'react';
import { createPatient, getPatients, deletePatient } from '../http/patient';
import '../css/patientPage.css';
import patientProfilePicturePlaceholder from '../assets/images/female1.jpeg';
import dashIcon from '../assets/images/dash-icon.svg'


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
                            <h6>{data.name} {data.surname}</h6>
                            <span>{data.medAidNum}</span>
                            <span>{getGender(data.genderId)}</span>
                            <span>{data.age}</span>
                            <span>{data.phone}</span>
                            <span>{data.email}</span>
                            <span>{data.patientId}</span>
                            <div className='button-group'>
                                <img className='icon-button' src={dashIcon} alt="icon" />
                                {/* Dis hoe ons onclick gebruik in react. React render die apge on load dit trigger die gewone manier van onClick (onClick="method()") */}
                                {/* https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render */}
                                <img className='icon-button' onClick={() => deleteChosenPatient(data.patientId)} src={dashIcon} alt="dlt-icon" />
                                <img className='icon-button' src={dashIcon} alt="icon" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='add-patient'>
                <h3 className='plus-title'>+Patient</h3>
                <form className='form-grid' onSubmit={handleSubmit}>
                    <input onChange={handleChange} name='name' type='text' placeholder="Patient Name" />
                    <input onChange={handleChange} name='surname' type='text' placeholder="Patient Surname" />
                    <input onChange={handleChange} name='age' type='text' placeholder="Patient Age" />
                    <select defaultValue={"DEFAULT"} onChange={handleChange} name='genderId' type='text'>
                        <option value="DEFAULT" disabled>Gender</option>
                        <option value="1">Female</option>
                        <option value="2">Male</option>
                    </select>
                    <input onChange={handleChange} name='email' type='email' placeholder="Patient Email" />
                    <input onChange={handleChange} name='password' type='text' placeholder="Patient Password ???" />
                    <input onChange={handleChange} name='phone' type='text' placeholder="PHONE NUMBER" />
                    <input onChange={handleChange} name='medAidNum' type='text' placeholder="Med Aid Number" />

                    <button onClick={handleSubmit} type='submit'>Add</button>
                </form>
            </div>
        </section>
    );
};

export default PatientPage;