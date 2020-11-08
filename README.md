# JSPteroAPI

[![GitHub](https://img.shields.io/github/license/linux123123/jspteroapi)](https://github.com/Linux123123/JSPteroAPI/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/jspteroapi)](https://www.npmjs.com/package/jspteroapi)
[![GitHub issues](https://img.shields.io/github/issues/linux123123/jspteroapi)](https://github.com/Linux123123/JSPteroAPI/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/linux123123/jspteroapi)](https://github.com/Linux123123/JSPteroAPI/pulls)

<h2>As of right now it is under heavy development. Don't use.</h2>

**A simple Pterodactyl API library using node-fetch**

# To install:

Install using npm:

```
npm install jspteroapi
```

Then include it in your application:

```javascript
const node = require('jspteroapi');
const application = node.Application; // for application API
const client = node.Client; // for Client API
```

# How to use

To login use:

```javascript
application.login(HOST, API_KEY, (loggedIn, msg) => {
        if (loggedIn == true) {
            console.log('Pterodactyl has logged in!');
        } else {
            console.warn(msg);
        }
    }
);
})
```

And then you can use any funtion you want:

```javascript
application.function(parameters).then((response) => {
    // response
});
```

# Documentation

All the functions in https://docs.nodeactyl.xyz/ should work.

# Versions

**How versions work:**

-   The first number is the release.
-   The second number is the function release.
-   The third number is the bug fix release.

# Disclaimer

I am not responsible for any damages that you cause to your servers/nodes by using **this API**.

**Remember: This API can potentially be dangerous with the ability to Delete Servers/Nodes at an instant!**

# Contributors

Created and maintained by [Linux123123](https://github.com/linux123123)

Code snippets used from [Nodeactyl](https://github.com/Burchard36/Nodeactyl)
