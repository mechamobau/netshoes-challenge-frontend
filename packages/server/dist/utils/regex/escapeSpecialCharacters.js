"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Function that return a string based on input without special characters(e.g.: -{}()*+?.,)
 * @param text - String that contains special characters
 */
const escapeSpecialCharacters = (text) => text.replace(/[-[\]{}()*+?.,\\^$|#]/g, '');
exports.default = escapeSpecialCharacters;
//# sourceMappingURL=escapeSpecialCharacters.js.map