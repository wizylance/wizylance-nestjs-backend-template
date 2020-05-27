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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("mongoose");
const app_config_1 = require("../../app.config");
const database_constant_1 = require("@bn-database/database.constant");
let AuthService = (() => {
    var _a;
    let AuthService = class AuthService {
        constructor(userModel, jwtService) {
            this.userModel = userModel;
            this.jwtService = jwtService;
        }
        validateUserByPassword(requestTokenDto) {
            return __awaiter(this, void 0, void 0, function* () {
                const userToAttempt = yield this.userModel.findOne({ email: requestTokenDto.email }).select({
                    email: 1,
                    password: 1,
                    role: 1,
                }).exec();
                if (userToAttempt == null) {
                    throw new common_1.NotFoundException();
                }
                const isMatch = yield userToAttempt.checkPassword(requestTokenDto.password);
                if (!isMatch) {
                    throw new common_1.UnauthorizedException();
                }
                return new Promise((resolve) => {
                    resolve(this.buildValidationRO(userToAttempt));
                });
            });
        }
        getValidatedUserById(id) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield this.userModel.findById(id);
                return this.buildUserRO(user);
            });
        }
        createUser(userDto) {
            return __awaiter(this, void 0, void 0, function* () {
                const newUser = new this.userModel(userDto);
                yield newUser.save();
                return this.buildValidationRO(newUser);
            });
        }
        validateUser(payload) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield this.userModel.findOne({ email: payload.email }).select('fullName role email').exec();
                return {
                    _id: user._id,
                    email: user.email,
                    name: user.fullName,
                    role: user.role,
                };
            });
        }
        buildValidationRO(user) {
            const jwt = this.createJwtPayload(user);
            return {
                token: jwt,
                expiredIn: app_config_1.tokenExpired,
                user: this.buildUserRO(user),
            };
        }
        buildUserRO(user) {
            return {
                email: user.email,
                role: user.role,
                isFirstTimeLogin: user.isFirstTimeLogin,
            };
        }
        createJwtPayload(user) {
            const data = {
                email: user.email,
            };
            return this.jwtService.sign(data);
        }
    };
    AuthService = __decorate([
        common_1.Injectable(),
        __param(0, common_1.Inject(database_constant_1.getCollectionToken(database_constant_1.BnCollections.User))),
        __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, jwt_1.JwtService])
    ], AuthService);
    return AuthService;
})();
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map