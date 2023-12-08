import { configureStore } from '@reduxjs/toolkit';
import {authSlice, reservaSlice } from './';
export const store = configureStore({
    reducer: {
        auth:     authSlice.reducer,
        reserva: reservaSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
