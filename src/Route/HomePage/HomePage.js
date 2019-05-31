import React from 'react';
import Layout from './../../Components/_UI/Layout/Layout';
import './HomePage.scss';
const HomePage = (props) => {
    return (
        <Layout showNavigation={props.showNavigation}>
            <main className="HomePage">
                <ul>
                    <li>Mango</li>
                    <li>Guava</li>
                    <li>Gragon Fruit</li>
                    <li>Pomegranate</li>
                </ul>
            </main>
        </Layout>
    );
};


export default HomePage;