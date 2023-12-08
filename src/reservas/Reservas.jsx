// Estoy usandolo de pruebas
import Swal from 'sweetalert2';
import {useEffect} from 'react';
import { useReservaStore } from '../hooks/useReservaStore';
import { useSelector } from 'react-redux';

const objetoParaRealizarLaReserva = {
    "fechaHoraReserva": new Date(),
    "numeroPersonas": 6,
    "requerimientos": "tengo un hijo",
    "restriccionAlimentaria": "No comemos pescado",
    "mesas": [
        {
            "id": "10"
        }
    ]
}

const objetoParaAcutalizarREserva = {
    "fechaHoraReserva": new Date(),
    "numeroPersonas": 6,
    "requerimientos": "tengo un hijo",
    "restriccionAlimentaria": "No comemos pescado",
    "mesas": [
        {
            "id": "3"
        }, {
            "id": "4"
        }
    ]
}


export const Reservas = () => {
    const {status, user, errorMessage} = useSelector(state => state.auth);



    const {startListarReservas, startCrearReserva, startActualizarReserva} = useReservaStore();

    //Listar las reservas
    const listarReservas = (event) => {
        event.preventDefault();
        startListarReservas();
       console.log("Mostrando el listado de reservas");
    }

    const crearReserva = (event) => {
        event.preventDefault();

        startCrearReserva(user, objetoParaRealizarLaReserva);
        
        console.log("Mostrando informacion de la reserva registrada");

    };

    //Aqui no se muy bien como hacerlo pero tiene que ir la reserva anterior (por el id que se utiliza en useReservaStore, si no les gusta cambiienlo por el numero nomas que parece mas facil)
    const actualizarReserva = (event) => { 
        event.preventDefault();
        const idMesaAnterior = 3; //POngan el que sea el previo a la reserva por ejempl oen este caso usamos 3 y 4, pongan cualquiera de esos xd la verddad esta bien complejo el problemita y esto solo lo soluciono, lo ideal es que se pase cualquier valor del arreglo de mesas[].id obtener un id de esa reserva y ya
        startActualizarReserva(1, objetoParaAcutalizarREserva, idMesaAnterior);
        console.log("Funciona el boton de actualziar reservas")
    }
    const eliminarReserva = (event) => {    
        event.preventDefault();

    };


    return (
        <>
        <button onClick={listarReservas}>
        Ver reservas
        </button>

        <button onClick={crearReserva}>
            Crear REserva
        </button>


        <button onClick={actualizarReserva}>
            Actualizar REserva
        </button>

        <button onClick={eliminarReserva}>
            ELiminar Reserva
        </button>
     
        </>

        
    );
};