import React from 'react';
import Layout from './../../Components/_UI/Layout/Layout';
import UserForm from './../../Components/_Section/UserForm/UserForm'

const CheckoutPage = ({ data }) => {
    return (
        <Layout>
            <div className="checkoutPage section-top-spacing-layout container">
                <div className="content">
                    <div className="col-3 product white-box">

                    </div>
                    <div className="col-9 white-box">
                        <h1 className="main-title small">
                            {data.deliveryTitle()}
                        </h1>
                        <UserForm />
                    </div>
                </div>
            </div>
        </Layout>
    );
};


export default CheckoutPage;