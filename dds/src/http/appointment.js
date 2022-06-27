import axios from 'axios';

export async function getAppointments(dateTimeFrom, dateTimeTo) {

    return await axios.get('http://localhost:8888/ddsapi/getAppointment.php')
        .then(data => data)
}

export async function createAppointment(appointment) {

    return await axios.post('http://localhost:8888/ddsapi/createAppointment.php', {
        dateTime: appointment.dateTime,
        docId: appointment.docId,
        recepId: appointment.recepId,
        isDone: false,
        patientId: appointment.patientId,
        reason: appointment.reason
    })
        .then(data => data)
}

export async function updateAppointment(appointment) {

    return await axios.post('http://localhost:8888/ddsapi/updateAppointment.php', {
        apptId: appointment.apptId,
        dateTime: appointment.dateTime,
        docId: appointment.docId,
        recepId: appointment.recepId,
        isDone: appointment.isDone,
        patientId: appointment.patientId,
        reason: appointment.reason
    })
        .then(data => data)
}

export async function deleteAppointment(appointmentId) {
    return await axios.post('http://localhost:8888/ddsapi/deleteAppointment.php', {
        // Wrapping - JSONd data wat gestuur word.
        apptId: appointmentId,
    }).then(data => data)
}
