"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const product_controller_1 = tslib_1.__importDefault(require("./product.controller"));
const router = express_1.Router();
router.get('/', product_controller_1.default.index);
router.get('/search', product_controller_1.default.search);
router.get('/:id', product_controller_1.default.show);
exports.default = router;
//# sourceMappingURL=product.routes.js.map