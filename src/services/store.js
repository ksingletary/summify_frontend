import {configureStore} from '@reduxjs/toolkit';
import { articleApi } from './article';

/* Configuring store, which is global state. Saves info from app.
Usually don't need entire state, but only reduce to a specific part, which is 
article api. *From redux toolkit store*
*/
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(articleApi.middleware)
})