import mongoose from "mongoose";

const categoriaSchema=mongoose.Schema({
nombre:{type:String,required:true,maxlength:50,unique:true},
description:{type:String,maxlength:255},
estado:{type:Number,default:1}, // 1:ACTIVO 0:INACTIVO
createdAt:{type:Date,default:Date.now}
})
export default mongoose.model('Categoria',categoriaSchema) 