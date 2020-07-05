"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
class FileRepository {
    constructor(fileName) {
        this.fileName = fileName;
        this.path = path_1.resolve(__dirname, `../data/${this.fileName}.json`);
    }
    get() {
        return new Promise((resolve, reject) => {
            fs_1.readFile(this.path, (error, data) => {
                var _a;
                if (error) {
                    reject(error);
                    return;
                }
                resolve((_a = JSON.parse(data.toString())) !== null && _a !== void 0 ? _a : []);
            });
        });
    }
}
exports.default = FileRepository;
//# sourceMappingURL=files.repository.js.map