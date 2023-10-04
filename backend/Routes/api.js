import express from "express";
import usersRoutes from "./users.js";
import cotizaciones from "./cotizaciones.js"
import checkToken from "../utils/middlewares.js";

const router = express.Router();
//router.use('',checkToken,usersRoutes);
router.use("", usersRoutes);
router.use("", checkToken, cotizaciones);
 //router.use("",cotizaciones);

export default router;
