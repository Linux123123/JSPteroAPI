const req = require('../ApplicationRequest.js');
const getEggInfo = require('./getEggInfo');

/**
 * @param {String} Version Version of the server to use
 * @param {String} NameOfServer Name of server to create
 * @param {Integer} OwnerID User ID of who should own this server
 * @param {Integer} NestID ID of the nest to use when making a server
 * @param {Integer} EggID Egg ID to use when installing the server
 * @param {String} DockerImage The image to use from Docker
 * @param {String} StartupCmd The command to use when starting this server (AKA JVM Arguments)
 * @param {Integer} RAM The amount of RAM the server has
 * @param {Integer} Swap The amount of Swap the server has
 * @param {Integer} Disk The amount of Storage the server has
 * @param {Integer} IO Set this to 500 please. (Even if you know what it is leave it alone)
 * @param {Integer} CPU The amount of CPU Power the server can use (100 = 1 core);
 * @param {Integer} AmountOfDatabases The max amount of databases a server can use
 * @param {Integer} AmountOfAllocations The max amount of allocation(s) a server can us
 *
 * @yields Object (refer to docs for schema);
 */
function createServer(nestID, eggID) {
    return getEggInfo(nestID, eggID).then((egg) => {
        const data = makeData();
        const body = JSON.stringify(data);
        const Req = new req(
            process.env.APPLICATION_JSPTEROAPI_HOST,
            process.env.APPLICATION_JSPTEROAPI_KEY
        );
        return Req.request(
            'createServer',
            'POST',
            body,
            'attributes',
            '/api/application/servers',
            true
        );
    });
}

function makeData(docker_image, startup) {
    return {
        name: 'Mc',
        user: 2,
        nest: 1,
        egg: 1,
        docker_image: 'quay.io/pterodactyl/core:java',
        startup: 'java -Xms128M -Xmx128M -jar server.jar',
        limits: {
            memory: 1024,
            swap: 0,
            disk: 512,
            io: 500,
            cpu: 100,
        },
        environment: {
            BUNGEE_VERSION: 'latest',
            SERVER_JARFILE: 'server.jar',
        },
        feature_limits: {
            databases: 1,
            allocations: 1,
            backups: 1,
        },
        deploy: {
            locations: [1],
            dedicated_ip: false,
        },
    };
}
module.exports = createServer;
