"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDevMode = exports.apiVersion = exports.tokenExpired = exports.appPort = exports.jwtSecret = exports.mongoDbUri = void 0;
const config = require("config");
exports.mongoDbUri = process.env.DB_CONN || config.get('Database.dbConfig.uri');
exports.jwtSecret = process.env.JWT_SECRET || config.get('Secret.jwtKey');
exports.appPort = process.env.PORT || config.get('Application.port');
exports.tokenExpired = process.env.TOKEN_EXPIRED || config.get('Application.tokenExpired');
exports.apiVersion = process.env.API_VERSION || config.get('Application.version');
exports.isDevMode = process.env.NODE_ENV === 'dev';
//# sourceMappingURL=app.config.js.map