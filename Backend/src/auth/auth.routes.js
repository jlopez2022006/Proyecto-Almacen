import { Router } from "express";
import { check } from "express-validator";
import { register } from "./auth.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { existeEmail } from "../helpers/db-validators.js";

const router = Router()

router.post('/register', 
    [
        check('email', 'Este no es un correo válido').isEmail(),
        check('email').custom(existeEmail),
        check('username','El username es obligatorio').not().isEmpty(),
        check('password','El password es obligatorio').not().isEmpty(),
        check('password','El password debe de ser mayor a 6 caracteres').isLength({min:6,}),
        validarCampos
    ], register)

export default router;