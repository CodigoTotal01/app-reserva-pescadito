import React from 'react';
import {listarUsuarios, 
    obtenerUsuarioPorId, 
    obtenerUsuarioPorUsername, 
    crearUsuario,
    actualizarUsuario,
    eliminarUsuarioPorId
} from '../api/request/usuarioServices.js';


// Asi luce el objeto de usuario
/*

//! Cuando se crea un usuairo o cualquier cosa nunca se mando un id tenerlo en cuenta sol olo borran y ya nun 

//Porfa pongan nombres cortos xd porque lago se huevea, igua lcon los paellidos
{
    "id": 45,
    "username": "gampi",
    "password": "12345",--> se codificara en el backend asi, solo pongan una contra simple :$2a$10$2xBOl1CN4xffZ23V9d5s1./vxdmwF/KdVSuUsgrutbUNg9D3B/6eK
    "enabled": true,
    "nombre": "gampi",
    "apellido": "gampi gampi",
    "email": "gampi@bolsadeideas.com",
    "celular": "098789876", // 9 numeros si o si
    "roles": [ //Aqui sera arministrador el usuario que se cree para hacerlo user mas abajito lo pondre
        {
            "id": 2,
            "nombre": "ROLE_ADMIN"
        }
    ]
}

    PAra crear un usuario con rol de usuario

        {
            "id": 1,
            "nombre": "ROLE_USER"
        }

        PAra rol de empleado
         {
            "id": 3,
            "nombre": "ROLE_EMPLOYEE"
        }
*/

const usuarioPrueba = {
    "username": "Analis",
    "password": "12345",
    "enabled": true,
    "nombre": "Analis",
    "apellido": "Rodriguez",
    "email": "analis@bolsadeideas.com",
    "celular": "157935421",
    "roles": [
        {
            "id": 2,
            "nombre": "ROLE_ADMIN"
        }
    ]
}

const usuarioPruebaParaActualizar = {
    "username": "anaclaudia",
    "password": "12345",
    "enabled": true,
    "nombre": "Analis",
    "apellido": "Rodriguez",
    "email": "analis@bolsadeideas.com",
    "celular": "157935421",
    "roles": [
        {
            "id": 2,
            "nombre": "ROLE_ADMIN"
        }
    ]
}
const Usuario = () => {
    const handleListarUsuarios = async () => {
        console.log(await listarUsuarios());
    };

    const handleObtenerUsuarioPorId = async (id) => {
        console.log(await obtenerUsuarioPorId(id));
    };

    const handleObtenerUsuarioPorUsername = async (username) => {
        console.log(await obtenerUsuarioPorUsername(username));
    };

    const handleCrearUsuario = async (usuario) => {
        console.log(await crearUsuario(usuario));
    };

    const handleActualizarUsuario = async (id, usuario) => {
        console.log(await actualizarUsuario(id, usuario));
    };

    //Retornan booleanos
    const handleEliminarUsuarioPorId = async (id) => {
        console.log(await eliminarUsuarioPorId(id));
    };

    return (
        <div>
            <button onClick={handleListarUsuarios}>Listar Usuarios</button>
            <button onClick={() => handleObtenerUsuarioPorId(5)}>Obtener Usuario por ID</button>
            <button onClick={() => handleObtenerUsuarioPorUsername('Analis')}>Obtener Usuario por Username</button>
            <button onClick={() => handleCrearUsuario(usuarioPrueba)}>Crear Usuario</button>
            <button onClick={() => handleActualizarUsuario(53, usuarioPruebaParaActualizar)}>Actualizar Usuario</button>
            <button onClick={() => handleEliminarUsuarioPorId(53)}>Eliminar Usuario por ID</button>
        </div>
    );
};

export default Usuario;
