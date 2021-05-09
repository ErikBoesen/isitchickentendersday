const axios = require('axios').default;

const API_ROOT = 'https://yaledine.com/api/';

const get = (url, params) => {
    return axios.get(API_ROOT + url, {
        params,
    }).then((response) => {
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });
}

const getHalls = () => {
    return get('halls');
}

const areServing = () => {
    getHalls().then((halls) => {
        console.log(halls);
    });
}

areServing();
