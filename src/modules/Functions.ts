import { AllocationIncludeInput } from '../application/interfaces/Allocation';
import { DatabaseIncludeInput } from '../application/interfaces/Database';
import { LocationIncludeInput } from '../application/interfaces/Location';
import { NestIncludeInput } from '../application/interfaces/Nest';
import { NodeIncludeInput } from '../application/interfaces/Node';
import { ServerIncludesInput } from '../application/interfaces/Server';
import {
    UserFilterInput,
    UserIncludeInput,
} from '../application/interfaces/User';

export type makeIncludesOpt =
    | DatabaseIncludeInput
    | ServerIncludesInput
    | AllocationIncludeInput
    | DatabaseIncludeInput
    | NestIncludeInput
    | NodeIncludeInput
    | UserIncludeInput
    | LocationIncludeInput
    | undefined;

export type makeFilterOpt = UserFilterInput | undefined;

export function makeIncludes(options: makeIncludesOpt): string {
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

export function makeFilter(
    filter: makeFilterOpt,
    includeOptUsed = false,
): string {
    if (!filter) return '';
    return `${includeOptUsed ? '&' : '?'}filter[${filter.filterBy}]=${
        filter.filter
    }`;
}

export function makeOptions(
    includeOptions: makeIncludesOpt,
    filterOptions: makeFilterOpt,
) {
    return (
        makeIncludes(includeOptions) +
        makeFilter(filterOptions, typeof includeOptions !== 'undefined')
    );
}
