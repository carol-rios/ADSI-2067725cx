import Articulo from "../models/articulo.js"


const  existeArticuloById=async (id)=>{

    const existe= await Articulo.findById(id)

    if (!existe) throw new Error(`El id no existe ${id}`)

}
const  existeArticuloByNombre=async (nombre)=>{

    const existe= await Articulo.findOne({nombre})

    if (!existe) throw new Error(`Ya existe un articulo con ese nombre`)

}


 export {existeArticuloById,existeArticuloByNombre}