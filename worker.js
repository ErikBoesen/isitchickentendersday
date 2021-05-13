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

const getMealsToday = () => {
    const date = new Date();
    let month = String(date.getMonth());
    if (month.length == 1) {
        month = '0' + month;
    }
    let day = String(date.getDate());
    if (day.length == 1) {
        day = '0' + day;
    }
    return get('meals', {
        date: date.getFullYear() + '-' + month + '-' + day
    });
}

const getItems = (mealId) => {
    return get('meals/' + mealId + '/items');
}

const areServing = () => {
    getHallMealsToday(hallId).then((meals) => {
        for (let { id: mealId } of meals) {
            getItems(mealId).then((items) => {
                for (let item of items) {

                }
            });
        }
    });
}

areServing();
