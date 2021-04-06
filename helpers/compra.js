import Compra from "../models/compra.js"


const  existeCompraById=async (id)=>{

    const existe= await Compra.findById(id)

    if (!existe) throw new Error(`El id no existe ${id}`)

}
const  existeCompraByNombre=async (nombre)=>{

    const existe= await Compra.findOne({nombre})

    if (!existe) throw new Error(`ya exsiste un compra  con ese nombre  `)

}


 export default {existeCompraById,existeCompraByNombre}