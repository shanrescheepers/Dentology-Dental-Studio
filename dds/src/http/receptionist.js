import axios from 'axios';

export function getReceptionists() {

    return axios.get('http://localhost:8888/ddsapi/index.php')
        .then(data => data)
}

// get receptionists (http call)
// Get Set Read Delete - CRUD

// Create Receptionist
// DTO
export function createReceptionist(receptionist) {
    return axios.post('http://localhost:8888/ddsapi/createReceptionist.php', {
        // Wrapping - JSONd data wat gestuur word.
        name: receptionist.name,
        surname: receptionist.surname,
        age: receptionist.age,
        genderId: receptionist.genderId,
        phone: receptionist.phone,
        email: receptionist.email,
        password: receptionist.password,
        rankId: receptionist.rankId
    }, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "*",
        }
    }).then(data => data)
}
// UPDATE TEST
export function updateReceptionist(receptionist) {
    return axios.post('http://localhost:8888/ddsapi/updateReceptionist.php', {
        // Wrapping - JSONd data wat gestuur word.
        id: receptionist.id,
        name: receptionist.name,
        surname: receptionist.surname,
        age: receptionist.age,
        genderId: receptionist.genderId,
        phone: receptionist.phone,
        email: receptionist.email,
        password: receptionist.password,
        rankId: receptionist.rankId
    }, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "*",
        }
    }).then(data => data)
}
export function deleteReceptionist(receptionistId) {

    return axios.post('http://localhost:8888/ddsapi/deleteReceptionist.php', {
        // Wrapping - JSONd data wat gestuur word.
        id: receptionistId,

    }, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "*",
        }
    }).then(data => data)
}