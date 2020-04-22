import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto, RequestTokenDto } from './dto';
import { ValidateRO, ValidationUserRO } from './interface/validate.interface';
import { User } from '@bn-decorator/user.decorator';

@Controller()
@ApiUseTags('authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @ApiOperation({ title: ' Sign In ' })
  @Post('auth/login')
  async requestToken(@Body() requestTokenDto: RequestTokenDto): Promise<ValidateRO> {
    return await this.authService.validateUserByPassword(requestTokenDto);
  }

  @ApiOperation({ title: ' Get User by token ' })
  @ApiBearerAuth()
  @Get('auth/info')
  @UseGuards(AuthGuard())
  async getValidatedUser(@User('_id') userId): Promise<ValidationUserRO> {
    return await this.authService.getValidatedUserById(userId);
  }

  @ApiOperation({ title: ' Sign Up ' })
  @Post('auth/register')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<ValidateRO> {
    return await this.authService.createUser(createUserDto);
  }
}
