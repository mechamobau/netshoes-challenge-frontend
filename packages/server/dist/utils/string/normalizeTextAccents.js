"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Function that return a string without accents. ex: "São Paulo" as input
 * returns "Sao Paulo"
 * @param text  - String that will be normalized
 */
const normalizeTextAccents = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
exports.default = normalizeTextAccents;
//# sourceMappingURL=normalizeTextAccents.js.map