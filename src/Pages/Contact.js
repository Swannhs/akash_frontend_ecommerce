import React, {Component} from 'react';
import Layout from "../Components/Layout";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phone: ''
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        axios.get('http://localhost/cake/customers/api-registration.json', {
            params: {
                name: this.state.name,
                address: this.state.address,
                phone: this.state.phone
            }
        }).then(response => {
            toast(response.data.message);
        })
    }

    render() {
        return (
            <Layout>
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="fname">Name</label>
                            <input type="text" id="fname" name="name" placeholder="Your name.."
                                   value={this.state.name}
                                   onChange={event => {
                                       this.setState({
                                           name: event.target.value
                                       })
                                   }}
                            />
                            <label htmlFor="lname">Address</label>
                            <input type="text" id="lname" name="address" placeholder="Your address"
                                   value={this.state.address}
                                   onChange={event => {
                                       this.setState({
                                           address: event.target.value
                                       })
                                   }}
                            />
                            <label htmlFor="lname">Phone</label>
                            <input type="text" id="lname" name="phone" placeholder="Your phone number"
                                   value={this.state.phone}
                                   onChange={event => {
                                       this.setState({
                                           phone: event.target.value
                                       })
                                   }}
                            />
                            <label htmlFor="subject">Subject</label>
                            <input type="submit" defaultValue="Submit"/>
                        </form>
                    </div>
            </Layout>
        );
    }


};

export default Contact;
