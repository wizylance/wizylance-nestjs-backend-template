"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BnCollections = exports.getCollectionName = exports.getCollectionToken = exports.DatabaseConstants = void 0;
let DatabaseConstants = (() => {
    class DatabaseConstants {
    }
    DatabaseConstants.dbToken = 'DBToken';
    return DatabaseConstants;
})();
exports.DatabaseConstants = DatabaseConstants;
function getCollectionToken(collection) {
    switch (collection) {
        case BnCollections.User:
            return 'UserToken';
    }
}
exports.getCollectionToken = getCollectionToken;
function getCollectionName(collection) {
    switch (collection) {
        case BnCollections.User:
            return 'User';
    }
}
exports.getCollectionName = getCollectionName;
var BnCollections;
(function (BnCollections) {
    BnCollections[BnCollections["User"] = 0] = "User";
})(BnCollections = exports.BnCollections || (exports.BnCollections = {}));
//# sourceMappingURL=database.constant.js.map