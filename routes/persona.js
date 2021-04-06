import { Router } from 'express'
import personaControlles from '../controlles/persona.js'

const router = Router();

router.get('/', personaControlles.personaGet)

router.get('/:id', personaControlles.personaGetById)

router.post('/', personaControlles.personaPost)

router.put('/:id', personaControlles.personaPut)

router.put('/activar/:id', personaControlles.personaPutActivar)

router.put('/desactivar/:id', personaControlles.personaPutDesactivar)

router.delete('/:id', personaControlles.personaPutDelete)


export default router