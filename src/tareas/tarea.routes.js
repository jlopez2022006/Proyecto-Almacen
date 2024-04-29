import { Router } from "express";
import { check } from "express-validator";
import { tareasGet, tareasPost } from "./tarea.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js";

const router = Router()

router.get("/verTareas", tareasGet);

router.post(
    "/agregar", [
    check("nombreTarea", "El nombre de la tarea es obligatoria").not().isEmpty(),
    check("description", "La descripcion es obligatoria").not().isEmpty(),
    check("fechaDeInicio", "La fecha de inicio es obligatoria").not().isEmpty(),
    check("fechaDeCierre", "La fecha de cierre es obligatoria").not().isEmpty(),
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("lastName", "El apellido es obligatorio").not().isEmpty(),
    validarCampos
],
    tareasPost
)

export default router;