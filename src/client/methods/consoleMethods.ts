import { Client } from '..';
import { WebsocketAuthData } from '../interfaces/WebsocketAuthData';
import { WebsocketClient } from '../Websocket';

export class consoleMethods {
    constructor(private readonly client: Client) {}
    /**
     * @internal
     */
    private getWebsocketAuthData = async (
        serverId: string,
    ): Promise<WebsocketAuthData> => {
        return this.client.request(
            'GET',
            null,
            'data',
            `/api/client/servers/${serverId}/websocket`,
        );
    };
    public startConsoleConnection = async (
        serverId: string,
    ): Promise<WebsocketClient> => {
        return new WebsocketClient(
            this.getWebsocketAuthData.bind(undefined, serverId),
        );
    };
}
