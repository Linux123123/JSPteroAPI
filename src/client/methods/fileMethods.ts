import Request from '../ClientRequest';
import ServerFile, {
    ServerFileAttributes,
    ServerFileCompress,
    ServerFileCreateFolder,
    ServerFileDecompress,
    ServerFileDelete,
    SeverFileRename,
} from '../interfaces/ServerFile';
export default class fileMethods {
    public constructor(private host: string, private key: string) {}
    /**
     * @example
     *   const res = await client.getAllFiles('c2f5a3b6'); // res = ServerFile[]
     *
     * @example
     *   client.getAllFiles('c2f5a3b6', 'dist').then((res) => console.log(res)); // res = ServerFile[]
     *
     * @param {String} serverId ID of the server to get (In the settings tab of
     *   server/in link)
     * @param {String} [dir=""] Directory to get files from (if not provided
     *   gets root server dir) (e. g. dist or dist/classes). Default is `""`
     * @returns {Promise<ServerFile[]>} Array of file objects
     */
    public async getAllFiles(
        serverId: string,
        dir = '',
    ): Promise<ServerFile[]> {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'data',
            `/api/client/servers/${serverId}/files/list?directory=%2F${dir}`,
        );
    }
    /**
     * @example
     *   const res = await client.getFileContents('c2f5a3b6', 'index.js'); // res = content of your file (string)
     *
     * @example
     *   client
     *       .getFileContents('c2f5a3b6', 'dist/index.js')
     *       .then((res) => console.log(res)); // res = content of your file (string)
     *
     * @param {String} serverId ID of the server to get (In the settings tab of
     *   server/in link)
     * @param {String} file File to get the contents of (full name like index.js
     *   or dist/index.js)
     * @returns {Promise<string>} Contents of the file (string)
     */
    public async getFileContents(
        serverId: string,
        file: string,
    ): Promise<string> {
        let filePath = '';
        if (file.includes('/')) {
            file.split('/').forEach((f) => (filePath += `%2F${f}`));
        } else filePath = `%2F${file}`;
        return new Request(this.host, this.key).request(
            'GET',
            null,
            '',
            `/api/client/servers/${serverId}/files/contents?file=${filePath}`,
            true,
        );
    }
    /**
     * @example
     *   const res = await client.writeFile(
     *       'c2f5a3b6',
     *       'HW.txt',
     *       'Hello world!',
     *   ); // res = Successfuly written the file!
     *
     * @example
     *   client
     *       .writeFile('c2f5a3b6', 'dist/HW.txt', 'Hello world!')
     *       .then((res) => console.log(res)); // res = Successfuly written the file!
     *
     * @param {String} serverId ID of the server to get (In the settings tab of
     *   server/in link)
     * @param {String} file File to get the contents of (full name like index.js
     *   or dist/index.js)
     * @param {String} contents The contents of file you want to write
     * @returns {Promise<String>} If successful returns Successfuly written the file!
     */
    public async writeFile(
        serverId: string,
        file: string,
        contents: string,
    ): Promise<string> {
        let filePath = '';
        if (file.includes('/')) {
            file.split('/').forEach((f) => (filePath += `%2F${f}`));
        } else filePath = `%2F${file}`;
        return new Request(this.host, this.key).request(
            'POST',
            contents,
            'Successfuly written the file!',
            `/api/client/servers/${serverId}/files/write?file=${filePath}`,
        );
    }
    /**
     * @example
     *   const res = await client.renameFile('c2f5a3b6', {
     *       root: '/',
     *       files: [{ from: 'LICENSE', to: 'LIC' }],
     *   }); // res = Successfuly renamed!
     *
     * @example
     *   client
     *       .renameFile('c2f5a3b6', {
     *           root: '/dist',
     *           files: [{ from: 'LICENSE', to: 'LIC' }],
     *       })
     *       .then((res) => console.log(res)); // res = Successfuly renamed!
     *
     * @param {String} serverId ID of the server to get (In the settings tab of
     *   server/in link)
     * @param {SeverFileRename} data An object composed of root of the file and
     *   array of objects for files to rename
     * @returns {Promise<String>} If successful returns Successfuly renamed!
     */
    public async renameFile(
        serverId: string,
        data: SeverFileRename,
    ): Promise<string> {
        return new Request(this.host, this.key).request(
            'PUT',
            data,
            'Successfuly renamed!',
            `/api/client/servers/${serverId}/files/rename`,
        );
    }
    /**
     * @example
     *   const res = await client.copyFile('c2f5a3b6', '/LICENSE'); // res = Successfuly copied!
     *
     * @example
     *   client
     *       .copyFile('c2f5a3b6', '/dist/LICENSE')
     *       .then((res) => console.log(res)); // res = Successfuly copied!
     *
     * @param {String} serverId ID of the server to get (In the settings tab of
     *   server/in link)
     * @param {Object} location Location of file to copy (e. g. /LICENSE) (It
     *   will create a /LICENSE copy)
     * @returns {Promise<String>} If successful returns Successfuly copied!
     */
    public async copyFile(serverId: string, location: string): Promise<string> {
        return new Request(this.host, this.key).request(
            'POST',
            { location: location },
            'Successfuly copied!',
            `/api/client/servers/${serverId}/files/copy`,
        );
    }
    /**
     * @example
     *   const res = await client.getFileDownloadLink('c2f5a3b6', 'index.js'); // res = url (string)
     *
     * @example
     *   client
     *       .getServerResources('c2f5a3b6', 'dist/index.js')
     *       .then((res) => console.log(res)); // res = url (string)
     *
     * @param {String} serverId ID of the server to get (In the settings tab of
     *   server/in link)
     * @param {String} file File to get the contents of (full name like index.js
     *   or dist/index.js)
     * @returns {Promise<String>} Returns file download url
     */
    public async getFileDownloadLink(
        serverId: string,
        file: string,
    ): Promise<string> {
        let filePath = '';
        if (file.includes('/')) {
            file.split('/').forEach((f) => (filePath += `%2F${f}`));
        } else filePath = `%2F${file}`;
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'attributesUrl',
            `/api/client/servers/${serverId}/files/download?file=${filePath}`,
        );
    }
    /**
     * @example
     *   const res = await client.compressFile('c2f5a3b6', {
     *       root: '/',
     *       files: ['README.md', 'LICENSE'],
     *   }); // res = ServerFileAttributes
     *
     * @example
     *   client
     *       .compressFile('c2f5a3b6', {
     *           root: '/',
     *           files: ['README.md', 'LICENSE'],
     *       })
     *       .then((res) => console.log(res)); // res = ServerFileAttributes
     *
     * @param {String} serverId ID of the server to get (In the settings tab of
     *   server/in link)
     * @param {ServerFileCompress} data An object composed of root of the file
     *   and array of objects for files to rename
     * @returns {Promise<ServerFileAttributes>} Returns a archive file information
     */
    public async compressFile(
        serverId: string,
        data: ServerFileCompress,
    ): Promise<ServerFileAttributes> {
        return new Request(this.host, this.key).request(
            'POST',
            data,
            'attributes',
            `/api/client/servers/${serverId}/files/compress`,
        );
    }
    /**
     * @example
     *   const res = await client.decompressFile('c2f5a3b6', {
     *       root: '/',
     *       file: 'archive.tar.gz',
     *   }); // res = Successfuly decompressed!
     *
     * @example
     *   client
     *       .decompressFile('c2f5a3b6', { root: '/', file: 'archive.tar.gz' })
     *       .then((res) => console.log(res)); // res = Successfuly decompressed!
     *
     * @param {String} serverId ID of the server to get (In the settings tab of
     *   server/in link)
     * @param {ServerFileDecompress} data An object composed of root of the file
     *   and file to remove
     * @returns {Promise<String>} If successful returns Successfuly decompressed!
     */
    public async decompressFile(
        serverId: string,
        data: ServerFileDecompress,
    ): Promise<string> {
        return new Request(this.host, this.key).request(
            'POST',
            data,
            'Successfuly decompressed!',
            `/api/client/servers/${serverId}/files/decompress`,
        );
    }
    /**
     * @example
     *   const res = await client.deleteFile('c2f5a3b6', {
     *       root: '/',
     *       files: ['README.md'],
     *   }); // res = Successfuly deleted!
     *
     * @example
     *   client
     *       .deleteFile('c2f5a3b6', {
     *           root: '/',
     *           files: ['LICENSE', 'README.md'],
     *       })
     *       .then((res) => console.log(res)); // res = Successfuly deleted!
     *
     * @param {String} serverId ID of the server to get (In the settings tab of
     *   server/in link)
     * @param {ServerFileDelete} data An object composed of root of the file and
     *   array of string (file names) for files to rename
     * @returns {Promise<String>} If successful returns Successfuly deleted!
     */
    public async deleteFile(
        serverId: string,
        data: ServerFileDelete,
    ): Promise<string> {
        return new Request(this.host, this.key).request(
            'POST',
            data,
            'Successfuly deleted!',
            `/api/client/servers/${serverId}/files/delete`,
        );
    }
    /**
     * @example
     *   const res = await client.createFolder('c2f5a3b6', {
     *       root: '/',
     *       name: 'world',
     *   }); // res = Successfuly created!
     *
     * @example
     *   client
     *       .createFolder('c2f5a3b6', { root: '/', name: 'world' })
     *       .then((res) => console.log(res)); // res = Successfuly created!
     *
     * @param {String} serverId ID of the server to get (In the settings tab of
     *   server/in link)
     * @param {ServerFileCreateFolder} data An object composed of root of the
     *   file and file to remove
     * @returns {Promise<String>} If successful returns Successfuly created!
     */
    public async createFolder(
        serverId: string,
        data: ServerFileCreateFolder,
    ): Promise<string> {
        return new Request(this.host, this.key).request(
            'POST',
            data,
            'Successfuly created!',
            `/api/client/servers/${serverId}/files/create-folder`,
        );
    }
    /**
     * @example
     *   const res = await client.getFileUploadLink('c2f5a3b6'); // res = url (string)
     *
     * @example
     *   client.getFileUploadLink('c2f5a3b6').then((res) => console.log(res)); // res = url (string)
     *
     * @param {String} serverId ID of the server to get (In the settings tab of
     *   server/in link)
     * @returns {Promise<String>} If successful returns upload url
     */
    public async getFileUploadLink(serverId: string): Promise<string> {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'attributesUrl',
            `/api/client/servers/${serverId}/files/upload`,
        );
    }
}
