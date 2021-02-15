import Egg from '../interfaces/Egg';
import Request from '../ApplicationRequest';

export default async function getEggInfo(
    nestID: number,
    eggId: number
): Promise<Egg> {
    const Req = new Request(process.env.AppHost!, process.env.AppKey!);
    return Req.request(
        'getNodeInfo',
        'GET',
        null,
        'attributes',
        `/api/application/nests/${nestID}/eggs/${eggId}`,
        false
    );
}
