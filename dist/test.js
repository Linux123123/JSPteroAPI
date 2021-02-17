"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// const app = new App(
// 'https://panel.linux123123.cf',
// 'lMDyVVtRqaiHWzeVgVE5wTTWQKzDkXcn5646xSV00uuvFaBn'
// );
const client = new index_1.Client('https://panel.linux123123.cf/', 'gJ7ahvUmJw3wQCO0MSao05XyuZxX6NgyXAvjXvpCxSVJC49T');
client.getAllPermissions().then((res) => console.log(res.permissions));
