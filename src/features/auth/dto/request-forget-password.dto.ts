import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, IsUrl } from 'class-validator';

export class RequestForgetPasswordDto {
  @ApiModelProperty()
  @IsEmail()
  readonly email: string;

  @ApiModelProperty()
  @IsUrl()
  readonly endpoint: string;
}
