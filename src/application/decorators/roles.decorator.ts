import { SetMetadata } from '@nestjs/common';

import { Role } from '@application/enums/roles';
import { envs } from '@infrastructure/config/envs';

export const ROLES_KEY = envs.DECORATOR_ROLES_KEY;
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
