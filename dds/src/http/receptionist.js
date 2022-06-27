import axios from 'axios';

export async function getReceptionists() {
    return await axios.get('http://localhost:8888/ddsapi/getReceptionists.php')
        .then(data => data)
}
// CREATE
export async function createReceptionist(receptionist) {
    return await axios.post('http://localhost:8888/ddsapi/createReceptionist.php', {
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
export async function deleteReceptionist(receptionistId) {
    return await axios.post('http://localhost:8888/ddsapi/deleteReceptionist.php', {
        // Wrapping - JSONd data wat gestuur word.
        recepId: receptionistId,
    }).then(data => data)
}

export async function updateReceptionist(receptionist) {
    return await axios.post('http://localhost:8888/ddsapi/updateReceptionist.php', {
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