"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const bcrypt = require("bcrypt");
const user_role_enum_1 = require("../../shared/enums/user-role.enum");
exports.UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    fullName: {
        type: String,
    },
    role: { type: Number, enum: Object.values(user_role_enum_1.UserRole), default: user_role_enum_1.UserRole.User },
});
exports.UserSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, (hErr, hash) => {
            if (hErr) {
                return next(hErr);
            }
            user.password = hash;
            next();
        });
    });
});
exports.UserSchema.methods.checkPassword = function (attempt) {
    const user = this;
    return bcrypt.compare(attempt, user.password);
};
//# sourceMappingURL=user.schema.js.map