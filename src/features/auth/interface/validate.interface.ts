import { UserRole } from '@bn-enum/user-role.enum';

export interface ValidationUserRO {
  email: string;
  role: UserRole;
  isFirstTimeLogin: boolean;
}

export interface ValidateRO {
  token: string;
  expiredIn: number;
  user: ValidationUserRO;
}
