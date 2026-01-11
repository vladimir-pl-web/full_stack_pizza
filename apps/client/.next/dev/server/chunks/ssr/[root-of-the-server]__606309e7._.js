module.exports = [
"[project]/apps/client/app/favicon.ico.mjs { IMAGE => \"[project]/apps/client/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/client/app/favicon.ico.mjs { IMAGE => \"[project]/apps/client/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/apps/client/app/[locale]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/client/app/[locale]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/apps/client/app/api/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "instance",
    ()=>instance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
const instance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:4200/api/"),
    withCredentials: true
});
}),
"[project]/apps/client/app/api/endpoints.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Endpoints",
    ()=>Endpoints
]);
var Endpoints = /*#__PURE__*/ function(Endpoints) {
    Endpoints["AUTH"] = "/auth";
    Endpoints["USERS"] = "/users";
    Endpoints["PIZZAS"] = "/pizzas";
    Endpoints["INGREDIENTS"] = "/ingredients";
    Endpoints["ORDERS"] = "/orders";
    Endpoints["CATALOG"] = "/catalog";
    return Endpoints;
}({});
}),
"[project]/apps/client/app/api/catalog.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/app/api/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$app$2f$api$2f$endpoints$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/app/api/endpoints.ts [app-rsc] (ecmascript)");
;
;
class CatalogServices {
    async getCatalogData(locale) {
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instance"])({
            url: `${locale}${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$app$2f$api$2f$endpoints$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Endpoints"].CATALOG}/base`,
            method: 'GET'
        });
        return data.data;
    }
}
const Catalog = new CatalogServices();
const __TURBOPACK__default__export__ = Catalog;
}),
"[project]/apps/client/app/api/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$app$2f$api$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/app/api/catalog.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/apps/client/app/api/catalog.ts [app-rsc] (ecmascript) <export default as Catalog>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Catalog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$app$2f$api$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$app$2f$api$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/app/api/catalog.ts [app-rsc] (ecmascript)");
}),
"[project]/apps/client/app/[locale]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/client/components/shared/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/components/shared/container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$filters$2f$filters$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/components/shared/filters/filters.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$product$2f$productGroupList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/components/shared/product/productGroupList.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$title$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/components/shared/title.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$topBar$2f$topBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/components/shared/topBar/topBar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$filters$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/components/shared/filters/dummy.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/lib/i18n/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/lib/i18n/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$app$2f$api$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/client/app/api/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$app$2f$api$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Catalog$3e$__ = __turbopack_context__.i("[project]/apps/client/app/api/catalog.ts [app-rsc] (ecmascript) <export default as Catalog>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
async function Home({ params }) {
    const { locale } = await params;
    const { getCatalogData } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$app$2f$api$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Catalog$3e$__["Catalog"];
    const safeLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLocale"])(locale) ? locale : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultLocale"])();
    const t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServerTranslation"])(safeLocale);
    const data = await getCatalogData(safeLocale);
    console.log('data', data.data.categories);
    const { categories } = data.data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-2 flex flex-col items-center justify-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$title$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Title"], {
                    text: t('title.all'),
                    size: "lg",
                    className: "text-left font-extrabold"
                }, void 0, false, {
                    fileName: "[project]/apps/client/app/[locale]/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/client/app/[locale]/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$topBar$2f$topBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TopBar"], {}, void 0, false, {
                fileName: "[project]/apps/client/app/[locale]/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
                className: "flex flex-row gap-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$filters$2f$filters$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Filters"], {}, void 0, false, {
                        fileName: "[project]/apps/client/app/[locale]/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$product$2f$productGroupList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductGroupList"], {
                                    categoryId: "1",
                                    title: "Пиццы",
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$filters$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pizzaItems"]
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/app/[locale]/page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$product$2f$productGroupList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductGroupList"], {
                                    categoryId: "2",
                                    title: "Комбо",
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$filters$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pizzaItems"]
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/app/[locale]/page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$product$2f$productGroupList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductGroupList"], {
                                    categoryId: "3",
                                    title: "Пиццы",
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$filters$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pizzaItems"]
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/app/[locale]/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$product$2f$productGroupList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductGroupList"], {
                                    categoryId: "4",
                                    title: "Комбо",
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$filters$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pizzaItems"]
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/app/[locale]/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$product$2f$productGroupList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductGroupList"], {
                                    categoryId: "5",
                                    title: "Пиццы",
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$filters$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pizzaItems"]
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/app/[locale]/page.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$product$2f$productGroupList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductGroupList"], {
                                    categoryId: "6",
                                    title: "Комбо",
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$components$2f$shared$2f$filters$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pizzaItems"]
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/app/[locale]/page.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/client/app/[locale]/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/client/app/[locale]/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/app/[locale]/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/client/app/[locale]/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/client/app/[locale]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/client/app/[locale]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__606309e7._.js.map