import Persona from "../models/persona.js"

const personaController = {

    personaGet: async (req, res) => {

        const value = req.query.value
        const persona = await Persona.find({
                $or: [
                    { tipoPersona: new RegExp(value, 'i') },
                ]
            })
            .sort({ 'tipoPersona': -1 })
        res.json({
            persona
        })
    },

  
    personaGetById: async (req, res) => {
        const { id } = req.params;
        const persona = await Persona.findOne({ _id: id })

        res.json({
            persona
        })
    },


    personaPost: async (req, res) => {
        try {
            const { tipoPersona, nombre, tipoDocumento, numeroDocumento, direccion, telefono, email } = req.body;
            const persona = new Persona({ tipoPersona, nombre, tipoDocumento, numeroDocumento, direccion, telefono, email });

            await persona.save();
            res.json({
                persona
            })
        } catch (error) {
            console.log(`Catch ${error}`);
        }

    },
   
    personaPut: async (req, res) => {
        const { id } = req.params
        const { _id, estado, createAt, __v, ...resto } = req.body

        const persona = await Persona.findByIdAndUpdate(id, resto);

        res.json({
            persona
        })

    },

    personaPutActivar: async (req, res) => {
        const { id } = req.params
        const persona = await Persona.findByIdAndUpdate(id, { estado: 1 });
        res.json({
            persona
        })

    },

    personaPutDesactivar: async (req, res) => {
        const { id } = req.params
        const persona = await Persona.findByIdAndUpdate(id, { estado: 0 });
        res.json({
            persona
        })

    },

   personaPutDelete: async (req, res) => {
        const { id } = req.params
        const persona = await Persona.findByIdAndDelete(id,);
        res.json({
            persona
        })

    },
}
export default personaController