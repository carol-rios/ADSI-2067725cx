import mongoose from 'mongoose' 

const compraShema = mongoose.Schema({
    usuario:{type:mongoose.Schema.Types.ObjectId,ref:'usuario',require:true},//NO SE MODIFICA
    persona:{type:mongoose.Schema.Types.ObjectId,ref:'persona',require:true},//NO SE MODIFICA
    tipoComprobante:{type : String,maxlength: 25 }, //NO SE MODIFICA
    serieComprobante:{type : Number,maxlength: 7,unique: true }, //NO SE MODIFICA
    numComprobante:{type : Number,maxlength: 10,unique: true }, //NO SE MODIFICA
    impuesto:{type : Number,maxlength: 10 },
    total:{type : Number,maxlength: 10 },
    detalles:[{
      _id:{type:mongoose.Schema.Types.ObjectId, ref:`Articulo`,require:true},
    nombre: { type : String,  maxlength: 50 },
    cantidad:{ type: Number, default:0 },
    precio:{ type: Number, default:0 },
    // descuento:{type:Number , default:0}
  }],
    serieComprobante:{type : Number,maxlength: 7,unique: true }, 
    estado: { type:Number, default: 1 },  //1:ACTIVO 0:INACTIVO -NO SE MODIFICA
    createAt: { type:Date, default: Date.now } //NO SE MODIFICA
});

export default mongoose.model('Compra',compraShema)