import { ServerFile, ServerFileAttributes, ServerFileCompress, ServerFileCreateFolder, ServerFileDecompress, ServerFileDelete, SeverFileRename } from '../interfaces/ServerFile';
export declare class fileMethods {
    private host;
    private key;
    constructor(host: string, key: string);
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param dir - Directory to get files from (if not provided gets root server dir) (e. g. dist or dist/classes)
     * @returns Array of file objects
     * @example
     * ```ts
     * const res = await client.getAllFiles('c2f5a3b6') // res = ServerFile[]
     * ```
     * @example
     * ```ts
     * client.getAllFiles('c2f5a3b6', 'dist').then((res) => console.log(res)) // res = ServerFile[]
     * ```
     */
    getAllFiles(serverId: string, dir?: string): Promise<ServerFile[]>;
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param file - File to get the contents of (full name like index.js or dist/index.js)
     * @returns Contents of the file (string)
     * @example
     * ```ts
     * const res = await client.getFileContents('c2f5a3b6', 'index.js') // res = content of your file (string)
     * ```
     * @example
     * ```ts
     * client.getFileContents('c2f5a3b6', 'dist/index.js').then((res) => console.log(res)) // res = content of your file (string)
     * ```
     */
    getFileContents(serverId: string, file: string): Promise<string>;
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param file - File to get the contents of (full name like index.js or dist/index.js)
     * @param contents - The contents of file you want to write
     * @returns If successful returns Successfuly written the file!
     * @example
     * ```ts
     * const res = await client.writeFile('c2f5a3b6', 'HW.txt', 'Hello world!') // res = Successfuly written the file!
     * ```
     * @example
     * ```ts
     * client.writeFile('c2f5a3b6', 'dist/HW.txt', 'Hello world!').then((res) => console.log(res)) // res = Successfuly written the file!
     * ```
     */
    writeFile(serverId: string, file: string, contents: string): Promise<string>;
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param data - An object composed of root of the file and array of objects for files to rename
     * @returns If successful returns Successfuly renamed!
     * @example
     * ```ts
     * const res = await client.renameFile('c2f5a3b6', { root: '/', files: [{ from: 'LICENSE', to: 'LIC' }] }) // res = Successfuly renamed!
     * ```
     * @example
     * ```ts
     * client.renameFile('c2f5a3b6', { root: '/dist', files: [{ from: 'LICENSE', to: 'LIC' }] }).then((res) => console.log(res)) // res = Successfuly renamed!
     * ```
     */
    renameFile(serverId: string, data: SeverFileRename): Promise<string>;
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param location - Location of file to copy (e. g. /LICENSE) (It will create a /LICENSE copy)
     * @returns If successful returns Successfuly copied!
     * @example
     * ```ts
     * const res = await client.copyFile('c2f5a3b6', '/LICENSE') // res = Successfuly copied!
     * ```
     * @example
     * ```ts
     * client.copyFile('c2f5a3b6', '/dist/LICENSE').then((res) => console.log(res)) // res = Successfuly copied!
     * ```
     */
    copyFile(serverId: string, location: string): Promise<string>;
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param file - File to get the contents of (full name like index.js or dist/index.js)
     * @returns Returns file download url
     * @example
     * ```ts
     * const res = await client.getFileDownloadLink('c2f5a3b6', 'index.js') // res = url (string)
     * ```
     * @example
     * ```ts
     * client.getServerResources('c2f5a3b6', 'dist/index.js').then((res) => console.log(res)) // res = url (string)
     * ```
     */
    getFileDownloadLink(serverId: string, file: string): Promise<string>;
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param data - An object composed of root of the file and array of objects for files to rename
     * @returns Returns a archive file information
     * @example
     * ```ts
     * const res = await client.compressFile('c2f5a3b6', { root: '/', files: ['README.md', 'LICENSE'] }) // res = ServerFileAttributes
     * ```
     * @example
     * ```ts
     * client.compressFile('c2f5a3b6', { root: '/', files: ['README.md', 'LICENSE'] }).then((res) => console.log(res)) // res = ServerFileAttributes
     * ```
     */
    compressFile(serverId: string, data: ServerFileCompress): Promise<ServerFileAttributes>;
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param data - An object composed of root of the file and file to remove
     * @returns If successful returns Successfuly decompressed!
     * @example
     * ```ts
     * const res = await client.decompressFile('c2f5a3b6', { root: '/', file: 'archive.tar.gz' }) // res = Successfuly decompressed!
     * ```
     * @example
     * ```ts
     * client.decompressFile('c2f5a3b6', { root: '/', file: 'archive.tar.gz' }).then((res) => console.log(res)) // res = Successfuly decompressed!
     * ```
     */
    decompressFile(serverId: string, data: ServerFileDecompress): Promise<string>;
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param data - An object composed of root of the file and array of string (file names) for files to rename
     * @returns If successful returns Successfuly deleted!
     * @example
     * ```ts
     * const res = await client.deleteFile('c2f5a3b6', { root: '/', files: ['README.md'] }) // res = Successfuly deleted!
     * ```
     * @example
     * ```ts
     * client.deleteFile('c2f5a3b6', { root: '/', files: ['LICENSE', 'README.md'] }).then((res) => console.log(res)) // res = Successfuly deleted!
     * ```
     */
    deleteFile(serverId: string, data: ServerFileDelete): Promise<string>;
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param data - An object composed of root of the file and file to remove
     * @returns If successful returns Successfuly created!
     * @example
     * ```ts
     * const res = await client.createFolder('c2f5a3b6', { root: '/', name: 'world' }) // res = Successfuly created!
     * ```
     * @example
     * ```ts
     * client.createFolder('c2f5a3b6', { root: '/', name: 'world' }).then((res) => console.log(res)) // res = Successfuly created!
     * ```
     */
    createFolder(serverId: string, data: ServerFileCreateFolder): Promise<string>;
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @returns If successful returns upload url
     * @example
     * ```ts
     * const res = await client.getFileUploadLink('c2f5a3b6') // res = url (string)
     * ```
     * @example
     * ```ts
     * client.getFileUploadLink('c2f5a3b6').then((res) => console.log(res)) // res = url (string)
     * ```
     */
    getFileUploadLink(serverId: string): Promise<string>;
}
