import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Route/HomePage/HomePage';
// import Report from './Route/ReportPage/ReportPage';
import './style.scss';

const App = props => {
    return (
        <Router>
            <div>
                <Route path="/" exact component={Home} />
                {/* <Route path="/report" exact component={Report} /> */}
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
