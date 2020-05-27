import { AuthService } from './auth.service';
import { CreateUserDto, RequestTokenDto } from './dto';
import { ValidateRO, ValidationUserRO } from './interface/validate.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    requestToken(requestTokenDto: RequestTokenDto): Promise<ValidateRO>;
    getValidatedUser(userId: any): Promise<ValidationUserRO>;
    createUser(createUserDto: CreateUserDto): Promise<ValidateRO>;
}
