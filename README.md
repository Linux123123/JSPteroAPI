# JSPteroAPI

[![NPM](https://nodeico.herokuapp.com/@linux123123/jspteroapi.svg)](https://npmjs.com/package/@linux123123/jspteroapi)

[![GitHub](https://img.shields.io/github/license/linux123123/jspteroapi)](https://github.com/Linux123123/JSPteroAPI/blob/main/LICENSE)
[![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/linux123123/jspteroapi/node-fetch)](https://www.npmjs.com/package/node-fetch)
![Node.js Package](https://github.com/Linux123123/JSPteroAPI/workflows/Node.js%20Package/badge.svg)
[![GitHub issues](https://img.shields.io/github/issues/linux123123/jspteroapi)](https://github.com/Linux123123/JSPteroAPI/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/linux123123/jspteroapi)](https://github.com/Linux123123/JSPteroAPI/pulls)

<h3>A simple Pterodactyl API library using node-fetch</h3>
<span>(written in typescript)</span>
    
# To install:

<h5>Install from the command line:</h5>

`npm install @linux123123/jspteroapi`

<h5>Install via package.json:</h5>

`"@linux123123/jspteroapi": "2.3.1"`

Then include it in your application:

```javascript
const node = require('@linux123123/jspteroapi');
const application = new node.Application('HOST', 'TOKEN'); // for application API
const client = new node.Client('HOST', 'TOKEN'); // for Client API
```

# How to use

You can use any application funtion you want:

```javascript
application.function(parameters).then((response) => {
    // response
});
```

or using async / await

```javascript
const res = await application.function(parameters);
```

# Documentation

<h3><a href="https://jspteroapidocs.linux123123.cf">https://jspteroapidocs.linux123123.cf</a></h3>

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
