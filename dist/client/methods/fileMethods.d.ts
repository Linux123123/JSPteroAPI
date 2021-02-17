import ServerFile, { ServerFileAttributes, ServerFileCompress, ServerFileCreateFolder, ServerFileDecompress, ServerFileDelete, SeverFileRename } from '../interfaces/ServerFile';
export default class fileMethods {
    private host;
    private key;
    constructor(host: string, key: string);
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {String} [dir=""] Directory to get files from (if not provided gets root server dir) (e. g. dist or dist/classes)
     * @returns {Promise<ServerFile[]>} Array of file objects
     * @example
     * ```js
     * const res = await client.getAllFiles('c2f5a3b6') // res = ServerFile[]
     * ```
     * @example
     * ```js
     * client.getAllFiles('c2f5a3b6', 'dist').then((res) => console.log(res)) // res = ServerFile[]
     * ```
     */
    getAllFiles(serverId: string, dir?: string): Promise<ServerFile[]>;
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {String} file File to get the contents of (full name like index.js or dist/index.js)
     * @returns {Promise<string>} Contents of the file (string)
     * @example
     * ```js
     * const res = await client.getFileContents('c2f5a3b6', 'index.js') // res = content of your file (string)
     * ```
     * @example
     * ```js
     * client.getFileContents('c2f5a3b6', 'dist/index.js').then((res) => console.log(res)) // res = content of your file (string)
     * ```
     */
    getFileContents(serverId: string, file: string): Promise<string>;
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {String} file File to get the contents of (full name like index.js or dist/index.js)
     * @param {String} contents The contents of file you want to write
     * @returns {Promise<String>} If successful returns Successfuly written the file!
     * @example
     * ```js
     * const res = await client.writeFile('c2f5a3b6', 'HW.txt', 'Hello world!') // res = Successfuly written the file!
     * ```
     * @example
     * ```js
     * client.writeFile('c2f5a3b6', 'dist/HW.txt', 'Hello world!').then((res) => console.log(res)) // res = Successfuly written the file!
     * ```
     */
    writeFile(serverId: string, file: string, contents: string): Promise<String>;
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {SeverFileRename} data An object composed of root of the file and array of objects for files to rename
     * @returns {Promise<String>} If successful returns Successfuly renamed!
     * @example
     * ```js
     * const res = await client.renameFile('c2f5a3b6', { root: '/', files: [{ from: 'LICENSE', to: 'LIC' }] }) // res = Successfuly renamed!
     * ```
     * @example
     * ```js
     * client.renameFile('c2f5a3b6', { root: '/dist', files: [{ from: 'LICENSE', to: 'LIC' }] }).then((res) => console.log(res)) // res = Successfuly renamed!
     * ```
     */
    renameFile(serverId: string, data: SeverFileRename): Promise<String>;
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {Object} location Location of file to copy (e. g. /LICENSE) (It will create a /LICENSE copy)
     * @returns {Promise<String>} If successful returns Successfuly copied!
     * @example
     * ```js
     * const res = await client.copyFile('c2f5a3b6', '/LICENSE') // res = Successfuly copied!
     * ```
     * @example
     * ```js
     * client.copyFile('c2f5a3b6', '/dist/LICENSE').then((res) => console.log(res)) // res = Successfuly copied!
     * ```
     */
    copyFile(serverId: string, location: string): Promise<String>;
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {String} file File to get the contents of (full name like index.js or dist/index.js)
     * @returns {Promise<String>} Returns file download url
     * @example
     * ```js
     * const res = await client.getFileDownloadLink('c2f5a3b6', 'index.js') // res = url (string)
     * ```
     * @example
     * ```js
     * client.getServerResources('c2f5a3b6', 'dist/index.js').then((res) => console.log(res)) // res = url (string)
     * ```
     */
    getFileDownloadLink(serverId: string, file: string): Promise<string>;
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {ServerFileCompress} data An object composed of root of the file and array of objects for files to rename
     * @returns {Promise<ServerFileAttributes>} Returns a archive file information
     * @example
     * ```js
     * const res = await client.compressFile('c2f5a3b6', { root: '/', files: ['README.md', 'LICENSE'] }) // res = ServerFileAttributes
     * ```
     * @example
     * ```js
     * client.compressFile('c2f5a3b6', { root: '/', files: ['README.md', 'LICENSE'] }).then((res) => console.log(res)) // res = ServerFileAttributes
     * ```
     */
    compressFile(serverId: string, data: ServerFileCompress): Promise<ServerFileAttributes>;
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {ServerFileDecompress} data An object composed of root of the file and file to remove
     * @returns {Promise<String>} If successful returns Successfuly decompressed!
     * @example
     * ```js
     * const res = await client.decompressFile('c2f5a3b6', { root: '/', file: 'archive.tar.gz' }) // res = Successfuly decompressed!
     * ```
     * @example
     * ```js
     * client.decompressFile('c2f5a3b6', { root: '/', file: 'archive.tar.gz' }).then((res) => console.log(res)) // res = Successfuly decompressed!
     * ```
     */
    decompressFile(serverId: string, data: ServerFileDecompress): Promise<String>;
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {ServerFileDelete} data An object composed of root of the file and array of string (file names) for files to rename
     * @returns {Promise<String>} If successful returns Successfuly deleted!
     * @example
     * ```js
     * const res = await client.deleteFile('c2f5a3b6', { root: '/', files: ['README.md'] }) // res = Successfuly deleted!
     * ```
     * @example
     * ```js
     * client.deleteFile('c2f5a3b6', { root: '/', files: ['LICENSE', 'README.md'] }).then((res) => console.log(res)) // res = Successfuly deleted!
     * ```
     */
    deleteFile(serverId: string, data: ServerFileDelete): Promise<String>;
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {ServerFileCreateFolder} data An object composed of root of the file and file to remove
     * @returns {Promise<String>} If successful returns Successfuly created!
     * @example
     * ```js
     * const res = await client.createFolder('c2f5a3b6', { root: '/', name: 'world' }) // res = Successfuly created!
     * ```
     * @example
     * ```js
     * client.createFolder('c2f5a3b6', { root: '/', name: 'world' }).then((res) => console.log(res)) // res = Successfuly created!
     * ```
     */
    createFolder(serverId: string, data: ServerFileCreateFolder): Promise<String>;
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @returns {Promise<String>} If successful returns upload url
     * @example
     * ```js
     * const res = await client.getFileUploadLink('c2f5a3b6') // res = url (string)
     * ```
     * @example
     * ```js
     * client.getFileUploadLink('c2f5a3b6').then((res) => console.log(res)) // res = url (string)
     * ```
     */
    getFileUploadLink(serverId: string): Promise<String>;
}
