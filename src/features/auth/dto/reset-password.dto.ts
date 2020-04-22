import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @ApiModelProperty()
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'Password contains only digit and word',
  })
  @MinLength(8, {
    message: 'Min length is 8 characters',
  })
  readonly password: string;

  @ApiModelProperty()
  @IsNotEmpty()
  readonly token: string;
}
