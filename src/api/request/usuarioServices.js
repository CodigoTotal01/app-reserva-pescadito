import apiConsultasConToken from "../apiConsultasConToken";


const API_URL = '/usuarios';

/* FOrma de usar y obtener valores de funciones ayncronas (siempre la palabra async para indicar que sera de igua lforna asincrono y un await para esperar la respuesta de otra funcion asincrona)
    //Listar las reservas
    const listarUsuario = async(event) => {
        console.log(await listarUsuarios());
    }
*/
export const listarUsuarios = async () => {
  try {
    const response = await apiConsultasConToken.get(`${API_URL}/listar`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener la lista de usuarios', error);
    throw error;
  }
};

export const obtenerUsuarioPorId = async (id) => {
    try {
      const response = await apiConsultasConToken.get(`${API_URL}/ver/${id}`);
      
      if (response.status === 200) {
        return response.data;
      } else {
        console.error('Error al obtener el usuario por ID', response.statusText);
        throw new Error('Error al obtener el usuario por ID');
      }
    } catch (error) {
      console.error('Error al obtener el usuario por ID', error);
      throw error;
    }
  };


  export const obtenerUsuarioPorUsername = async (username) => {
    try {
      const response = await apiConsultasConToken.get(`${API_URL}/buscar-username/${username}`);
      
      if (response.status === 200) {
        return response.data;
      } else if (response.status === 404) {
        console.log('Usuario no encontrado');
        return null; // O puedes lanzar una excepción si prefieres
      } else {
        console.error('Error al obtener el usuario por nombre de usuario', response.statusText);
        throw new Error('Error al obtener el usuario por nombre de usuario');
      }
    } catch (error) {
      console.error('Error al obtener el usuario por nombre de usuario', error);
      throw error;
    }
  };

export const crearUsuario = async (usuario) => {
    try {
      const response = await apiConsultasConToken.post(`${API_URL}/crear`, usuario);
      return response.data;
    } catch (error) {
      console.error('Error al crear usuario', error);
      throw error;
    }
  };

  export const actualizarUsuario = async (id, usuario) => {
    try {
      const response = await apiConsultasConToken.put(`${API_URL}/update/${id}`, usuario);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar usuario', error);
      throw error;
    }
  };
  export const eliminarUsuarioPorId = async (id) => {
    try {
      const response = await apiConsultasConToken.delete(`${API_URL}/delete/${id}`);
      
      // Verificar si la eliminación fue exitosa (código de estado 204 No Content)
      if (response.status === 204) {
        return true;
      } else {
        console.error('Error al eliminar el usuario por ID - Respuesta inesperada', response.status);
        return false;
      }
    } catch (error) {
      console.error('Error al eliminar el usuario por ID', error);
      return false;
    }
  };