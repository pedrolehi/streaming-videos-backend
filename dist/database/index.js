"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const sequelize_1 = require("sequelize");
const enviroment_1 = require("../config/enviroment");
exports.database = new sequelize_1.Sequelize(enviroment_1.DATABASE_URL, {
    define: {
        underscored: true, //facilitates converting SQL snake_case pattern to camelCase on JS.
    },
});
