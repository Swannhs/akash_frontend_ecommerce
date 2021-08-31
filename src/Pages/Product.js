import React, {Component} from 'react';
import Layout from "../Components/Layout";
import CardProduct from "../Components/CardProduct";
import axios from "axios";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    onApiCall = async () => {
        await axios.get('http://localhost/cake/products/api.json', {
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => {
                this.setState({
                    products: response.data.products
                })
            })
    }


    componentDidMount() {
        this.onApiCall();
    }

    render() {
        return (
            <Layout>
                <div className="small-container">
                    <div className="row row-2">
                        <h2>All Products</h2>
                        <select>
                            <option>Default shorting</option>
                            <option>Short by Price</option>
                            <option>Short by Popularity</option>
                            <option>Short by Ratings</option>
                            <option>Short by Sale</option>
                        </select>
                    </div>
                    <div className="row">
                        {
                            this.state.products.map((product => {
                                return <CardProduct
                                    name={product.name}
                                    imageUrl={product.imageUrl}
                                    price={product.price}/>
                            }))
                        }
                    </div>

                    <div className="page-btn">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>→</span>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Product;
