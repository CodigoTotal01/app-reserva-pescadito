import { apiConsultasConToken } from "../api";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { onCrearReserva, onLoadReserva } from "../store/reserva/reservaSlice";

const pathActual = "/reserva/listar";

export const useReservaStore = () => {

    //Pasar la informacion de las reservas
    const {isLoadingReservas, reservas, activeReserva} = useSelector(state => state.reserva);

  const dispatch = useDispatch();

  //Esto solo debe de ver el admin
  const startListarReservas = async () => {
    try {
      const { data } = await apiConsultasConToken.get(pathActual);
      dispatch(onLoadReserva(data)); //guardado en el store n orequiere token pero igual funciona
    } catch (error) {
      console.log("No se puedo mostrar las reservas");
    }
  };

  const startCrearReserva = async (usuario, reserva) => {
    try {

        /*COntenido a enviar: 
        {
            "fechaHoraReserva": "2023-10-09T14:30:00",
            "numeroPersonas": 6,
            "requerimientos": "tengo un hijo",
            "restriccionAlimentaria": "No comemos pescado",
            "mesas": [
                {
                    "id": "3"
                }
            ]
        }
        */
       
      const { data } = await apiConsultasConToken.post(
        `/reserva/reserva-usuario/${usuario.id}`,
        reserva
      );
      console.log(data);
      dispatch(onCrearReserva(data)); //guardado en el store n orequiere token pero igual funciona

      /* Respueta esperada:
            {
                "id": 5,
                "horaDeCreacion": "2023-12-07T22:58:57.6678685",
                "fechaHoraReserva": "2023-10-09T14:30:00",
                "usuario": {
                    "id": 47,
                    "username": "arianaP",
                    "nombre": "arianaP",
                    "apellido": "arianaP",
                    "email": "arianaP@gmail.com",
                    "celular": "219034785"
                },
                "numeroPersonas": 6,
                "mesas": [
                    {
                        "id": 1,
                        "capacidad": 6,
                        "disponible": false
                    }
                ],
                "requerimientos": "tengo un hijo",
                "restriccionAlimentaria": "No comemos pescado"
            }
            
            */
    } catch (error) {
      console.log("No se pudo crear las reserva");
    }
  };

  return {
    //* Propiedades
    isLoadingReservas,
    reservas, 
    activeReserva,
    //* Metodos
    startListarReservas,
    startCrearReserva,
  };
};
