import axios from 'axios';

export async function getDoctors() {
    return await axios.get('http://localhost:8888/ddsapi/getDoctor.php')
        .then(data => data)
}
// CREATE
export async function createDoctor(doctor) {
    return await axios.post('http://localhost:8888/ddsapi/createDoctor.php', {
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
export async function deleteDoctor(doctorId) {
    return await axios.post('http://localhost:8888/ddsapi/deleteDoctor.php', {
        // Wrapping - JSONd data wat gestuur word.
        doctorId: doctorId,
    }).then(data => data)
}

export async function updateDoctor(doctor) {
    return await axios.post('http://localhost:8888/ddsapi/updateDoctor.php', {
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