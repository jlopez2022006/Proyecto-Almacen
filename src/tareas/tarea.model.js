import mongoose, { Schema } from 'mongoose'

const TareaSchema = mongoose.Schema({
    nombreTarea: {
        type: String,
        unique: true
    },
    descripcion:{
        type: String,
        unique: true
    },
    fechaDeInicio:{
        type: String,
        unique: String
    },
    fechaDeCierre:{
        type: String
    },
    estado:{
        type: Boolean,
        default: true
    },
    nombre:{
        type: String,
        unique: true
    },
    apellido:{
        type: String,
        unique: true
    }
})

export default mongoose.model('Tarea', TareaSchema)