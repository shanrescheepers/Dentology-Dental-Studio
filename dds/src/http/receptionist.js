import axios from 'axios';

export function getReceptionistsFunction() {

    return axios.get('http://localhost:8888/ddsapi/index.php')
        .then(data => {
            return data;
        })
}

// get receptionists