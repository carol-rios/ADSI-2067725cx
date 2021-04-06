import mongoose from 'mongoose'

const personaShema = mongoose.Schema({
    tipoPersona: { type: String, required:true, maxlength: 20 }, // CLIENTE O PROVEEDOR
    nombre: { type: String,required:true, maxlength: 40 },
    tipoDocumento: { type: String, required:true, maxlength: 25 },
    numeroDocumento: { type: String, required:true },
    direccion: {type:String, required:true, maxlenght:70},
    telefono: { type: String, required:true },
    email: { type: String, unique:true, maxlength: 40 },
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
})
export default mongoose.model('Persona', personaShema)