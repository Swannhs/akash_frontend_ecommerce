import React, {useEffect, useState} from 'react';
import axios from "axios";
import CardProduct from "./CardProduct";

const FeatureProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
            await axios.get('http://localhost/cake/products/api.json', {
                headers: {'Content-Type': 'application/json'}
            })
                .then(response => {
                    setProducts(response.data.products)
                })
        }
        fetchProducts();
    },[])

    return (
        <div className="small-container">
            <h2 className="title"> Products</h2>
            <div className="row">
                {
                    products.map((product => {
                        return <CardProduct
                            id={product.product_id}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            price={product.price}/>
                    }))
                }
            </div>
        </div>
    );
};

export default FeatureProduct;
