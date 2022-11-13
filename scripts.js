const elem = {
    main: document.getElementsByTagName('main')[0],
    answer: document.getElementById('answer'),
    conjunction: document.getElementById('conjunction'),
}

const API_ROOT = 'https://api.yalemenus.com/';

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

get('halls/' + COLLEGE_ID + '/meals', {date: getToday()}).then((meals) => {
    // Chicken tenders appear to only be served at lunch
    let lunch = getLunch(meals);
    if (lunch) {
        get('meals/' + lunch.id + '/items').then((items) => {
            for (let item of items) {
                if (item.name.toLowerCase().includes('chicken tenders')) {
                    setServing(true);
                    return;
                }
            }
            setServing(false);
        });
    } else {
        setServing(false);
    }
});

const setServing = (serving) => {
    if (serving) {
        elem.answer.textContent = 'Yes';
        elem.conjunction.textContent = 'And';
    }
    elem.main.style.visibility = 'visible';
};
