import express from "express";
import { sequelize } from "./database";
import { adminJs, adminJsRouter } from "./admin";

const app = express();

app.use(express.static("public")); // to serve the content in public as a static content.
app.use(adminJs.options.rootPath, adminJsRouter); // path, route

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("DB connected.");
  });
  console.log(`Server started at port ${PORT}`);
});
