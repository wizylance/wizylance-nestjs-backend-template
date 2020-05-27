"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const app_config_1 = require("../../app.config");
exports.User = common_1.createParamDecorator((data, req) => {
    if (!!req.user) {
        return !!data ? req.user[data] : req.user;
    }
    const token = req.headers.authorization ? req.headers.authorization.split(' ') : null;
    if (token && token[1]) {
        const decoded = jwt.verify(token[1], app_config_1.jwtSecret);
        return !!data ? decoded[data] : decoded.user;
    }
});
//# sourceMappingURL=user.decorator.js.map