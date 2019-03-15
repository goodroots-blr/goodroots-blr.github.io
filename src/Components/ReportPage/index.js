import React, { Component } from 'react';
import { ReadFromFirebase } from './../../Firebase';
import './ReportPage.scss';


const convertIntoArray = (data) => {
    let convertedData = [];
    if (!!data)
        convertedData = Object.keys(data).map(i => data[i])
    return convertedData
}
class ReportPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 1
        }
    }
    componentDidMount() {
        ReadFromFirebase('customers').then((snapshot) => {
            this.setState({ data: convertIntoArray(snapshot.val()) })
        })
    }
    renderTable = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Product</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map((d, i) => {
                            return (
                                <tr key={`${i.toString()}`}>
                                    <td>{i + 1}</td>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.contactNumber}</td>
                                    <td>{d.selectedProduct}</td>
                                    <td>{d.address}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )

    }
    render() {
        return (
            <div className="reportPage">
                <div className="container">
                    <h1>Report - </h1>
                    {this.state.data === 1 && <div className="loading-animation-container">
                        <div class="loader-six">
                            <h1 data-text="It's loading…" className="text">It's loading…</h1>
                        </div>
                    </div>}
                    {this.state.data.length === 0 && <h2>No records found</h2>}
                    {this.state.data.length && this.renderTable()}
                </div>
            </div>
        );
    }
}


export default ReportPage;