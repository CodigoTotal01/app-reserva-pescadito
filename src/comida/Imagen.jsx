import React from 'react';

import { listarImagenes, 
    obtenerImagenPorNombre, 
    obtenerImagenPorId, 
    uploadImagen, 
    eliminarImagenPorId } from '../api/request/imagenService.js';

const Imagen = () => {
    const handleListarImagenes = async () => {
        console.log(await listarImagenes());
    };

    const handleObtenerImagenPorNombre = async (nombre) => {
        console.log(await obtenerImagenPorNombre(nombre));
    };

    const handleObtenerImagenPorId = async (id) => {
        console.log(await obtenerImagenPorId(id));
    };

    const handleUploadImagen = async (multipartFile) => {
        console.log(await uploadImagen(multipartFile));
    };

    const handleEliminarImagenPorId = async (id) => {
        console.log(await eliminarImagenPorId(id));
    };

    return (
        <div>
            <button onClick={handleListarImagenes}>Listar Imágenes</button>
            <button onClick={() => handleObtenerImagenPorNombre('nombreImagen')}>Obtener Imagen por Nombre</button>
            <button onClick={() => handleObtenerImagenPorId('imagenId')}>Obtener Imagen por ID</button>
            <button onClick={() => handleUploadImagen('multipartFile')}>Subir Imagen</button>
            <button onClick={() => handleEliminarImagenPorId('imagenId')}>Eliminar Imagen por ID</button>
        </div>
    );
};

export default Imagen;
