import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../enums/user-role.enum';

export const Permissions = (role: UserRole) => SetMetadata('permission', role);
