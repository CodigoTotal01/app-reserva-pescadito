import apiConsultasConToken from "../apiConsultasConToken";

const BASE_URL = '/reserva';

export const listarReservas = async () => {
  try {
    const response = await apiConsultasConToken.get(`${BASE_URL}/listar`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const obtenerReservaPorId = async (id) => {
  try {
    const response = await apiConsultasConToken.get(`${BASE_URL}/ver/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const obtenerReservasPorNombreUsuario = async (nombreUsuario) => {
  try {
    const response = await apiConsultasConToken.get(`${BASE_URL}/ver/nombre/${nombreUsuario}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const obtenerReservasPorIdUsuario = async (idUsuario) => {
  try {
    const response = await apiConsultasConToken.get(`${BASE_URL}/ver/user-id/${idUsuario}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const crearReservaPorUsuario = async (reserva, idUsuario) => {
  try {
    const response = await apiConsultasConToken.post(`${BASE_URL}/reserva-usuario/${idUsuario}`, reserva);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const eliminarReservaPorId = async (id) => {
  try {
    const response = await apiConsultasConToken.delete(`${BASE_URL}/delete/${id}`);
    
    // Verificar si la eliminación fue exitosa (código de estado 204 No Content)
    if (response.status === 204) {
      return true;
    } else {
      console.error('Error al eliminar la reserva por ID - Respuesta inesperada', response.status);
      return false;
    }
  } catch (error) {
    console.error('Error al eliminar la reserva por ID', error);
    return false;
  }
};

export const actualizarReserva = async (id, reserva) => {
  try {
    const response = await apiConsultasConToken.put(`${BASE_URL}/actualizar/${id}`, reserva);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
