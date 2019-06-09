import React from 'react';
import Layout from './../../Components/_UI/Layout/Layout';
import { Link } from "react-router-dom";
import './HomePage.scss';
const HomePage = (props) => {
    return (
        <Layout showNavigation={props.showNavigation}>
            <main className="HomePage">
                <ul>
                    <li>
                        <Link to="/mango">
                            Mango
                        </Link>
                    </li>
                    <li>
                        <Link to="/guava">
                            Guava
                        </Link>
                    </li>
                    <li>
                        <Link to="/dragon-fruit">
                            Dragon Fruit
                        </Link>
                    </li>
                    <li>
                        <Link to="/pomegranate">
                            Pomegranate
                        </Link>
                    </li>
                </ul>
            </main>
        </Layout>
    );
};


export default HomePage;