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
exports.IsEmailAlreadyExist = exports.IsEmailAlreadyExistConstraint = void 0;
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const database_constant_1 = require("../../database/database.constant");
let IsEmailAlreadyExistConstraint = (() => {
    var _a;
    let IsEmailAlreadyExistConstraint = class IsEmailAlreadyExistConstraint {
        constructor(userModel) {
            this.userModel = userModel;
        }
        validate(email, args) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.userModel.find({ email }).select('_id').limit(1).then(user => !!user);
            });
        }
    };
    IsEmailAlreadyExistConstraint = __decorate([
        class_validator_1.ValidatorConstraint({ async: true }),
        common_1.Injectable(),
        __param(0, common_1.Inject(database_constant_1.getCollectionToken(database_constant_1.BnCollections.User))),
        __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
    ], IsEmailAlreadyExistConstraint);
    return IsEmailAlreadyExistConstraint;
})();
exports.IsEmailAlreadyExistConstraint = IsEmailAlreadyExistConstraint;
function IsEmailAlreadyExist(validationOptions) {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsEmailAlreadyExistConstraint,
        });
    };
}
exports.IsEmailAlreadyExist = IsEmailAlreadyExist;
//# sourceMappingURL=is-email-already-exist.validator.js.map