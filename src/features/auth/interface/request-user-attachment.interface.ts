import { UserRole } from '@bn-enum/user-role.enum';

export interface RequestUserAttachmentInterface {
  _id: string;
  email: string;
  name: string;
  role: UserRole;
}
