import React from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { AppRoutes } from './router/AppRoutes';


export const CarrosApp = () => {
    return (
        <Provider store={ store }>
            <AppRoutes />
        </Provider>   
    )
}
