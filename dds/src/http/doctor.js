import axios from 'axios';

export function getDoctors() {
    return axios.get('http://localhost:8888/ddsapi/getDoctor.php')
        .then(data => data)
}
// CREATE
export function createDoctor(doctor) {
    return axios.post('http://localhost:8888/ddsapi/createDoctor.php', {
        // Wrapping - JSONd data wat gestuur word.
        name: doctor.name,
        surname: doctor.surname,
        age: doctor.age,
        genderId: doctor.genderId,
        phone: doctor.phone,
        email: doctor.email,
        medAidNum: doctor.medAidNum,
        spesId: doctor.spesId,
        isActive: true
    }).then(data => data)
}
// DELETE
export function deleteDoctor(doctorId) {
    return axios.post('http://localhost:8888/ddsapi/deleteDoctor.php', {
        // Wrapping - JSONd data wat gestuur word.
        doctorId: doctorId,
    }).then(data => data)
}

export function updateDoctor(doctor) {
    return axios.post('http://localhost:8888/ddsapi/updateDoctor.php', {
        // Wrapping - JSONd data wat gestuur word.
        doctorId: doctor.doctorId,
        name: doctor.name,
        surname: doctor.surname,
        age: doctor.age,
        genderId: doctor.genderId,
        phone: doctor.phone,
        email: doctor.email,
        medAidNum: doctor.medAidNum,
        spesId: doctor.spesId,
        isActive: true
    }).then(data => data)
}