import Router from 'express';
import {check} from 'express-validator'
import categoriaController from '../controlles/categoria.js';
import validadorCampos from '../middlewares/validar-campos.js'
import existeCategoriaById from '../helpers/categoria.js'
import existeCategoriaByNombre from '../helpers/categoria.js'
import {validarJWT} from '../middlewares/validar-jwt.js'
import validarRoles from '../middlewares/validar_rol.js'

const router = Router();

router.get('/',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'), 
     validadorCampos
], categoriaController.categoriaGet);

router.get('/:id', [
     validarJWT,
    validarRoles('ALMACENISTA_ROL'), 
     check('id', 'No es valido').isMongoId(),
     check('id').custom(existeCategoriaById),
     validadorCampos

], categoriaController.categoriaGetById);

router.post('/', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'), 
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeCategoriaByNombre),
    validadorCampos

], categoriaController.categoriaPost);

router.put('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'), 
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    check('nombre').custom(existeCategoriaByNombre),
    validadorCampos
], categoriaController.categoriaPut);

router.put('/activar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'), 
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validadorCampos
], categoriaController.categoriaPutActivar);

router.get('/desactivar/:id', [
    validarRoles('ALMACENISTA_ROL'), 
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validadorCampos
], categoriaController.categoriaPutDesactivar);

router.delete('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'), 
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validadorCampos
], categoriaController.categoriaPutDelete)

export default router;

// import mirouter  from 'express';
// import categoriaControlles from '../controlles/categoria.js';
// import { existeCategoriaById, existeCategoriaByIdNombre } from '../helpers/categoria.js';
// import { validarCampos } from '../middlewares/validar-campos.js';
// import {validarJWT} from '../middlewares/validar-jwt.js';
// import validador from 'express-validator';// DESCARGAR EXPRESS-VALIDATOR, consola=>(npm i express-validator)
// import validarRoles from '../middlewares/validar_rol.js'

// const {check}=validador
// const {Router} = mirouter;
// const router= Router();

//  router.get('/',[
//     validarJWT,
//     validarRoles('ALMACENISTA_ROL','ADMIN_ROL','VENDEDOR_ROL'),
//     validarCampos
//  ],categoriaControlles.categoriaGet);   

//  router.get('/:id',[
//     validarJWT,
//    //  validarRoles('ALMACENISTA_ROL','ADMIN_ROL','VENDEDOR_ROL'),
//     check('id','No es un ID valido').isMongoId(),
//     check('id').custom(existeCategoriaById),
//     validarCampos
//  ],categoriaControlles.categoriaGetById); 

// router.post('/',[
//     validarJWT,
//    //  validarRoles('ALMACENISTA_ROL','ADMIN_ROL','VENDEDOR_ROL'),
//     check('nombre','el nombre es obligatorio').not().isEmpty(),
//     check('nombre').custom(existeCategoriaByIdNombre),
//     validarCampos
// ],categoriaControlles.categoriaPost);

// // router.post('/login',)

// router.put('/:id',[
//     validarJWT,
//    //  validarRoles('ALMACENISTA_ROL','ADMIN_ROL','VENDEDOR_ROL'),
//     check('id','No es un ID valido').isMongoId(),
//     check('id').custom(existeCategoriaById),
//     check('nombre').custom(existeCategoriaByIdNombre),
//     validarCampos
//  ],categoriaControlles.categoriaPut);

// router.put('/activar/:id',[
//     validarJWT,
//    //  validarRoles('ALMACENISTA_ROL','ADMIN_ROL','VENDEDOR_ROL'),
//     check('id','No es un ID valido').isMongoId(),
//     check('id').custom(existeCategoriaById),
//     validarCampos
//  ],categoriaControlles.categoriaPutActivar);

// router.put('/desactivar/:id',[
//     validarJWT,
//    //  validarRoles('ALMACENISTA_ROL','ADMIN_ROL','VENDEDOR_ROL'),
//     check('id','No es un ID valido').isMongoId(),
//     check('id').custom(existeCategoriaById),
//     validarCampos
//  ],categoriaControlles.categoriaPutDesactivar);

// router.delete('/:id',[
//     validarJWT,
//    //  validarRoles('ALMACENISTA_ROL','ADMIN_ROL','VENDEDOR_ROL'),
//     check('id','No es un ID valido').isMongoId(),
//     check('id').custom(existeCategoriaById),
//     validarCampos
//  ],categoriaControlles.categoriaDelete);

// export default router;