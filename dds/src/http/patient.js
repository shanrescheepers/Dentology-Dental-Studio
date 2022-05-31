import axios from 'axios';

export function getReceptionists() {

    return axios.get('http://localhost:8888/ddsapi/index.php')
        .then(data => data)
}
