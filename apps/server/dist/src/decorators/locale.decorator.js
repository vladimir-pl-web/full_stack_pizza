"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaleParam = void 0;
const common_1 = require("@nestjs/common");
exports.LocaleParam = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const locale = request.locale;
    if (!locale) {
        throw new common_1.BadRequestException('Locale was not resolved by middleware');
    }
    return locale;
});
