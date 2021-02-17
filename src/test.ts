import { Client, App } from './index';
// const app = new App(
// 'https://panel.linux123123.cf',
// 'lMDyVVtRqaiHWzeVgVE5wTTWQKzDkXcn5646xSV00uuvFaBn'
// );
const client = new Client(
    'https://panel.linux123123.cf/',
    'gJ7ahvUmJw3wQCO0MSao05XyuZxX6NgyXAvjXvpCxSVJC49T'
);

client.getAllPermissions().then((res) => console.log(res.permissions));
