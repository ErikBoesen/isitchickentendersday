const API_ROOT = 'https://api.yalemenus.com/';

const get = (url, params) => {
    return fetch(API_ROOT + url + '?' + new URLSearchParams({
        params,
    })).then((response) => {
        return response.json();
    }).catch(function (error) {
        console.log(error);
    });
}

get('halls', {}).then((data) => {
    console.log(data);
});

/*
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
    // TODO: stop looping as soon as a result is found
    return getMealsToday().then(meals => {
        return Promise.all(
            meals.map(({ id: mealId }) => {
                return getItems(mealId).then(items => {
                    return items.some(item => item.name.includes('Chicken Tenders'));
                });
            })
        ).then(results => results.some(result => result));
    });
};

areServing().then(console.log);
*/
