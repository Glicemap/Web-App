import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConfigProvider } from './contexts/ConfigContext';
import { PersistGate } from 'redux-persist/integration/react';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persister } from './store';
import ListFilterProvider from './contexts/ListFilter';
import PatientFilterProvider from './contexts/PatientFilter';
import PatientCodeProvider from './contexts/PatientCode';
import LoginCodeProvider from './contexts/LoginCode';

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider>
            <PersistGate loading={null} persistor={persister}>
                <ListFilterProvider>
                    <PatientFilterProvider>
                        <PatientCodeProvider>
                            <LoginCodeProvider>
                                <App />
                            </LoginCodeProvider>
                        </PatientCodeProvider>
                    </PatientFilterProvider>
                </ListFilterProvider>
            </PersistGate>
        </ConfigProvider>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
