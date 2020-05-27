import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { CreateUserDto, RequestTokenDto } from './dto';
import { JwtPayload } from './interface/jwt-payload.interface';
import { ValidateRO, ValidationUserRO } from './interface/validate.interface';
import { RequestUserAttachmentInterface } from './interface/request-user-attachment.interface';
export declare class AuthService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: Model, jwtService: JwtService);
    validateUserByPassword(requestTokenDto: RequestTokenDto): Promise<ValidateRO>;
    getValidatedUserById(id: any): Promise<ValidationUserRO>;
    createUser(userDto: CreateUserDto): Promise<ValidateRO>;
    validateUser(payload: JwtPayload): Promise<RequestUserAttachmentInterface>;
    buildValidationRO(user: any): {
        token: string;
        expiredIn: any;
        user: ValidationUserRO;
    };
    private buildUserRO;
    private createJwtPayload;
}
