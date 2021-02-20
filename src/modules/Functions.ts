import { AllocationIncludeInput } from '../application/interfaces/Allocation';
import { DatabaseIncludeInput } from '../application/interfaces/Database';
import { NestIncludeInput } from '../application/interfaces/Nest';
import { NodeIncludeInput } from '../application/interfaces/Node';
import { ServerIncludesInput } from '../application/interfaces/Server';
import { UserIncludeInput } from '../application/interfaces/User';

export default function makeIncludes(
    options:
        | DatabaseIncludeInput
        | ServerIncludesInput
        | AllocationIncludeInput
        | DatabaseIncludeInput
        | NestIncludeInput
        | NodeIncludeInput
        | UserIncludeInput
        | undefined,
): string {
    if (!options) return '';
    let include = '?include=';
    const optionsArray = Object.entries(options);
    if (optionsArray.some(([, value]) => value === true)) {
        optionsArray.forEach(([key, value]) => {
            if (value) include += `${key},`;
        });
        return include.slice(0, -1);
    }
    return '';
}
