import mongoose, { Schema } from 'mongoose'

const TareaSchema = mongoose.Schema({
    nombreTarea: {
        type: String,
        require: true
    },
    descripcion:{
        type: String
    },
    fechaDeInicio:{
        type: Date,
        require: true
    },
    fechaDeCierre:{
        type: Date,
        require: true
    },
    estado:{
        type: Boolean,
        default: true
    },
    name:{
        type: String,
        unique: true
    },
    lastName:{
        type: String,
        unique: true
    }
})

export default mongoose.model('Tarea', TareaSchema)