"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogController = void 0;
const common_1 = require("@nestjs/common");
const locale_decorator_1 = require("../decorators/locale.decorator");
const locale_guard_1 = require("../guards/locale.guard");
const catalog_service_1 = require("./catalog.service");
let CatalogController = class CatalogController {
    catalogService;
    constructor(catalogService) {
        this.catalogService = catalogService;
    }
    async getBaseCatalog(lang) {
        return this.catalogService.getBase(lang);
    }
};
exports.CatalogController = CatalogController;
__decorate([
    (0, common_1.Get)('base'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, locale_decorator_1.LocaleParam)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "getBaseCatalog", null);
exports.CatalogController = CatalogController = __decorate([
    (0, common_1.Controller)(':locale/catalog'),
    (0, common_1.UseGuards)(locale_guard_1.LocaleGuard),
    __metadata("design:paramtypes", [catalog_service_1.CatalogService])
], CatalogController);
