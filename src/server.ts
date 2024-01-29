import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { database } from "./database";
import { adminJs, adminJsRouter } from "./adminjs";
import { router } from "./routes";
import exp from "constants";

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(adminJs.options.rootPath, adminJsRouter);
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    database.authenticate().then(() => {
        console.log("DB connected.");
    });
    console.log(`Server started at port ${PORT}`);
});
