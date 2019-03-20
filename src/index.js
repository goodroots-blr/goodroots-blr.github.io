import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './Route/HomePage/HomePage';
import CheckoutPage from './Route/CheckoutPage/CheckoutPage';
import ReportPage from './Route/ReportPage/ReportPage';
import { checkoutPageData } from './resources/data'
import './style.scss';

const App = () => {
    return (
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
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
