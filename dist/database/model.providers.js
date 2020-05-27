"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelProviders = void 0;
const database_constant_1 = require("./database.constant");
const user_schema_1 = require("./schema/user.schema");
exports.modelProviders = [
    {
        provide: database_constant_1.getCollectionToken(database_constant_1.BnCollections.User),
        useFactory: (connection) => connection.model(database_constant_1.getCollectionName(database_constant_1.BnCollections.User), user_schema_1.UserSchema),
        inject: [database_constant_1.DatabaseConstants.dbToken],
    },
];
//# sourceMappingURL=model.providers.js.map