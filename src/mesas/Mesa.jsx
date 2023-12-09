import React from 'react';

import { listarMesas, obtenerMesaPorId, crearMesa, actualizarMesa, eliminarMesaPorId } from '../api/request/mesaService';

const mesaPrueba = {
    capacidad: 4, //hasta 6 max
    //No es necesario que se le pase dsi esta discponible o no el bakcent solito lo hace
};

const mesaPruebaParaActualiozar = {
    capacidad: 6, //hasta 6 max
};

const Mesa = () => {
    const handleListarMesas = async () => {
        console.log(await listarMesas());
    };

    const handleObtenerMesaPorId = async (id) => {
        console.log(await obtenerMesaPorId(id));
    };

    const handleCrearMesa = async (mesa) => {
        console.log(await crearMesa(mesa));
    };

    const handleActualizarMesa = async (id, mesa) => {
        console.log(await actualizarMesa(id, mesa));
    };

    const handleEliminarMesaPorId = async (id) => {
        console.log(await eliminarMesaPorId(id));
    };

    return (
        <div>
            <button onClick={handleListarMesas}>Listar Mesas</button>
            <button onClick={() => handleObtenerMesaPorId(6)}>Obtener Mesa por ID</button>
            <button onClick={() => handleCrearMesa(mesaPrueba)}>Crear Mesa</button>
            <button onClick={() => handleActualizarMesa(11, mesaPruebaParaActualiozar)}>Actualizar Mesa</button>
            <button onClick={() => handleEliminarMesaPorId(11)}>Eliminar Mesa por ID</button>
        </div>
    );
};

export default Mesa;
