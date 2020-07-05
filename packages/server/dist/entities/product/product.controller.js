"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const files_repository_1 = tslib_1.__importDefault(require("../../repositories/files.repository"));
const escapeSpecialCharacters_1 = tslib_1.__importDefault(require("../../utils/regex/escapeSpecialCharacters"));
const normalizeTextAccents_1 = tslib_1.__importDefault(require("../../utils/string/normalizeTextAccents"));
exports.default = {
    index: async (_, res) => {
        try {
            const localesRepository = new files_repository_1.default('products');
            res.send({ data: await localesRepository.get() });
        }
        catch (err) {
            res.status(500).send({
                data: {
                    message: 'Error on reading locale list',
                    stacktrace: err
                }
            });
        }
    },
    show: async (req, res) => {
        try {
            const localesRepository = new files_repository_1.default('locales');
            const locales = await localesRepository.get();
            const foundLocales = locales.find(locale => `${locale.id}` === req.params.id);
            if (foundLocales) {
                res.send({
                    data: foundLocales
                });
                return;
            }
            res.status(404).send({ data: [] });
        }
        catch (err) {
            res.status(500).send({
                data: {
                    message: 'Error on reading locale list',
                    stacktrace: err
                }
            });
        }
    },
    search: async (req, res) => {
        try {
            if (!req.query.q)
                throw new Error('Missing search query in request params');
            const localesRepository = new files_repository_1.default('locales');
            const locales = await localesRepository.get();
            const querySearch = normalizeTextAccents_1.default(escapeSpecialCharacters_1.default(req.query.q));
            const foundLocales = locales.filter(({ name }) => normalizeTextAccents_1.default(name).match(new RegExp(querySearch, 'gi')));
            if (foundLocales) {
                res.send({
                    data: {
                        results: foundLocales,
                        totalCount: foundLocales.length
                    }
                });
                return;
            }
            res.status(404).send({ data: [] });
        }
        catch (err) {
            res.status(500).send({
                data: {
                    message: `${err}`
                }
            });
        }
    }
};
//# sourceMappingURL=product.controller.js.map