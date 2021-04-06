import Categoria from "../models/categoria.js";

const categoriaController = {
    categoriaGet: async (req, res) => {
        const value = req.query.value;
        const categoria = await Categoria

            //  .sort({'nombre':-1})
            .find({

                $or: [

                    { nombre: new RegExp(value, 'i') },
                    { descripcion: new RegExp(value, 'i') }

                ]
            })
        //  .sort({'createdAt':-1})
        // }
        res.json({
            categoria
        })
    },


    categoriaGetById: async (req, res) => {
        const value = req.query.value;

        const { id } = req.params;

        const categoria = await Categoria.findOne({ _id: id })

        //  .sort({'nombre':-1})


        // //  .sort({'createdAt':-1})
        // // }

        res.json({
            categoria
        })
    },

    categoriaPost: async (req, res) => {
        const { nombre, descripcion } = req.body;
        const categoria = new Categoria({ nombre, descripcion });

        await categoria.save();

        res.json({
            categoria
        })
    },

    categoriaPut: async (req, res) => {
        const { id } = req.params
        const { _id , estado, createAt, _v, ...resto } = req.body

        const categoria = await categoria.findByIdAndUpdate(id, resto);



        res.json({
            categoria
        })

    },

    categoriaPutActivar: async (req, res) => {
        const { id } = req.params
        const categoria = await categoria.findByIdAndUpdate(id, { estado: 1 });
        res.json({
            categoria
        })

    },

    categoriaPutDesactivar: async (req, res) => {
        const { id } = req.params
        const categoria = await categoria.findByIdAndUpdate(id, { estado: 0 });
        res.json({
            categoria
        })

    },

    categoriaPutDelete: async (req, res) => {
        const { id } = req.params
        const categoria = await categoria.findByIdAndDelete(id);
        res.json({
            categoria
        })

    },

}

export default categoriaController
