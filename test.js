const node = require('./JSPteroAPI.js');

const application = node.Application;

application.login(
    'https://panel.linux123123.cf',
    'ohC0mbUE3H2fRaaihqQA83sANxlcDdJWNs2nIGPn0uXqvt5y',
    (loggedIn, msg) => {
        if (loggedIn == true) {
            console.log('Pterodactyl has logged in!');
        } else {
            console.error(msg);
        }
    }
);
