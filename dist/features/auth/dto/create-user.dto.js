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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const is_email_already_exist_validator_1 = require("../../../shared/validators/is-email-already-exist.validator");
let CreateUserDto = (() => {
    class CreateUserDto {
    }
    __decorate([
        swagger_1.ApiModelProperty(),
        class_validator_1.IsEmail(),
        is_email_already_exist_validator_1.IsEmailAlreadyExist({
            message: 'Email $value already exists. Choose another name.',
        }),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "email", void 0);
    __decorate([
        swagger_1.ApiModelProperty(),
        class_validator_1.Matches(/^[a-zA-Z0-9]+$/, {
            message: 'Password contains only digit and word',
        }),
        class_validator_1.MinLength(8, {
            message: 'Min length is 8 characters',
        }),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "password", void 0);
    __decorate([
        swagger_1.ApiModelProperty(),
        class_validator_1.MinLength(3, {
            message: 'Minimum length is 3 characters',
        }),
        class_validator_1.MaxLength(50, {
            message: 'Maximum length is 50 characters',
        }),
        class_validator_1.Matches(/^[a-z ]+$/i, {
            message: 'Full name contains only text',
        }),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "fullName", void 0);
    return CreateUserDto;
})();
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map