import { AllocationIncludeInput } from '../application/interfaces/Allocation';
import { DatabaseIncludeInput } from '../application/interfaces/Database';
import { NestIncludeInput } from '../application/interfaces/Nest';
import { NodeIncludeInput } from '../application/interfaces/Node';
import { ServerIncludesInput } from '../application/interfaces/Server';
import { UserIncludeInput } from '../application/interfaces/User';
export default function makeIncludes(options: DatabaseIncludeInput | ServerIncludesInput | AllocationIncludeInput | DatabaseIncludeInput | NestIncludeInput | NodeIncludeInput | UserIncludeInput | undefined): string;
