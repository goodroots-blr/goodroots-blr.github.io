import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

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
let middlewares = [];
if (process.env.NODE_ENV === `development`) {
    const logger = createLogger();
    middlewares.push(logger);
}
     
const persistConfig = {
    key: "GoodRoots",
    storage,
    stateReconciler: autoMergeLevel2,
    version: "1.0.0"
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = compose(
    applyMiddleware(...middlewares),
)(createStore)(persistedReducer);

let persistor = persistStore(store)


const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
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
                </PersistGate>
            </Provider>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
