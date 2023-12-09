import apiConsultasConToken from "../apiConsultasConToken";

const BASE_URL = '/imagen';

export const listarImagenes = async () => {
  try {
    const response = await apiConsultasConToken.get(`${BASE_URL}/listar`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const obtenerImagenPorNombre = async (nombre) => {
  try {
    const response = await apiConsultasConToken.get(`${BASE_URL}/obtener-por-nombre?nombre=${nombre}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const obtenerImagenPorId = async (id) => {
  try {
    const response = await apiConsultasConToken.get(`${BASE_URL}/obtener-por-id?id=${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


//Literal aqui tienen que pasarle una foto:
export const uploadImagen = async (multipartFile) => {
  try {
    const formData = new FormData();
    formData.append('multipartFile', multipartFile);

    const response = await apiConsultasConToken.post(`${BASE_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data; //retornara algo asi
    /*
    {
    "id": "657496de74019e4612568f51",
    "nombre": "nendoroid20",
    "imagenUrl": "http://res.cloudinary.com/darojvldd/image/upload/v1702139617/jvj8r4lal3bt7evxgu0s.jpg",
    "imagenId": "jvj8r4lal3bt7evxgu0s"
}
    */
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// el id como vieron en el upload imagen es un string 
export const eliminarImagenPorId = async (id) => {
  try {
    const response = await apiConsultasConToken.delete(`${BASE_URL}/delete-image/${id}`);
    
    // Verificar si la eliminación fue exitosa (código de estado 204 No Content)
    if (response.status === 204) {
      return true;
    } else {
      console.error('Error al eliminar la imagen por ID - Respuesta inesperada', response.status);
      return false;
    }
  } catch (error) {
    console.error('Error al eliminar la imagen por ID', error);
    return false;
  }
};
