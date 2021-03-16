import mirouter  from 'express';
import categoriaControlles from '../controlles/categoria.js'
import { existeCategoriaById, existeCategoriaByIdNombre } from '../helpers/categoria.js';
import { validarCampos } from '../middlewares/validar-campos.js';
// DESCARGAR EXPRESS-VALIDATOR, consola=>(npm i express-validator)
import validador from 'express-validator'
const {check}=validador


const {Router} = mirouter;
const router= Router();

 router.get('/',categoriaControlles.categoriaGet);   

 router.get('/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
 ],categoriaControlles.categoriaGetById); 

router.post('/',[
    check('nombre','el nombre es obligatorio',).not().isEmpty(),
    check('nombre').custom(existeCategoriaByIdNombre),
    validarCampos
],categoriaControlles.categoriaPost);

router.post('/login',)

router.put('/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    check('nombre').custom(existeCategoriaByIdNombre),
    validarCampos
 ],categoriaControlles.categoriaPut);

router.put('/activar/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
 ],categoriaControlles.categoriaPutActivar);

router.put('/desactivar/:id',[
    check('id','No es un ID valido',).isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
 ],categoriaControlles.categoriaPutDesactivar);

router.delete('/:id',[
    check('id','No es un ID valido',).isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
 ],categoriaControlles.categoriaDelete);

export default router;