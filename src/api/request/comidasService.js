import apiConsultasConToken from "../apiConsultasConToken";

const BASE_URL = '/comida';

export const listarComidas = async () => {
  try {
    const response = await apiConsultasConToken.get(`${BASE_URL}/listar`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const obtenerComidaPorId = async (id) => {
  try {
    const response = await apiConsultasConToken.get(`${BASE_URL}/buscar-comida/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


//Por el backend si no me olvido si no se le pasa el id de la imagen le pondra una generica 
export const crearComidaConImagen = async (comida, idImagen) => {
  try {
    const response = await apiConsultasConToken.post(`${BASE_URL}/agregar-comida/${idImagen}`, comida);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



/*
forma basica 
{
    "nombre": "Ceviche de Mariscos con pescado frito",
    "descripcion": "El ceviche clasico de toda la vida con unos buenos mariscos",
    "precio": 35.50
}
*/
//id de la comida, id de la imagen y comida el objeto )
export const actualizarComida = async (id, comida, idImagen) => {
  try {
    const response = await apiConsultasConToken.put(`${BASE_URL}/actualizar-comida/${id}/${idImagen}`, comida);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const eliminarComidaPorId = async (id) => {
  try {
    const response = await apiConsultasConToken.delete(`${BASE_URL}/eliminar/${id}`);
    
    // Verificar si la eliminación fue exitosa (código de estado 204 No Content)
    if (response.status === 204) { //Indica que l oque retorno mno hay contenido
      return true;
    } else {
      console.error('Error al eliminar la comida por ID - Respuesta inesperada', response.status);
      return false;
    }
  } catch (error) {
    console.error('Error al eliminar la comida por ID', error);
    return false;
  }
};
