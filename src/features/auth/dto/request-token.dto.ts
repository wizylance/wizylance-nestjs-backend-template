import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, Matches } from 'class-validator';

export class RequestTokenDto {
  @ApiModelProperty()
  @IsEmail()
  readonly email: string;

  @ApiModelProperty()
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'Password contains only digit and word',
  })
  readonly password: string;
}
