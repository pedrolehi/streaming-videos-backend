import { database } from "./../database";
import AdminJs from "adminJs";
import AdminJsExpress from "@adminjs/express";
import AdminJsSequelize from "@adminjs/sequelize";
import { adminJsResources } from "./resources";
import { locale } from "./locale";
import { dashbosrdOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authentication";
import session from "express-session";
import connectSession from "connect-session-sequelize";
import { ADMINJS_COOKIE_PASSWORD } from "../config/enviroment";

const SequelizeStore = connectSession(session.Store);
const store = new SequelizeStore({ db: database });
store.sync();

AdminJs.registerAdapter(AdminJsSequelize);

export const adminJs = new AdminJs({
    databases: [database],
    rootPath: "/admin",
    resources: adminJsResources,
    branding: brandingOptions,
    locale: locale,
    dashboard: dashbosrdOptions,
});

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
    adminJs,
    authenticationOptions,
    null,
    {
        resave: false,
        saveUninitialized: false,
        store: store,
        secret: ADMINJS_COOKIE_PASSWORD,
    }
);
