# JSPteroAPI

[![GitHub](https://img.shields.io/github/license/linux123123/jspteroapi)](https://github.com/Linux123123/JSPteroAPI/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@linux123123/jspteroapi)](https://www.npmjs.com/package/@linux123123/jspteroapi)
[![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/linux123123/jspteroapi/node-fetch)](https://www.npmjs.com/package/node-fetch)
![Node.js Package](https://github.com/Linux123123/JSPteroAPI/workflows/Node.js%20Package/badge.svg)
[![GitHub issues](https://img.shields.io/github/issues/linux123123/jspteroapi)](https://github.com/Linux123123/JSPteroAPI/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/linux123123/jspteroapi)](https://github.com/Linux123123/JSPteroAPI/pulls)

<h3>A simple Pterodactyl API library using node-fetch</h3>

# To install:

<h5>Install from the command line:</h5>

`npm install @linux123123/jspteroapi`

<h5>Install via package.json:</h5>

`"@linux123123/jspteroapi": "1.3.4"`

Then include it in your application:

```javascript
const node = require('@linux123123/jspteroapi');
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
            console.log(msg);
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

Most of the functions in https://docs.nodeactyl.xyz/ should work.

# Example project

I have created a discord bot using this library
[Pterodactyl-Discord-Bot](https://github.com/Linux123123/Pterodactyl-Discord-Bot)

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
