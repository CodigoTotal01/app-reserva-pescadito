import apiConsultasConToken from "../apiConsultasConToken";


const BASE_URL = '/reserva/mesas';

// Obtener todas las mesas
export const listarMesas = async () => {
    try {
        const response = await apiConsultasConToken.get(`${BASE_URL}/listar`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Obtener una mesa por su ID
export const obtenerMesaPorId = async (id) => {
    try {
        const response = await apiConsultasConToken.get(`${BASE_URL}/ver/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Crear una nueva mesa
export const crearMesa = async (mesa) => {
    try {
        const response = await apiConsultasConToken.post(`${BASE_URL}/crear`, mesa);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Actualizar una mesa existente
export const actualizarMesa = async (id, mesa) => {
    try {
        const response = await apiConsultasConToken.put(`${BASE_URL}/actualizar/${id}`, mesa);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Eliminar una mesa por su ID
export const eliminarMesaPorId = async (id) => {
    try {
      const response = await apiConsultasConToken.delete(`${BASE_URL}/delete/${id}`);
  
      // Verificar si la eliminación fue exitosa (código de estado 204 No Content)
      if (response.status === 204) {
        return true;
      } else {
        console.error('Error al eliminar la mesa por ID - Respuesta inesperada', response.status);
        return false;
      }
    } catch (error) {
      console.error('Error al eliminar la mesa por ID', error);
      return false;
    }
  };
