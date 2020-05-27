import { AuthService } from './auth.service';
import { JwtPayload } from './interface/jwt-payload.interface';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(payload: JwtPayload): Promise<import("./interface/request-user-attachment.interface").RequestUserAttachmentInterface>;
}
export {};
