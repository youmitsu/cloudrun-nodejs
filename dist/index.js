"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const app_1 = require("./app");
const port = 8080;
const app = (0, express_1.default)();
const router = (0, express_2.Router)();
router.get('/', app_1.hello);
app.use(router);
app.listen(port, () => {
    console.log(`holly-sample: listening on port ${port}`);
});
//# sourceMappingURL=index.js.map