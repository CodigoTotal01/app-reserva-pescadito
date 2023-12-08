import { apiConsultasConToken } from "../api";
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import {onLoadReserva} from "../store/reservas/reservaSlice"

const pathActual = "/reserva/listar"
const dispatch = useDispatch();

export const useReservaStore = () => {

    const {isLoadingReservas, reservas, activeReserva} = useSelector(state => state.reserva);
    
    //Esto solo debe de ver el admin
    const startListarReservas = async() => {
        try{
             const {data} = await apiConsultasConToken.get(pathActual);
             dispatch(onLoadReserva(data)) //guardado en el store
        }catch(error)  {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo mostrar las reservas!',
              });
              console.log("No se puedo mostrar las reservas")
        }
    }


      /*
      //LA hora ivene sola, no se envia 
     "numeroPersonas": 6,
    "requerimientos": "tengo un hijo",
    "restriccionAlimentaria": "No comemos pescado",
    "mesas": [
        {
            "id": "6"
        },
        {
            "id": "7"
        }
    */
    //Usuario o admin - PEro no alguien que no se halla regstrado
    const startCrearReserva = async(usuario, reserva) => {
        try {
            const {data} = await apiConsultasConToken.post(`/reserva-usuario/${usuario.id}`, reserva);
            dispatch()
        }catch(error)  {
            console.log("No se pudo crear las reserva")   
       }
    }

    return {
        //* Propiedades
        isLoadingReservas, 
        reservas, 
        activeReserva,
        //* Metodos
        startListarReservas,
        startCrearReserva
    }

};
