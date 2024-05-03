import mongoose, { Schema } from 'mongoose'

const TareaSchema = mongoose.Schema( {
    nombreTarea: {
        type: String,
        require: true
    },
    descripcion: {
        type: String
    },
    fechaDeInicio: {
        type: Date,
        require: true,

    },
    fechaDeCierre: {
        type: Date,
        require: true,

    },
    estado: {
        type: String,
        default: 'INCOMPLETA',
        enum: ['INCOMPLETA', 'COMPLETADO']
    },
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    }
} )

export default mongoose.model( 'Tarea', TareaSchema )