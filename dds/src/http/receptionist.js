import axios from 'axios';

export function getReceptionists() {
    return axios.get('http://localhost:8888/ddsapi/getReceptionists.php')
        .then(data => data)
}
// CREATE
export function createReceptionist(receptionist) {
    return axios.post('http://localhost:8888/ddsapi/createReceptionist.php', {
        // Wrapping - JSONd data wat gestuur word.
        name: receptionist.name,
        surname: receptionist.surname,
        age: receptionist.age,
        genderId: receptionist.genderId,
        phone: receptionist.phone,
        email: receptionist.email,
        rankId: receptionist.rankId,
        password: receptionist.password,
        isActive: true
    }).then(data => data)
}
// DELETE
export function deleteReceptionist(receptionistId) {
    return axios.post('http://localhost:8888/ddsapi/deleteReceptionist.php', {
        // Wrapping - JSONd data wat gestuur word.
        recepId: receptionistId,
    }).then(data => data)
}

export function updateReceptionist(receptionist) {
    return axios.post('http://localhost:8888/ddsapi/updateReceptionist.php', {
        // Wrapping - JSONd data wat gestuur word.
        recepId: receptionist.recepId,
        name: receptionist.name,
        surname: receptionist.surname,
        age: receptionist.age,
        genderId: receptionist.genderId,
        phone: receptionist.phone,
        email: receptionist.email,
        rankId: receptionist.rankId,
        password: receptionist.password,
        isActive: true
    }).then(data => data)
}