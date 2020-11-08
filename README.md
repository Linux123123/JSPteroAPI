# JSPteroAPI

[![GitHub](https://img.shields.io/github/license/linux123123/jspteroapi)](https://github.com/Linux123123/JSPteroAPI/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@linux123123/jspteroapi)](https://www.npmjs.com/package/@linux123123/jspteroapi)
[![GitHub issues](https://img.shields.io/github/issues/linux123123/jspteroapi)](https://github.com/Linux123123/JSPteroAPI/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/linux123123/jspteroapi)](https://github.com/Linux123123/JSPteroAPI/pulls)

**A simple Pterodactyl API library using node-fetch**

# To install:

<h5>Install from the command line:</h5>

```npm install @linux123123/jspteroapi```

<h5>Install via package.json:</h5>

```"@linux123123/jspteroapi": "1.3.1"```
           
Then include it in your application:

```javascript
const node = require('jspteroapi');
const application = node.Application; // for application API
const client = node.Client; // for Client API
```

# How to use

To login with application api key use:

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

And then you can use any application funtion you want:

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
