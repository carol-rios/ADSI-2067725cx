import validador from 'express-validator'
const {validationResult}=validador

const validarCampos = (req, res, next) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }
    next();
}
export { validarCampos }