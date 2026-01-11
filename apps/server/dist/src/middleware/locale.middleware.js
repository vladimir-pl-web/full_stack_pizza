"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaleMiddleware = void 0;
const common_1 = require("@nestjs/common");
const ALLOWED_LOCALES = ['en', 'lv', 'ru', 'nl'];
let LocaleMiddleware = class LocaleMiddleware {
    use(req, res, next) {
        const parts = req.originalUrl.split('/').filter(Boolean);
        const localeFromPath = parts[1];
        if (!localeFromPath || !ALLOWED_LOCALES.includes(localeFromPath)) {
            // If locale is missing or not supported, may be default locale == en?
            throw new common_1.BadRequestException(`Unsupported locale: ${localeFromPath ?? ''}`);
        }
        req.locale = localeFromPath;
        next();
    }
};
exports.LocaleMiddleware = LocaleMiddleware;
exports.LocaleMiddleware = LocaleMiddleware = __decorate([
    (0, common_1.Injectable)()
], LocaleMiddleware);
