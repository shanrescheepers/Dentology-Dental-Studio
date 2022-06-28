import React, { useEffect, useState } from 'react';
import DatePickerCalendar from '../components/DatePicker';
import DatePicker from "react-datepicker";
import { Modal, Button } from 'react-bootstrap';
import '../css/dashboard.scss';
import { getAppointments, deleteAppointment, createAppointment } from '../http/appointment';
import { getPatients } from '../http/patient';
import { getDoctors } from '../http/doctor';
import { useNavigate } from "react-router-dom";
import ToDoList from '../components/ToDo';

export function Dashboard({ childToParent }) {
    let navigate = useNavigate();
    const [startCalDate, setStartCalDate] = useState(new Date());
    const [startBigCalDate, setStartBigCalDate] = useState(new Date());
    const [loggedIn, setLoggedIn] = useState({});

    const [showDelete, setShowDelete] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [showCreate, setShowCreate] = useState(false);

    const [appointments, setAppointments] = useState({
        appts: []
    })
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
        const data = {
            loggedIn: localStorage.getItem('loggedIn'),
            rank: localStorage.getItem('rankId')
        };
        console.log(data);
        childToParent(data)

        // hier is patients wat terugkom
        getPatients().then(response => {
            setPatients({
                pats: response.data
            })

            getDoctors().then(response => {
                setDoctors({
                    docs: response.data
                })

                getAppointments().then(response => {
                    let theDatesAppts = response.data.filter(appt =>
                        convertToDate(appt.dateTime).getTime() <= endDate(startBigCalDate) && convertToDate(appt.dateTime).getTime() >= startDate(startBigCalDate));
                    setAppointments({
                        appts: theDatesAppts
                    });
                });
            })
        });
    }, [])

    const handleDeleteClose = () => {
        deleteAppointment(appointmentId).then(() => {
            getAppointments().then(response => {
                let theDatesAppts = response.data.filter(appt =>
                    convertToDate(appt.dateTime).getTime() <= endDate(startBigCalDate) && convertToDate(appt.dateTime).getTime() >= startDate(startBigCalDate));
                setAppointments({
                    appts: theDatesAppts
                });

                setShowDelete(false);
                alert('Appointment deleted!');
            });
        })
    }

    const handleUpdateClose = () => {
        deleteAppointment(appointmentId).then(() => {
            getAppointments().then(response => {
                let theDatesAppts = response.data.filter(appt =>
                    convertToDate(appt.dateTime).getTime() <= endDate(startBigCalDate) && convertToDate(appt.dateTime).getTime() >= startDate(startBigCalDate));
                setAppointments({
                    appts: theDatesAppts
                });

                setShowUpdate(false);
                alert('Appointment marked as done!');
            });
        })
    }

    const startDate = (date) => {
        let newDate = new Date(date);
        newDate.setHours(24, 0, 0, 0);
        newDate.setDate(newDate.getDate() - 1)

        return newDate.getTime();
    }

    const endDate = (date) => {
        let newDate = new Date(date);
        newDate.setHours(24, 0, 0, 0);
        newDate.setDate(newDate.getDate())
        return newDate.getTime();
    }

    const getDoctor = (id) => {
        let doctor = doctors.docs.find(doc => doc.doctorId === id.toString());
        return `${doctor?.name} ${doctor?.surname}`
    }

    const getPatient = (id) => {
        let patient = patients.pats.find(doc => doc.patientId === id.toString());
        return `${patient.name} ${patient.surname}`
    }

    const convertToTime = (sqlDate) => {
        var covertedDate = new Date(Date.parse(sqlDate.replace(/[-]/g, '/')));
        covertedDate.setHours(covertedDate.getHours() + 2);

        return covertedDate.toLocaleTimeString();
    }

    const convertToDate = (sqlDate) => {
        var covertedDate = new Date(Date.parse(sqlDate.replace(/[-]/g, '/')));

        return covertedDate;
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAppointment(values => ({ ...values, [name]: value, dateTime: startCalDate }))
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

        createAppointment(appointment).then(() => {
            getAppointments().then(response => {
                let theDatesAppts = response.data.filter(appt =>
                    convertToDate(appt.dateTime).getTime() <= endDate(startBigCalDate) && convertToDate(appt.dateTime).getTime() >= startDate(startBigCalDate));
                setAppointments({
                    appts: theDatesAppts
                });
            });

            setStartCalDate(new Date());
            setAppointment({
                appts: []
            });
        });

    };

    const handleUpdateShow = (id) => {
        setAppointmentId(id);
        setShowUpdate(true);
    };

    const handleDeleteShow = (id) => {
        setAppointmentId(id);
        setShowDelete(true);
    };

    const getRank = (number) => {
        if (number === "1") {
            return "Head"
        } else {
            return "Assistant";
        }
    }

    const logout = () => {
        navigate("/login", { replace: true });
        window.location.reload()
        localStorage.clear();

    }

    return (
        <section>
            <div className='dashboard'>
                <div className='dashboard__content'>
                    <div className='dashboard__content__top'>
                        <h1 className='h1'>Dashboard</h1>
                        <div className='dashboard__content__header'>
                            <div className='dashboard__content__header__welcome'>
                                <h1 className='dashboard__content__header__welcome__title'>Welcome, {localStorage.getItem('name')}</h1>
                                <div className='dashboard__content__header__welcome__subtitle'>
                                    <h3>Have a nice day!</h3>
                                    <div className='dashboard__content__header__welcome__subtitle__image'></div>
                                </div>

                            </div>
                            <div className='dashboard__content__header__calendar'>
                                <DatePicker
                                    selected={startBigCalDate}
                                    onChange={(date) => {
                                        setStartBigCalDate(date)
                                        getAppointments().then(response => {
                                            let theDatesAppts = response.data.filter(appt =>
                                                convertToDate(appt.dateTime).getTime() <= endDate(startBigCalDate) && convertToDate(appt.dateTime).getTime() >= startDate(startBigCalDate));
                                            setAppointments({
                                                appts: theDatesAppts
                                            });
                                        });

                                    }}
                                    locale="pt-BR"
                                    dateFormat="Pp"
                                    inline
                                />
                            </div>
                        </div>
                    </div>
                    <div className='dashboard__content__table'>
                        <div className='dashboard__content__table__header'>
                            <h1>{startBigCalDate.toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                            })}</h1>
                            <button onClick={() => handleCreateShow()} style={{ backgroundColor: "#8D8CF2", borderRadius: "40px", height: "40px", alignContent: "center", width: "170px", border: "1px solid #ffff", fontSize: "16px", color: "#ffff" }}>Add Appointment <span style={{ color: "#ffff", fontSize: "20px", padding: "6px" }}>+</span></button>
                        </div>
                        <div className='dashboard__content__table__content'>
                            <div className='dashboard__content__table__content__row'>
                                <span>Doctor</span>
                                <span>Patient</span>
                                <span>Time</span>
                                <span>Reason</span>
                            </div>
                            {appointments.appts.map((appt, idx) => (
                                <div key={appt.apptId} className='dashboard__content__table__content__row'>
                                    <span>{getDoctor(appt.docId)}</span>
                                    <span>{getPatient(appt.patientId)}</span>
                                    <span>{convertToTime(appt.dateTime)}</span>
                                    <span>{appt.reason}</span>
                                    <div className='dashboard__content__table__content__actions'>
                                        <button onClick={() => handleUpdateShow(appt.apptId)}>✓</button>
                                        <button onClick={() => handleDeleteShow(appt.apptId)}>✕</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='dashboard__sideview'>
                    <div className='dashboard__sideview__profile'>
                        <span className='dashboard__sideview__profile'>{localStorage.getItem('name')} {localStorage.getItem('surname')}</span>
                        <span>{getRank(localStorage.getItem('rankId'))}</span>
                        <span className='dashboard__sideview__profile__image'></span>
                        <button onClick={() => logout()} style={{ color: "#2b2b2b", padding: "6px", borderRadius: "20px", width: "100px" }}>Log Out</button>
                    </div>
                    <div className='dashboard__sideview__appointments'>
                        <div className='dashboard__sideview__appointments__todo'>
                            <ToDoList />
                        </div>
                        {/* <div className='dashboard__sideview__appointments__item'>

                        </div> */}
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
                            onChange={(date) => {
                                setStartCalDate(date)
                            }}
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

            <Modal show={showDelete} onHide={() => setShowDelete(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Appointment?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you would like to delete this appointment?</Modal.Body>
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
                    <Modal.Title>Mark Appointment?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you would like to mark this appointment as done?</Modal.Body>
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
    )
}

export default Dashboard;