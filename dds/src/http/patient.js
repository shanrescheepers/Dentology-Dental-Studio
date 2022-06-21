import axios from 'axios';

export function getPatients() {
    return axios.get('http://localhost:8888/ddsapi/getPatient.php')
        .then(data => data)
}
// CREATE
export function createPatient(patient) {
    return axios.post('http://localhost:8888/ddsapi/createPatient.php', {
        // Wrapping - JSONd data wat gestuur word.
        name: patient.name,
        surname: patient.surname,
        age: patient.age,
        genderId: patient.genderId,
        phone: patient.phone,
        email: patient.email,
        medAidNum: patient.medAidNum,
        isActive: true
    }).then(data => data)
}
// DELETE
export function deletePatient(patientId) {
    return axios.post('http://localhost:8888/ddsapi/deletePatient.php', {
        // Wrapping - JSONd data wat gestuur word.
        patientId: patientId,
    }).then(data => data)
}

export function updatePatient(patient) {
    return axios.post('http://localhost:8888/ddsapi/updatePatient.php', {
        // Wrapping - JSONd data wat gestuur word.
        patientId: patient.patientId,
        name: patient.name,
        surname: patient.surname,
        age: patient.age,
        genderId: patient.genderId,
        phone: patient.phone,
        email: patient.email,
        medAidNum: patient.medAidNum,
        isActive: true
    }).then(data => data)
}