import categoria from '../models/categoria.js'

const existeCategoriaById=async (id)=>{

    const existe= await categoria.findById(id)

if (!exixte)throw new Error (`el ID no existe ${id}`)
    
}

const existeCategoriaByIdNombre=async (id)=>{

    const existe= await categoria.findOne({nombre})
    if (!exixte)throw new Error ('ya existe una categoria con ese nonbre')
}

export {existeCategoriaById,existeCategoriaByIdNombre}