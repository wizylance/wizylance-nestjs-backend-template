import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';

import { CreateUserDto, RequestTokenDto } from './dto';
import { JwtPayload } from './interface/jwt-payload.interface';
import { ValidateRO, ValidationUserRO } from './interface/validate.interface';
import { tokenExpired } from '../../app.config';
import { BnCollections, getCollectionToken } from '@bn-database/database.constant';
import { RequestUserAttachmentInterface } from './interface/request-user-attachment.interface';

@Injectable()
export class AuthService {
  constructor(@Inject(getCollectionToken(BnCollections.User)) private readonly userModel: Model,
              private readonly jwtService: JwtService) {
  }

  async validateUserByPassword(requestTokenDto: RequestTokenDto): Promise<ValidateRO> {
    const userToAttempt = await this.userModel.findOne({ email: requestTokenDto.email }).select({
      email: 1,
      password: 1,
      role: 1,
    }).exec();
    if (userToAttempt == null) {
      throw new NotFoundException();
    }
    const isMatch = await userToAttempt.checkPassword(requestTokenDto.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    return new Promise((resolve) => {
      resolve(this.buildValidationRO(userToAttempt));
    });
  }

  async getValidatedUserById(id): Promise<ValidationUserRO> {
    const user = await this.userModel.findById(id);
    return this.buildUserRO(user);
  }

  async createUser(userDto: CreateUserDto): Promise<ValidateRO> {
    const newUser = new this.userModel(userDto);
    await newUser.save();
    return this.buildValidationRO(newUser);
  }

  async validateUser(payload: JwtPayload): Promise<RequestUserAttachmentInterface> {
    const user = await this.userModel.findOne({ email: payload.email }).select('fullName role email').exec();
    return {
      _id: user._id,
      email: user.email,
      name: user.fullName,
      role: user.role,
    };
  }

  buildValidationRO(user) {
    const jwt = this.createJwtPayload(user);
    return {
      token: jwt,
      expiredIn: tokenExpired,
      user: this.buildUserRO(user),
    };
  }

  private buildUserRO(user): ValidationUserRO {
    return {
      email: user.email,
      role: user.role,
      isFirstTimeLogin: user.isFirstTimeLogin,
    };
  }

  private createJwtPayload(user) {
    const data: JwtPayload = {
      email: user.email,
    };
    return this.jwtService.sign(data);
  }
}
