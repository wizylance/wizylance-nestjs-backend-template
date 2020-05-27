"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const dto_1 = require("./dto");
const user_decorator_1 = require("../../shared/decorators/user.decorator");
let AuthController = (() => {
    let AuthController = class AuthController {
        constructor(authService) {
            this.authService = authService;
        }
        requestToken(requestTokenDto) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.authService.validateUserByPassword(requestTokenDto);
            });
        }
        getValidatedUser(userId) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.authService.getValidatedUserById(userId);
            });
        }
        createUser(createUserDto) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.authService.createUser(createUserDto);
            });
        }
    };
    __decorate([
        swagger_1.ApiOperation({ title: ' Sign In ' }),
        common_1.Post('auth/login'),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [dto_1.RequestTokenDto]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "requestToken", null);
    __decorate([
        swagger_1.ApiOperation({ title: ' Get User by token ' }),
        swagger_1.ApiBearerAuth(),
        common_1.Get('auth/info'),
        common_1.UseGuards(passport_1.AuthGuard()),
        __param(0, user_decorator_1.User('_id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "getValidatedUser", null);
    __decorate([
        swagger_1.ApiOperation({ title: ' Sign Up ' }),
        common_1.Post('auth/register'),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [dto_1.CreateUserDto]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "createUser", null);
    AuthController = __decorate([
        common_1.Controller(),
        swagger_1.ApiUseTags('authentication'),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], AuthController);
    return AuthController;
})();
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map