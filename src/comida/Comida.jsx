import React from 'react';
import {
  listarComidas,
  obtenerComidaPorId,
  crearComidaConImagen,
  actualizarComida,
  eliminarComidaPorId,
} from '../api/request/comidasService';

const comidaPrueba = {
  nombre: "Ceviche de Mariscos con pescado frito",
  descripcion: "El ceviche clasico de toda la vida con unos buenos mariscos",
  precio: 35.50,
};

const comidaPruebaParaActualizar = {
  nombre: "Nuevo nombre de comida - Actualizada",
  descripcion: "Nueva descripción de comida",
  precio: 42.00,
};

const Comida = () => {
  const handleListarComidas = async () => {
    console.log(await listarComidas());
  };

  const handleObtenerComidaPorId = async (id) => {
    console.log(await obtenerComidaPorId(id));
  };

  const handleCrearComidaConImagen = async () => {
    // Asumiendo que tienes una función para obtener el id de la imagen
    const idImagen = "65236c59224fa13a0dc80611"
    console.log(await crearComidaConImagen(comidaPrueba, idImagen));
  };

  const handleActualizarComida = async (id) => {
    // Asumiendo que tienes una función para obtener el id de la imagen
    const idImagen = "65236c59224fa13a0dc80611"
    console.log(await actualizarComida(id, comidaPruebaParaActualizar, idImagen));
  };

  const handleEliminarComidaPorId = async (id) => {
    console.log(await eliminarComidaPorId(id));
  };

  const obtenerIdDeImagen = async () => {
    // Asumiendo que tienes una función para obtener el id de la imagen
    // Puedes implementar la lógica necesaria aquí según tus requisitos
    return await obtenerIdDeImagen();
  };

  return (
    <div>
      <h2>Comidas</h2>
      <button onClick={handleListarComidas}>Listar Comidas</button>
      <button onClick={() => handleObtenerComidaPorId(1)}>Obtener Comida por ID</button>
      <button onClick={handleCrearComidaConImagen}>Crear Comida con Imagen</button>
      <button onClick={() => handleActualizarComida(8)}>Actualizar Comida</button>
      <button onClick={() => handleEliminarComidaPorId(8)}>Eliminar Comida por ID</button>
    </div>
  );
};

export default Comida;