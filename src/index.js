import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/integration/react';

import HomePage from './Route/HomePage/HomePage';
import CheckoutPage from './Route/CheckoutPage/CheckoutPage';
import ConfirmationPage from './Route/ConfirmationPage/ConfirmationPage';
// import MangoPage from './Route/MangoPage/MangoPage';
import FruitPage from './Route/FruitPage/FruitPage';
import InfoPage from './Route/InfoPage/InfoPage';
import ReportPage from './Route/ReportPage/ReportPage';
import rootReducer from './Containers/reducers';
import { checkoutPageData } from './resources/data'
import './style.scss';


const pageNotFoundMessage = () => {
    return (
        <Fragment>
            Fruit which you are <br />looking for currently not available !!
        </Fragment>
    )
}

const errorMessage = () => {
    return (
        <Fragment>
            Opps, Something went wrong !! <br />Please try again.
        </Fragment>
    )
}

const timeoutMessage = () => {
    return (
        <Fragment>
            High traffic !! <br />Please try again, after some time.
        </Fragment>
    )
}

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
                    <Switch>
                        <Route path="/"
                            exact
                            render={(props) => <HomePage {...props} showNavigation />}
                        />

                        <Route path="/mango"
                            exact
                            render={(props) => <FruitPage {...props}
                                type="mango"
                                showNavigation />}
                        />

                        <Route path="/pomegranate"
                            exact
                            render={(props) => <FruitPage {...props}
                                isPrebook={true}
                                type="pomegranate"
                                showNavigation />}
                        />

                        <Route path="/guava"
                            exact
                            render={(props) => <FruitPage {...props}
                                isPrebook={true}
                                type="guava"
                                showNavigation />}
                        />

                        <Route path="/dragon-fruit"
                            exact
                            render={(props) => <FruitPage {...props}
                                isPrebook={true}
                                type="dragon-fruit"
                                showNavigation />}
                        />

                        <Route path="/checkout"
                            exact
                            render={(props) => <CheckoutPage {...props} data={checkoutPageData} />}
                        />
                        <Route path="/report"
                            exact
                            render={(props) => <ReportPage {...props} />}
                        />
                        <Route path="/confirmation"
                            exact
                            render={(props) => <ConfirmationPage {...props} />}
                        />

                        <Route path="/error"
                            exact
                            render={(props) => <InfoPage {...props} message={errorMessage} />}
                        />

                        <Route path="/timeout"
                            exact
                            render={(props) => <InfoPage {...props} message={timeoutMessage} />}
                        />
                        <Route path="*"
                            render={(props) => <InfoPage {...props} message={pageNotFoundMessage} />}
                        />
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
