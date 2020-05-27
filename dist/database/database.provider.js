"use strict";
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
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const database_constant_1 = require("./database.constant");
const app_config_1 = require("../app.config");
exports.databaseProviders = [
    {
        provide: database_constant_1.DatabaseConstants.dbToken,
        useFactory: () => __awaiter(void 0, void 0, void 0, function* () {
            mongoose.Promise = bluebird;
            mongoose.set('debug', app_config_1.isDevMode);
            return yield mongoose.connect(app_config_1.mongoDbUri, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
        }),
    },
];
//# sourceMappingURL=database.provider.js.map