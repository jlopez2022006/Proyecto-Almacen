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

        res.status( 201 ).json( tareaGuardada );
    } catch ( error ) {
        console.error( "Error al agregar la tarea:", error );
        res.status( 500 ).json( { error: 'Error al agregar la tarea' } );
    }
};