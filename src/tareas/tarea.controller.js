import Tarea from "../tareas/tarea.model.js"
import bcrypts from "bcryptjs"

export const tareasGet = async ( req, res ) => {
    try {
        const tareas = await Tarea.find();

        res.status( 200 ).json( tareas );
    } catch ( error ) {
        console.error( "Error al obtener las tareas:", error );
        res.status( 500 ).json( { error: 'Error al obtener las tareas' } );
    }
};

export const tareasPost = async ( req, res ) => {
    try {
        const { nombreTarea, descripcion, fechaDeInicio, fechaDeCierre, name, lastName } = req.body;

        const nuevaTarea = new Tarea( {
            nombreTarea,
            descripcion,
            fechaDeInicio,
            fechaDeCierre,
            name,
            lastName
        } );

        await nuevaTarea.save();

        res.status( 201 ).json( nuevaTarea );
    } catch ( error ) {
        console.error( "Error al agregar la tarea:", error );
        res.status( 500 ).json( { error: 'Error al agregar la tarea' } );
    }
};

export const tareasPut = async ( req, res ) => {
    try {
        const { id } = req.params;
        const { nombreTarea, descripcion, fechaDeInicio, fechaDeCierre, estado, name, lastName } = req.body;

        const tareaActualizada = await Tarea.findByIdAndUpdate( id, {
            nombreTarea,
            descripcion,
            fechaDeInicio,
            fechaDeCierre,
            estado,
            name,
            lastName
        }, { new: true } );

        await tareaActualizada.save();

        res.status( 200 ).json( tareaActualizada );
    } catch ( error ) {
        console.error( "Error al actualizar la tarea:", error );
        res.status( 500 ).json( { error: 'Error al actualizar la tarea' } );
    }
}

export const tareasDelete = async ( req, res ) => {
    const { id } = req.params;
    const deletedTask = await Tarea.findByIdAndDelete( { _id: id } );

    res.status( 200 ).json( { msg: 'Se elimino la tarea asignada', Task: deletedTask } )
}

export const putEstado = async ( req, res ) => {
    try {
        const { id } = req.params;
        const tarea = await Tarea.findById( id );
        const estadoTarea = () => {
            return tarea.estado
        }
        const tareaActualizada = await Tarea.findByIdAndUpdate( id, {
            estado: !estadoTarea()
        }, { new: true } );

        await tareaActualizada.save();
        if ( !tareaActualizada ) {
            return res.status( 404 ).json( { error: 'Tarea no encontrada' } );
        }

        res.status( 200 ).json( { tareaActualizada } );
    } catch ( error ) {
        console.error( "Error al actualizar el estado de la tarea:", error );
        res.status( 500 ).json( { error: 'Error al actualizar el estado de la tarea' } );
    }
};
