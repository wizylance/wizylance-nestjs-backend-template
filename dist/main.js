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
const core_1 = require("@nestjs/core");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const app_config_1 = require("./app.config");
const app_module_1 = require("./app.module");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
        const appVersion = `/api/${app_config_1.apiVersion}`;
        app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
        app.setGlobalPrefix(appVersion);
        app.use(helmet());
        app.use(rateLimit({
            windowMs: 5 * 60 * 1000,
            max: 1000,
        }));
        const options = new swagger_1.DocumentBuilder()
            .setTitle('B13 NestJS')
            .setDescription('Backend for B13')
            .setVersion('1.0')
            .setBasePath(appVersion)
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('swagger', app, document);
        class_validator_1.useContainer(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
        yield app.listen(app_config_1.appPort || 3000);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map