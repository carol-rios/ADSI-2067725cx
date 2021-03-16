import mongoose from 'mongoose'

const UsuarioSchema=mongoose.Schema({
    nombre:{type:String,required:true,maxlength:50},
    email:{type:String,unique:true,maxlength:50},
    password:{type:String,unique:true},
    rol :{type:String,unique:true,maxlength:20},
// ADMIN_ROL  VENDEDOR_R0L ALMACENISTA_ROL
    estado:{type:Number,dafault:1},
    createdAt:{type:Date,default:Date.now}


})

export default mongoose.model('Usuario',UsuarioSchema)