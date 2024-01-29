import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../config/enviroment";

export const database = new Sequelize(DATABASE_URL, {
    define: {
        underscored: true, //facilitates converting SQL snake_case pattern to camelCase on JS.
    },
});
