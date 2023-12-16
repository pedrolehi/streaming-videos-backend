import express from "express";
import { categoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
import { episodesController } from "./controllers/episodesController";
import { authController } from "./controllers/authController";

const router = express.Router();

// register
router.post("/auth/register", authController.register);
// login
router.post("/auth/login", authController.login);

// Categories
router.get("/categories", categoriesController.index);
router.get("/categories/:id", categoriesController.show);

// Courses
router.get("/courses/featured", coursesController.featured);
router.get("/courses/newest", coursesController.newest);
router.get("/courses/search", coursesController.search);
router.get("/courses/:id", coursesController.show);

// Episodes
router.get("/episodes/stream", episodesController.stream);

export { router };
