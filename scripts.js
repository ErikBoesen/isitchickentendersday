const API_ROOT = 'https://api.yalemenus.com/';

const elem = {
    answer: document.getElementById('answer'),
    conjunction: document.getElementById('conjunction'),
}

const get = (url, params) => {
    return fetch(API_ROOT + url + '?' + new URLSearchParams(params)).then((response) => {
        return response.json();
    }).catch(function (error) {
        console.log(error);
    });
}


const getToday = () => {
    const date = new Date();
    let month = String(date.getMonth());
    if (month.length === 1) {
        month = '0' + month;
    }
    let day = String(date.getDate());
    if (day.length === 1) {
        day = '0' + day;
    }
    return date.getFullYear() + '-' + month + '-' + day;
};

const getLunch = (meals) => {
    for (let meal of meals) {
        if (meal.name === 'Lunch') {
            return meal;
        }
    }
    return null;
};

// Check an arbitrary college's menus as they are generally all the same
const COLLEGE_ID = 'GH';

const areServing = () => {
    return get('halls/' + COLLEGE_ID + '/meals', {date: getToday()}).then((meals) => {
        // Chicken tenders appear to only be served at lunch
        let lunch = getLunch(meals);
        if (lunch) {
            get('meals/' + lunch.id + '/items').then((items) => {
                for (let item of items) {
                    if (item.name.toLowerCase().includes('chicken tenders')) {

                    }
                }
            });
        }
        return false;
    });
};

areServing().then((serving) => {
    if (serving) {
        elem.answer.textContent = 'Yes';
        elem.conjunction.textContent = 'And';
    }
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
