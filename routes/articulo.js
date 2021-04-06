import { Router } from 'express'
import articuloControlles from '../controlles/articulo.js'
import { validarJWT } from '../middlewares/validar-jwt.js'
import validarRoles from '../middlewares/validar_rol.js'
import validadorCampos from '../middlewares/validar-campos.js'
import existeArticuloById from '../helpers/articulo.js'
import existeArticuloByNombre from '../helpers/articulo.js'
import { check } from 'express-validator'


const router = Router();

router.get('/', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    validadorCampos
], articuloControlles.articulosGet)

router.get('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeArticuloById),
    validadorCampos
], articuloControlles.articulosGet)

router.post('/', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeArticuloByNombre),
    validadorCampos

], articuloControlles.articulosPost)

router.put('/:id', [validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeArticuloById),
    check('nombre').custom(existeArticuloByNombre),
    validadorCampos

], articuloControlles.articulosPut)

router.put('/activar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeArticuloById),
    validadorCampos
], articuloControlles.articulosPutactivar)

router.put('/desactivar/:id', [
    validarRoles('ALMACENISTA_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeArticuloById),
    validadorCampos
], articuloControlles.articulosPutDesactivar)

router.delete('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeArticuloById),
    validadorCampos
], articuloControlles.articulosPutDelete)


export default router