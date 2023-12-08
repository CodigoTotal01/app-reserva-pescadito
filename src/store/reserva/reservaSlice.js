import {createSlice} from "@reduxjs/toolkit";
/*

curl --location 'http://localhost:8003/reserva-usuario/16' \
--data '{
    "fechaHoraReserva": "2023-10-09T14:30:00",
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
    ]
}'

*/
export const reservaSlice = createSlice({
    name: 'reserva',
    initialState: {
        isLoadingReservas: true,
        reservas: {},
    },
    reducers: {
        onLoadReserva: (state, {payload = []}) => {
            state.isLoadingReservas = false;
            state.reservas = payload; 
        },
        onCrearReserva: (state, {payload}) => {
            state.reservas.push(payload); // recarga el arreglo de reservas
        },
        onEliminarReserva: (state, {payload}) => {
            state.reservas = state.reservas.filter( reserva => reserva.id !== payload.id );
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    onLoadReserva,
    onCrearReserva,
    onEliminarReserva
} = reservaSlice.actions;