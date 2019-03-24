import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {createStore } from 'redux';
import { Provider } from 'react-redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/integration/react';

import HomePage from './Route/HomePage/HomePage';
import CheckoutPage from './Route/CheckoutPage/CheckoutPage';
import ReportPage from './Route/ReportPage/ReportPage';
import rootReducer from './Containers/reducers';
import { checkoutPageData } from './resources/data'
import './style.scss';

const persistConfig = {
    key: "GoodRoots",
    storage,
    stateReconciler: autoMergeLevel2,
    version: "1.0.0"
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer);

let persistor = persistStore(store)

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <div>
                        <Route path="/"
                            exact
                            render={(props) => <HomePage {...props} showNavigation />}
                        />
                        <Route path="/checkout"
                            exact
                            render={(props) => <CheckoutPage {...props} data={checkoutPageData} />}
                        />

                        <Route path="/report"
                            exact
                            render={(props) => <ReportPage {...props} />}
                        />
                    </div>
                </Router>
            </PersistGate>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
