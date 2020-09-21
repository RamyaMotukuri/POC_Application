/*import axios from 'axios';

const setAuthToken = token => {
    if(token){
        //apply to every req
        axios.defaults.headers.common['Authorization'] = token;
    }else {
        //Delete the auth header
        delete axios.default.headers.common['Authorization'];
    }
}*/

import axios from 'axios';

const setAuthToken = token => {
    if(token) {
        // Apply to every request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;
