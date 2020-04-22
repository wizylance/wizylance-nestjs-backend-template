import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, Matches, MaxLength, MinLength } from 'class-validator';
import { IsEmailAlreadyExist } from '@bn-validator/is-email-already-exist.validator';

export class CreateUserDto {
  @ApiModelProperty()
  @IsEmail()
  @IsEmailAlreadyExist({
    message: 'Email $value already exists. Choose another name.',
  })
  readonly email: string;

  @ApiModelProperty()
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'Password contains only digit and word',
  })
  @MinLength(8, {
    message: 'Min length is 8 characters',
  })
  readonly password: string;

  @ApiModelProperty()
  @MinLength(3, {
    message: 'Minimum length is 3 characters',
  })
  @MaxLength(50, {
    message: 'Maximum length is 50 characters',
  })
  @Matches(/^[a-z ]+$/i, {
    message: 'Full name contains only text',
  })
  readonly fullName: string;
}
