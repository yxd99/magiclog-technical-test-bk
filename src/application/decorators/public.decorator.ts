import { SetMetadata } from '@nestjs/common';

import { envs } from '@infrastructure/config/envs';

export const IS_PUBLIC_KEY = envs.DECORATOR_PUBLIC_KEY;
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
