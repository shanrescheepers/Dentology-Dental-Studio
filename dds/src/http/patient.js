import axios from 'axios';

export function getPatients() {
    return axios.get('http://localhost:8888/ddsapi/getPatient.php')
        .then(data => data)
}
// CREATE
export function createPatient(patient) {
    console.log(patient);
    return axios.post('http://localhost:8888/ddsapi/createPatient.php', {
        // Wrapping - JSONd data wat gestuur word.
        name: patient.name,
        surname: patient.surname,
        age: patient.age,
        genderId: patient.genderId,
        phone: patient.phone,
        email: patient.email,
        password: patient.password,
        medAidNum: patient.medAidNum
    }, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "*",
        }
    }).then(data => data)
}
// DELETE
export function deletePatient(patientId) {
    return axios.post('http://localhost:8888/ddsapi/deletePatient.php', {
        // Wrapping - JSONd data wat gestuur word.
        patientId: patientId,
    }, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "*",
        }
    }).then(data => data)
}