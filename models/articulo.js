import mongoose from "mongoose";

const articuloSchema=mongoose.Schema({
categoria:{type:mongoose.Schema.Types.ObjectId,ref:'Categoria', required:true},//NO SE MODIFICA
codigo:{type:String,required:true,maxlength:64,unique:true},//NO SE MODIFICA
nombre:{type:String,required:true,maxlength:50,unique:true},
descripcion:{type:String,maxlength:300},
precioVenta:{type:Number,default:0},
stock:{type:Number,default:0},
estado:{type:Number,default:1}, // 1:ACTIVO,0:INACTIVO
createdAt:{type:Date,default:Date.now}//NO SE MODIFICA
})
export default mongoose.model('Articulo',articuloSchema) 