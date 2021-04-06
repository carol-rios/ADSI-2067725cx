import jsonWebToken from 'jsonwebtoken'
import existeUsuarioById from '../helpers/usuario.js';

const generarTokenJWT=(uid='')=>{

    return new Promise((resolve,reject)=>{
    checkToken()
    const payLoad={uid}
    jwt.sing(payLoad , process.env.privatekey,{
      expiresIn:'5d'
    },(err,token)=>{
        if (err) {
            reject('No se pudo generar el token')
        }else{
             resolve (token)
        }
        })
    })
    };

const validarJWT= async(req,res)=>{
const token=req.header('token')
if (!token) {
    return res.status(401).json({
        mgs:'No hay token en la peticion'
    })   
}
try {
    const{uid}=jwt.verify(token,process.env.privatekey);
    const usuario= await Usuario.findById(uid)

    if (!usuario) {
        return res.status(401).json({
            mgs:'Token no es válido'
        })
        req.usuario=usuario
    }
    if (usuario.estado === 0) {
        return res.status(401).json({
            msg: 'Token es no valido'
        })
    }

    req.usuario = usuario

    next()




} catch (error) {
    res.status(401).json({
        mgs:'token no válido'
    })
    
}
        
        }

    async function checkToken(token){
        let_id=null;

try {
    const {__id}= await jsonWebToken.decode(token)
    __id=_id
} catch (error) {

    return false;
    
}
const existeUsuario=existeUsuarioById(__id)

}

export {generarTokenJWT,validarJWT} 