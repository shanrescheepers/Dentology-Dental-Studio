import React, { useEffect, useState } from 'react';
import Toggle from '../components/CustomToggleDropdown';
import DatePickerCalendar from '../components/DatePicker';
import DatePicker from "react-datepicker";
import { Modal, Button } from 'react-bootstrap';
import '../css/dashboard.scss';
import { getAppointments, deleteAppointment, createAppointment } from '../http/appointment';
import { getPatients } from '../http/patient';
import { getDoctors } from '../http/doctor';

export function Dashboard() {
    const [startCalDate, setStartCalDate] = useState(new Date());

    const [showDelete, setShowDelete] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [showCreate, setShowCreate] = useState(false);

    const [appointments, setAppointments] = useState({})
    const [appointment, setAppointment] = useState({})

    const [doctors, setDoctors] = useState({
        docs: []
    })
    const [patients, setPatients] = useState({
        pats: []
    })

    const [appointmentId, setAppointmentId] = useState(0);
    const [updateAppointmentData, setUpdateAppointmentData] = useState({});

    useEffect(() => {
        // hier is patients wat terugkom
        getAppointments(startDate(new Date()), endDate(new Date())).then(response => {
            setAppointments(response.data);
        });

        getPatients().then(response => {
            setPatients({
                pats: response.data
            })
        });

        getDoctors().then(response => {
            setDoctors({
                docs: response.data
            })
        })
    }, [])

    const handleDeleteClose = () => {
        deleteAppointment(appointmentId).then(() => {
            getAppointments().then(response => {
                setAppointments(response.data);
                setShowDelete(false);
                alert('Appointment deleted!');
            })
        })
    }

    const startDate = (date) => {
        let newDate = new Date(date);
        return newDate.setHours(24, 0, 0, 0);
    }

    const endDate = (date) => {
        let newDate = new Date(date);
        newDate.setHours(24, 0, 0, 0);
        return newDate.setDate(newDate.getDate() + 1);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAppointment(values => ({ ...values, [name]: value, dateTime: startCalDate }))
        console.log(appointment)
    }

    const handleCreateShow = () => {
        setShowCreate(true);
    };

    const handleCreateClose = () => {
        setShowCreate(false);

        appointment.docId = parseInt(appointment.docId);
        appointment.dateTime = appointment.dateTime.toISOString().slice(0, 19).replace('T', ' ');
        appointment.patientId = parseInt(appointment.patientId);
        appointment.isDone = true;

        createAppointment(appointment).then(x => console.log(x));

    };

    const handleUpdateShow = (updateAppointmentData) => {
        setUpdateAppointmentData(updateAppointmentData);
        setShowUpdate(true);
    };

    const handleDeleteShow = (id) => {
        setAppointmentId(id);
        setShowDelete(true);
    };

    return (
        <section>
            <div className='dashboard'>
                <div className='dashboard__content'>
                    <div className='dashboard__content__top'>
                        <h1>Dashboard</h1>
                        <div className='dashboard__content__header'>
                            <div className='dashboard__content__header__welcome'>
                                <h1 className='dashboard__content__header__welcome__title'>Welcome, X</h1>
                                <div className='dashboard__content__header__welcome__subtitle'>
                                    <h3>Have a nice day!</h3>
                                    <span>Image here</span>
                                </div>
                            </div>
                            <div className='dashboard__content__header__calendar'>
                                <DatePickerCalendar />
                            </div>
                        </div>
                    </div>
                    <div className='dashboard__content__table'>
                        <div className='dashboard__content__table__header'>
                            <h1>Date Time</h1>
                            <button onClick={() => handleCreateShow()}>Add Apt</button>
                        </div>
                        <div className='dashboard__content__table__content'>
                            <div className='dashboard__content__table__content__row'>
                                <span>Doctor</span>
                                <span>Patient</span>
                                <span>Time</span>
                                <span>Reason</span>
                            </div>
                            <div className='dashboard__content__table__content__row'>
                                <span>Rox Clarke</span>
                                <span>Franco Verster</span>
                                <span>9 AM</span>
                                <span>Zoom Whitening</span>
                                <div className='dashboard__content__table__content__actions'></div>
                            </div>
                            <div className='dashboard__content__table__content__row'>
                                <span>Rox Clarke</span>
                                <span>Franco Verster</span>
                                <span>9 AM</span>
                                <span>Zoom Whitening</span>
                                <div className='dashboard__content__table__content__actions'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dashboard__sideview'>
                    <div className='dashboard__sideview__profile'>
                        <span>Image here</span>
                        <span>N&Surname</span>
                        <span>Rank</span>
                        <button>Log Out</button>
                    </div>
                    <div className='dashboard__sideview__appointments'>
                        <div className='dashboard__sideview__appointments__item'>
                            <h1>7</h1>
                            <span>this week</span>
                        </div>
                        <div className='dashboard__sideview__appointments__item'>
                            <h1>7</h1>
                            <span>today</span>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showCreate} onHide={() => setShowCreate(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>New Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='form-grid'>
                        <DatePicker
                            selected={startCalDate}
                            onChange={(date) => setStartCalDate(date)}
                            locale="pt-BR"
                            showTimeSelect
                            timeFormat="p"
                            timeIntervals={15}
                            dateFormat="Pp"
                            inline
                        />
                        <input onChange={handleChange} name='reason' type='text' placeholder="Reason" className='doctor-form-inputs' />
                        <select defaultValue={"DEFAULT"} onChange={handleChange} name='docId' type='text' className='doctor-form-inputs' >
                            <option value="DEFAULT" disabled >Doctor</option>
                            {doctors.docs.map((doctor, idx) => (
                                <option key={doctor.doctorId} value={doctor.doctorId}>{doctor.name} {doctor.surname}</option>
                            ))}
                        </select>
                        <select defaultValue={"DEFAULT"} onChange={handleChange} name='patientId' type='text' className='doctor-form-inputs' >
                            <option value="DEFAULT" disabled >Patient</option>
                            {patients.pats.map((patient, idx) => (
                                <option key={patient.patientId} value={patient.patientId}>{patient.name} {patient.surname}</option>
                            ))}
                        </select>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCreate(false)}>
                        No
                    </Button>
                    <Button variant="primary" onClick={() => handleCreateClose()}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    )
}

export default Dashboard;