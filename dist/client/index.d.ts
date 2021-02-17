export default class client {
    private host;
    private key;
    /**
     * @param {String} Host Panels address
     * @param {String} Key Api key to use
     * @param {Boolean} Fast Fast login (No credential check)
     */
    constructor(host: string, key: string, fast?: boolean);
    private testAPI;
    getAllServers: () => Promise<import("./interfaces/Server").default[]>;
    getServerInfo: (serverId: string) => Promise<import("./interfaces/Server").ServerAttributes>;
    getServerResources: (serverId: string) => Promise<import("./interfaces/ServerResources").default>;
    getWebsocketAuthData: (serverId: string) => Promise<import("./interfaces/WebsocketAuthData").default>;
    getAllPermissions: () => Promise<import("./interfaces/Permissions").default>;
    getAllDatabases: (serverId: string) => Promise<import("./interfaces/Database").default[]>;
    getAllFiles: (serverId: string, dir?: string) => Promise<import("./interfaces/ServerFile").default[]>;
    getFileContents: (serverId: string, file: string) => Promise<string>;
    getFileDownloadLink: (serverId: string, file: string) => Promise<string>;
    getFileUploadLink: (serverId: string) => Promise<string>;
    sendCommand: (serverId: string, command: string) => Promise<string>;
    setPowerState: (serverId: string, action: string) => Promise<string>;
    createDatabase: (serverId: string, databaseName: string, connectionsAllowedFrom?: string) => Promise<import("./interfaces/Database").DatabaseAttributes>;
    rotateDatabasePass: (serverId: string, databaseName: string) => Promise<import("./interfaces/Database").DatabaseAttributesRelationship>;
    copyFile: (serverId: string, location: string) => Promise<string>;
    writeFile: (serverId: string, file: string, contents: string) => Promise<string>;
    compressFile: (serverId: string, data: import("./interfaces/ServerFile").ServerFileCompress) => Promise<import("./interfaces/ServerFile").ServerFileAttributes>;
    decompressFile: (serverId: string, data: import("./interfaces/ServerFile").ServerFileDecompress) => Promise<string>;
    deleteFile: (serverId: string, data: import("./interfaces/ServerFile").ServerFileCompress) => Promise<string>;
    createFolder: (serverId: string, data: import("./interfaces/ServerFile").ServerFileCreateFolder) => Promise<string>;
    deleteDatabase: (serverId: string, databaseName: string) => Promise<string>;
    renameFile: (serverId: string, data: import("./interfaces/ServerFile").SeverFileRename) => Promise<string>;
}
