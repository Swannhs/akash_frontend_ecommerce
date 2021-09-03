import React, {useEffect, useState} from 'react';
import Layout from "../Components/Layout";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {toast} from "react-toastify";

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [address, setAddress] = useState('');
    useEffect(() => {
        async function fetchProduct() {
            await axios.get('http://localhost/cake/products/api-view.json', {
                headers: {'Content-Type': 'application/json'},
                params: {
                    id: id
                }
            })
                .then(response => {
                    setProduct(response.data.product)
                })
        }

        fetchProduct();
    }, [])

    const orderApi = (event, props) => {
        event.preventDefault();
        axios.get('http://localhost/cake/orders/api.json', {
            params: {
                product_id: props.product_id,
                name: product.name,
                address: address
            }
        })
            .then(response => {
                toast(response.data.message);
            })
    }
    return (
        <Layout>
            <div className="small-container single-product">
                <div className="row">
                    <div className="column-2">
                        <img src={`../${product.imageUrl}`} width="100%" id="ProductImg"/>
                    </div>
                    <div className="column-2">
                        <p>{product.name}</p>
                        <h4>{product.price} $</h4>
                        <h3>Enter your address</h3>
                        <input type='text' value={address} onChange={event => {
                            setAddress(event.target.value)
                        }}/>
                        <Link to="#" className="btn" onClick={event => orderApi(event, product)}>Buy Now</Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProductDetails;
