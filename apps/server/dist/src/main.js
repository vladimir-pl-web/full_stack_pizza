"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const prisma_service_1 = require("../prisma/prisma.service");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const prismaService = app.get(prisma_service_1.PrismaService);
    const PORT = process.env.PORT ?? 4200;
    prismaService.enableShutdownHooks(app);
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: 'http://localhost:3000',
        credentials: true
    });
    await app.listen(PORT);
}
bootstrap();
