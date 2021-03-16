import { generarTokenJWT } from '../middlewares/validar-jwt.js';
import Usuario from '../models/usuario.js'
import bcryptjs from 'bcryptjs' // =>DESCARGAR.....
import jsonWebToken from 'jsonwebtoken' // =>DESCARGAR.....(npm i jsonwebtoken)


const usuarioControlles = {

    usuarioGet: async (req, res) => {
        const query = req.query.value;
        const usuarios = await Usuario.find();

        $or: [
            { nombre: new RegExp(query, 'i') },
            { email: new RegExp(query, 'i') },
            { rol: new RegExp(query, 'i') }
        ]

        res.json({
            categoria
        })
    },

    usuarioGetById: async (req, res) => {

        const { id } = req.params;

        const usuario = await usuario.findById({ id })

        res.json({
            categoria
        })
    },

    usuarioPost: async (req, res) => {
        const { nombre, email, password, rol } = req.body;
        const usuario = Usuario({ nombre, email, password, rol });

        // ENCRIPTACION DE CONRASEÑA CON 'bcryptjs'......

        //   const salt=bcryptjs.genSaltSync();
        // usuario.password=bcryptjs.hashSync(password,salt);

        await usuario.save();

        res.json({
            usuario
        })
    },

  login: async (req, res) => {

        const { email, password } = req.body;

        const usuario = await Usuario.findOne({ email })

        if (!usuario) {
            return res.json({
                msg: 'usuario/password no son correctos email'
            })

        }
        if (usuario.estado === 0) {
            return res.json({
                msg: 'usuario/password no son correctos estado'
            })
        }
        const validatePassword = bcryptjs.compareSync(password, usuario.password);

        if (!validatePassword) {
            return res.json({
                msg: 'usuario/password no son correctos password'
            })
        }

        generarTokenJWT

        return res.json({
            usuario
        })


    },  

    usuarioPut: async (req, res) => {
        const { id } = req.params
        const { _id, createAt, estado, _v, email, rol, pasword, ...resto } = req.body

        if (password) {
              const salt=bcryptjs.genSaltSync();
            resto.password=bcryptjs.hashSync(password,salt);   

        }

        const usuario = await Usuario.findByIdAndUpdate(id, resto);

        res.json({
            usuario
        })

    },

    usuarioPutActivar: async (req, res) => {
        const { id } = req.params
        const usuario = await usuario.findByIdAndUpdate(id, { estado: 1 });

        res.json({ usuario })

    },

    usuarioPutDesactivar: async (req, res) => {
        const { id } = req.params
        const usuario = await usuario.findByIdAndUpdate(id, { estado: 0 });
        res.json({ usuario })



    }
}

export default usuarioControlles






