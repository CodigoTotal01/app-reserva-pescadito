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
            "id": "12"
        }
    ]
}

export const Reservas = () => {
    const {status, user, errorMessage} = useSelector(state => state.auth);



    const {startListarReservas, startCrearReserva} = useReservaStore();

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


    return (
        <>
        <button onClick={listarReservas}>
        Ver reservas
        </button>

        <button onClick={crearReserva}>
            Crear REserva
        </button>
        </>

        
    );
};