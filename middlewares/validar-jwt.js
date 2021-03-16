import jsonWebToken from 'jsonwebtoken'

const generarTokenJWT=(uid='')=>{

    return new Promise(()=>{


    }
    )}

    async function checkToken(token){
        let_id=null;

try {
    const {__id}= await jsonWebToken.decode(token)
    __id=_id
} catch (error) {

    return false;
    
}
// const existeUsuario=

}

export {generarTokenJWT};