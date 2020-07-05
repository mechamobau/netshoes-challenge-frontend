"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const product_routes_1 = tslib_1.__importDefault(require("./entities/product/product.routes"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('/product', product_routes_1.default);
const PORT = process.env.PORT || 8000;
const DIRNAME = process.env.DIRNAME || '127.0.0.1';
app.listen(PORT, () => {
    console.log(`🚀 Server listening at http://${DIRNAME}:${PORT}`);
});
//# sourceMappingURL=main.js.map